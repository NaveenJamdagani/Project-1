$(document).ready(function()
{
	$(window).on("scroll",function()
	{
		var scrollTop = window.pageYOffset; // get number of pixels document has scrolled vertically
		var speed = 0.5;
		console.log(scrollTop);
	});
});