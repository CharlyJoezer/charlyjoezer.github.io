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
   const image = {
    'Cafe_order.png' : 'Order Kopi Online',
    'skakes.jpg' : 'Pemeriksaan Laboratorium',
    'PPM.jpg' : 'Pengaduan Masyarakat',
    'toko_online.png' : 'Website E-Commerce '
   };
   const getKey = Object.keys(image)
   const getValue = Object.values(image)
   let imgActive = 0
   $('#image-popup').attr('src', 'asset/'+getKey[imgActive])
   $('#about-image').html(getValue[imgActive])
   $('.bg-popup').css('display', 'block');
   
   $('.prev-btn').click(function(){
       if(imgActive == 0){
           return false;
        }
        $('#image-popup').attr('src', 'asset/'+getKey[imgActive - 1])
        $('#about-image').html(getValue[imgActive - 1])
        imgActive -= 1
    })
    $('.next-btn').click(function(){
        if(imgActive == 3){
            return false;
        }
        $('#image-popup').attr('src', 'asset/'+getKey[imgActive + 1])
        $('#about-image').html(getValue[imgActive + 1])
        imgActive += 1
        
   })

   $('.close-popup').click(function(){
        $('.bg-popup').css('display', 'none');
   });
});

$(document).ready(function(){
    const getDate = new Date();
    const getHours = getDate.getHours();
    if(getHours >= 0 && getHours < 12){
        $('.header-text h1').html('Good Morning')
    }else if(getHours >= 12 && getHours < 18){
        $('.header-text h1').html('Good Afternoon')
    }else if(getHours >= 18 && getHours < 24){
        $('.header-text h1').html('Good Evening')
    }else{
        $('.header-text h1').html('Keep Grinding')
    }
});
