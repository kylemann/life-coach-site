
$(window).load(function(){
$('a').click(function(){
$('html, body').animate({
scrollTop: $( $(this).attr('href') ).offset().top
}, 500);
return false;
});
});
        
        

           
$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
$('nav').addClass("sticky");
}
else{
$('nav').removeClass("sticky");
}
});
     