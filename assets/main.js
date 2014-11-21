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

var client = new ZeroClipboard( $(".copy"));
client.on( "ready", function(readyEvent) {
  client.on( "aftercopy", function(event) {
	$('#copied').fadeIn('slow');
	$('#copied').delay(2000).fadeOut('slow');
  } );
} );
