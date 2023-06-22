$(document).scroll(function() {
    let scroll = $(window).scrollTop();
    if(scroll > 0){
        $('.navbar').addClass('bg-navbar-event-scroll')
        $('.navbar-link, .navbar-header .image-and-text').addClass('navbar-link-event-scroll')
    }
    if(scroll == 0){
        $('.navbar').removeClass('bg-navbar-event-scroll')
        $('.navbar-link, .navbar-header .image-and-text').removeClass('navbar-link-event-scroll')
    }
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
