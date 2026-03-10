$(window).on("scroll", function(){
var scrolled = $(window).scrollTop();

$(".layer-1").css("transform","translateY("+(scrolled*0.2)+"px)");
$(".layer-2").css("transform","translateY("+(scrolled*0.4)+"px)");
$(".layer-3").css("transform","translateY("+(scrolled*0.6)+"px)");

$('.location .animate').each(function(){
    var top_of_element = $(this).offset().top;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if(bottom_of_window > top_of_element + 100){
        $(this).addClass('visible');
    }
});
});
