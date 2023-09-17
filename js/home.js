$(document).scroll(function() {
    let scroll = $(window).scrollTop();
    if(scroll > 0){
        $('.navbar-desktop').addClass('bg-navbar-event-scroll')
        $('.navbar-mobile').addClass('bg-navbar-event-scroll')
        $('.navbar-link, .navbar-header .image-and-text').addClass('navbar-link-event-scroll')
        $('.toggle-navbar-items').addClass('navbar-link-event-scroll')
    }
    if(scroll == 0){
        $('.navbar-desktop').removeClass('bg-navbar-event-scroll')
        $('.navbar-mobile').removeClass('bg-navbar-event-scroll')
        $('.navbar-link, .navbar-header .image-and-text').removeClass('navbar-link-event-scroll')
        $('.toggle-navbar-items').removeClass('navbar-link-event-scroll')
    }
})

$('.toggle-navbar-items').click(function(){
    $('.navbar-mobile .navbar-items').toggleClass('show-navbar-items-mobile')
    $('.navbar-mobile, .navbar-items').addClass('bg-navbar-event-scroll')
    $('.navbar-link, .navbar-header .image-and-text').addClass('navbar-link-event-scroll')
    $('.toggle-navbar-items').addClass('navbar-link-event-scroll')
})
$('.navbar-link, .button-navbar').click(function(){
    $('.navbar-mobile .navbar-items').removeClass('show-navbar-items-mobile')
})
$('.button-see-project').click(function(){
   $('.bg-popup').css('display', 'flex');
   $('body').css('overflow', "hidden");

   $('.close-popup').click(function(){
        $('body').css('overflow', "auto");
        $('.bg-popup').css('display', 'none');
   });
});

$(document).ready(function(){
    const getDate = new Date();
    const getHours = getDate.getHours();
    if(getHours >= 0 && getHours < 12){
        $('.header-text h1').html('Good Morning')
        $('.section-1').css('background-image', "url('../asset/bg-morning.jpg')")
    }else if(getHours >= 12 && getHours < 18){
        $('.header-text h1').html('Good Afternoon')
        $('.section-1').css('background-image', "url('../asset/bg-afternoon.jpg')")
    }else if(getHours >= 18 && getHours < 24){
        $('.header-text h1').html('Good Evening')
        $('.section-1').css('background-image', "url('../asset/bg-night.jpg')")
    }else{
        $('.header-text h1').html('Keep Grinding')
    }
});
