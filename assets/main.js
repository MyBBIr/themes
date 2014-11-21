$("#search").bind("change keyup focus blur", function()
{
	var search = $("#search").val().toLowerCase();
	$('.themename').each(function()
	{
		if($(this).text().toLowerCase().match(search)) {
			$(this).parent().show();
		}
		else
		{
			$(this).parent().hide();
		}
	});
});

var client = new ZeroClipboard( document.getElementsByClassName("copy"));
client.on( "load", function(client) {
  client.on( "complete", function(client, args) {
	// `this` is the element that was clicked
	this.style.display = "none";
	$('#copied').fadeIn('slow');
	$('#copied').delay(2000).fadeOut('slow');
  } );
} );
