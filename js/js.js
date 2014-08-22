$(document).ready(function ()
{			
	 $("a.toggler").click(function() {
		 $(this.hash).fadeToggle(); });
});

$(document).ready(function() {
  $(".content").show();
  $(".plus").click(function()
  {
    if ($(this).html() == "[+]") {
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs")

    $(this).next(".content").fadeToggle(500);
    $(this).html("[-]"); 
  }else{
    $(this).next(".content").fadeToggle(500);
    $(this).html("[+]"); 
     
  }
  });
});

$(function() {
  if(location.hash != "") {
    $(location.hash + ":hidden").fadeToggle();
  }
});