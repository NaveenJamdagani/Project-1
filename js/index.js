$(document).ready(function()
{
	var scrollTop = window.pageYOffset; // get number of pixels document has scrolled vertically
	$("#abc").on("click",function()
	{
		$("#sign-in").toggleClass("active");
	}); 
});