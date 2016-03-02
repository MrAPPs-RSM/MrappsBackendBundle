$(document).ready(function() {
	$("#left_toggler").click(function(){
		leftColumn=$("aside.aside");
		leftColumn.toggleClass("open");
	});
});