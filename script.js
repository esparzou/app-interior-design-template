/* show-menu */
$('#menu-handler').click(function(){
  $('nav').addClass('show-menu');
});
/* hide menu */
$('#close-menu').click(function(){
  $('nav').removeClass('show-menu');
});

/* modal */
 $(".img-modal").click(function(){
    $("#myModal").css({"display": "block"});
    $("#modimg").attr('src',$(this).attr('src')); 
    $("#caption").text($(this).attr("alt"));
});

$('#close-modal').click(function(){
  $("#myModal").css({"display": "none"});
});