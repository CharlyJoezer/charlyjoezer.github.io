var top = document.getElementById("trigger-scroll");
const navbar = document.getElementById("navbar-top");
const section2 = document.getElementById("section-3").scrollY;
const BASEURL = window.location.origin;
// EVENT WHEN SCROLL 
window.addEventListener("scroll", (event) => {
    scroll = this.scrollY;
    if (scroll > 422) {
                setTimeout(() => {
                    document.getElementById("icon-skill-1").style.opacity = 1;
                }, 200);
                setTimeout(() => {
                    document.getElementById("icon-skill-2").style.opacity = 1;
                }, 400);
                setTimeout(() => {
                    document.getElementById("icon-skill-3").style.opacity = 1;
                }, 600);
                setTimeout(() => {
                   document.getElementById("icon-skill-4").style.opacity = 1;
               }, 800);
            }
    if (scroll > 214) {
        document.getElementById("section3-text").style.opacity = 1;
    }

    // CHANGE NAVBAR OPACITY WHEN IN SECTION 2 
    if (scroll > $("#section-2").offset().top - 50) {
        navbar.style.background = "rgba(24, 63, 121, 0.8)";
        if($(window).width() <= 768){
            navbar.style.height = "45px";
        }else if($(window).width() <= 425){
            navbar.style.display = 'none'
        }else{
            navbar.style.height = "60px";
        }

        $('.section4-content').html(
            `<div class="box-image">
                <p>Aplikasi Pengaduan Masyarakat</p>
                <img src="asset/PPM.jpg" alt="Aplikasi Pengaduan Masyarakat">
            </div>
            <div class="box-image">
                <p>Aplikasi E-Commerce</p>
                <img src="asset/toko_online.png" alt="Aplikasi E-commerce terinsipirasi dari Tokopedia">
            </div>
            <div class="box-image">
                <p>Aplikasi Pesan Kopi Online</p>
                <img src="asset/Cafe_order.png" alt="Aplikasi Pesan Kopi Online">
            </div>
            <div class="box-image">
                <p>Aplikasi Pesan Kopi Online</p>
                <img src="asset/skakes.jpg" alt="Aplikasi Pesan Kopi Online">
            </div>
            `
        )
    }else {
        navbar.style.background = "rgba(24, 63, 121, 0)";
        navbar.style.height = "70px";
    }
    navbar.style.height = "70px";
    if($(window).width() <= 942){
        $('#section5-right-text').html('Send Your Message')
        $('#section5-right').css({'text-align': 'center'})
    }else {
        $('#section5-right-text').html('Or You can Leave Message For Me')
    }
    $('#navbar-items').removeClass('navbar-items-change')
    $('#list-navbar-items').removeClass('list-navbar-items-change-parent')
    $('#list-navbar-items').children('li').removeClass('list-navbar-items-change')
    $('#navbar-top').removeClass('navbar-top-change')
    $('#title-home').removeClass('title-home-change')
    $('#burger-navbar').removeClass('burger-navbar-change')

});
$('#title-home').click(()=>{
    $("HTML, BODY").animate({
        scrollTop : 0
    }, 500);
})
$('#navbar-items-profil, #button-header').click(()=>{    
    $("HTML, BODY").animate({
        scrollTop : $('#section-2').offset().top - 20
    }, 500);
})
$('#navbar-items-skill').click(()=>{
    $("HTML, BODY").animate({
        scrollTop : $('#section-3').offset().top - 50
    }, 500);
})
$('#navbar-items-project').click(()=>{
    $("HTML, BODY").animate({
        scrollTop : $('#section-4').offset().top - 50
    }, 500);
})
$('#navbar-items-contact').click(()=>{
    $("HTML, BODY").animate({
        scrollTop : $('#section-5').offset().top - 50
    }, 500);
})
$('#button-send-message').click(function(){
    $('#feedback-error').html('')
    if(
        !$('#input-email').val().length == 0 &&
        !$('#input-username').val().length == 0 &&
        !$('#input-message').val().length == 0
        ){
        if(IsEmail($('#input-email').val())){
            $.ajax({
                'url' : 'https://ppmcharly.000webhostapp.com/api/portfolio-message',
                'type': 'POST',
                'dataType': 'JSON',
                'data' : {
                    'email' : $('#input-email').val(),
                    'username' : $('#input-username').val(),
                    'message' : $('#input-message').val()
                },
                success: function(data){
                    $('#input-email').val('')
                    $('#input-username').val('')
                    $('#input-message').val('')
                    $('#feedback-error').css('color', 'green')
                    $('#feedback-error').html('Pesan Berhasil Terkirim Ke Charly')
                }
            })
        }else {
            $('#input-email').css('border-bottom', '2px solid red')
            $('#input-email').val('')
            $('#input-email').attr('placeholder', 'Invalid Email!')
        }
    }else{
        $('#feedback-error').html('Mohon kolom tidak boleh kosong!')
    }
});
function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)) {
      return false;
    }else{
      return true;
    }
}

$('#burger-navbar').click(function(){
    // LIST LINK SECTION
    $('#navbar-items').toggleClass('navbar-items-change')
    $('#list-navbar-items').toggleClass('list-navbar-items-change-parent')
    $('#list-navbar-items').children('li').toggleClass('list-navbar-items-change')
    $('#navbar-top').toggleClass('navbar-top-change')
    $('#title-home').toggleClass('title-home-change')
    $('#burger-navbar').toggleClass('burger-navbar-change')
    navbar.style.height = "auto";
    navbar.style.background = "rgba(24, 63, 121, 1)";

})
$('#close').click(function(){
    // LIST LINK SECTION
    $('#navbar-items').toggleClass('navbar-items-change')
    $('#list-navbar-items').toggleClass('list-navbar-items-change-parent')
    $('#list-navbar-items').children('li').toggleClass('list-navbar-items-change')
    $('#navbar-top').toggleClass('navbar-top-change')
    $('#title-home').toggleClass('title-home-change')
    $('#burger-navbar').toggleClass('burger-navbar-change')
    navbar.style.height = "70px";
    if(window.scrollY < $("#section-2").offset().top - 50){
        navbar.style.background = "rgba(24, 63, 121, 0)";
    }else{
        navbar.style.background = "rgba(24, 63, 121, 0.8)";
    }
})

$('.box-image').click(function(){
    $(this).children('img').attr('src', 'asset/skakes.png')
});
  

// Copas Script
$(function(){

    // Remove svg.radial-progress .complete inline styling
    $('svg.radial-progress').each(function( index, value ) { 
        $(this).find($('circle.complete')).removeAttr( 'style' );
    });

    // Activate progress animation on scroll
    $(window).scroll(function(){
        $('svg.radial-progress').each(function( index, value ) { 
            // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
            if ( 
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ) {
                // Get percentage of progress
                percent = $(value).data('percentage');
                // Get radius of the svg's circle.complete
                radius = $(this).find($('circle.complete')).attr('r');
                // Get circumference (2πr)
                circumference = 2 * Math.PI * radius;
                // Get stroke-dashoffset value based on the percentage of the circumference
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                // Transition progress for 1.25 seconds
                $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
            }
        });
    }).trigger('scroll');

});
