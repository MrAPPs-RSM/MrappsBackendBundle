<?php

namespace Mrapps\BackendBundle\Services;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Mrapps\BackendBundle\Classes\Operator;

class EntitiesProvider
{
    private $manager;

    private $entities;

    private $offset;
    private $limit;
    private $filters;
    private $sorting;

    private $queryParameters;

    public function __construct(
        EntityManager $manager
    )
    {
        $this->manager = $manager;
        $this->beginQuery();
    }

    public function beginQuery()
    {
        $this->entities = [];

        $this->offset = 0;
        $this->limit = 10;
        $this->filters = [];
        $this->sorting = [];

        $this->queryParameters = [];
    }

    private function setOffset($offset)
    {
        $this->offset = $offset;
    }

    private function setLimit($limit)
    {
        $this->limit = $limit;
    }

    private function getFullEntityName($entityName)
    {
        $exploded1 = explode(':', $entityName);
        if (count($exploded1) > 1) {
            $exploded2 = preg_split('/(?=[A-Z])/', $exploded1[0], -1, PREG_SPLIT_NO_EMPTY);
            $expCount = count($exploded2);
            if ($expCount > 1 && strtolower($exploded2[$expCount - 1]) == 'bundle') {
                $exploded2[$expCount - 2] = $exploded2[$expCount - 2] . $exploded2[$expCount - 1];
                unset($exploded2[$expCount - 1]);
            }
            $fullEntityName = implode('\\', $exploded2) . '\\Entity\\' . $exploded1[1];
        } else {
            $fullEntityName = $entityName;
        }

        if (!class_exists($fullEntityName) ||
            !$this->manager->getMetadataFactory()->isTransient($fullEntityName)
        ) {
            throw new \Exception("[EntitiesProvider] Invalid class name provided");
        }

        return $fullEntityName;
    }

    private function addEntityName($entityName, $alias, $type)
    {
        $this->entities[$entityName] = [
            "type" => $type,
            "alias" => $alias,
        ];
    }

    public function setPrimaryEntityName($primaryEntityName, $alias)
    {
        $fullEntityName = $this->getFullEntityName($primaryEntityName);
        $this->addEntityName($fullEntityName, $alias, "FROM");
    }

    public function innerJoinWith($propertyName, $alias)
    {
        $this->addEntityName($propertyName, $alias, "INNER_JOIN");
    }

    public function leftJoinWith($propertyName, $alias)
    {
        $this->addEntityName($propertyName, $alias, "LEFT_JOIN");
    }

    private function isDraftSubclass($entityFullName)
    {
        return is_subclass_of($entityFullName, 'Mrapps\\BackendBundle\\Entity\\Draft');
    }

    private function composeFullPropertyName($propertyName, $alias)
    {
        return printf("%s.%s", $alias, $propertyName);
    }

    private function addFilter($propertyName, $alias, $value, $operator = null)
    {
        $field = $this->composeFullPropertyName($propertyName, $alias);

        if (empty($operator)) {
            if (is_numeric($value) || is_object($value)) {
                $operator = Operator::Equal;
            } else {
                $operator = Operator::Like;
            }
        }

        $this->filters[$field] = [
            "alias" => $alias,
            "value" => $value,
            "operator" => $operator,
        ];
    }

    private function addSort($propertyName, $alias, $orderWay = 'ASC')
    {
        $sortFieldName = $this->composeFullPropertyName($propertyName, $alias);
        $this->sorting[] = printf(" %s %s", $sortFieldName, $orderWay);
    }

    private function paramNameFromFieldAndIndex($field, $index)
    {
        return str_replace(".", "_", $field) . "_" . $index;
    }


    private function composeWhereBlock()
    {
        $counter = 0;

        foreach ($this->filters as $filterField => $value) {

            $where = [];

            $parameterName = $this->paramNameFromFieldAndIndex($filterField, $counter);

            switch ($value["operator"]) {
                case Operator::IsNull:
                case Operator::IsNotNull:
                    $where[] = sprintf(" %s %s ", $filterField, $value["operator"]);
                    break;
                case Operator::In:
                case Operator::NotIn:
                    $where[] = sprintf(" %s %s (?%s) ", $filterField, $value["operator"], $parameterName);
                    $this->queryParameters[$parameterName] = $value["value"];
                    $counter++;
                    break;
                case Operator::InSubquery:
                    $where[] = sprintf(" %s %s (%s) ", $filterField, Operator::In, $value['value']);
                    break;
                case Operator::Like:
                    $where[] = sprintf(" %s LIKE :%s ", $filterField, $parameterName);
                    $this->queryParameters[$parameterName] = '%' . $value["value"] . '%';
                    break;
                default:
                    $where[] = sprintf(" %s %s :%s ", $filterField, $value["operator"], $parameterName);
                    $this->queryParameters[$parameterName] = $value["value"];
                    break;
            }
        }

        return count($where) > 0
            ? " WHERE " . implode("AND ", $where)
            : "";
    }

    private function composeSortBlock()
    {
        return " ORDER BY " . implode(",", $this->sorting);
    }

    private function composeDqlQuery()
    {
        if (count($this->entities) == 0) {
            throw new \Exception("[EntitiesProvider] Add at least one entity to get data");
        }

        $select = [];
        $fromQuery = "";

        foreach ($this->entities as $entityName => $value) {

            $select[] = $value["alias"];

            if (empty($fromQuery)
                && $value["type"] == "FROM"
            ) {
                $fromQuery = printf(" FROM %s %s ", $entityName, $value["alias"]);

                if ($this->isDraftSubclass($entityName)) {
                    $publishedField = $this->composeFullPropertyName("published", $value["alias"]);

                    if (!isset($this->filters[$publishedField])) {
                        $this->filters[$publishedField] = 0; //filtro di default
                    }
                }

                if (count($this->sorting) == 0) {
                    $createdAtField = $this->composeFullPropertyName("published", $value["alias"]);
                    $this->sorting[$createdAtField] = 'desc';    //Sorting di default
                }

            } else {

                if ($value["type"] == "INNER_JOIN") {
                    $join = " INNER JOIN ";
                } elseif ($value["type"] == "LEFT_JOIN") {
                    $join = " LEFT JOIN ";
                } else {
                    throw new \Exception("[EntitiesProvider] Invalid entity type\n" . $entityName . " -> " . $value["type"]);
                }

                $fromQuery .= printf(" %s %s.%s ", $join, $value["alias"], $entityName);
            }
        }

        $selectBlock = printf("SELECT %s ", implode(",", $select));

        $whereBlock = $this->composeWhereBlock();
        $sortBlock = $this->composeSortBlock();

        return $selectBlock . $fromQuery . $whereBlock . $sortBlock;
    }

    public function getResult()
    {
        $dqlQuery = $this->composeDqlQuery();
        $query = $this->manager->createQuery($dqlQuery);

        if (count($this->queryParameters) > 0) {
            $query->setParameters($this->queryParameters);
        }

        $query->setFirstResult($this->offset)
            ->setMaxResults($this->limit);

        $paginator = new Paginator($query, true);

        $result = [];

        foreach ($paginator->getIterator() as $item) {
            $result[] = $item;
        }

        return $result;
    }
}
