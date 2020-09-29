
$(document).ready(function() {
    // show menu
    $('.menu').on('click',function(e) {
        $('.nav-mobile').addClass('show');
        e.stopPropagation();
    });

    // menu mobile 
    $('.menu-w').on('click',function(e) {
        e.stopPropagation();
        $('.nav-mobile').addClass('show');
    })
    
    // hidden menu
    $('.btn_close').on('click',function() {
        $('.nav-mobile').removeClass('show');
    });

    $('body,html').on('click',function(e) {
        e.stopPropagation();
        $('.nav-mobile').removeClass('show');
    });
    
    // back to top
    $(".backtop").click(function() {
        $("html, body").animate({scrollTop: 0}, 1000);
    });    
});



// show navbar
var navbar = document.querySelector('.navbar');
window.addEventListener('scroll',function() {
    if (document.documentElement.scrollTop > 300 && window.innerWidth >= 760) {
        navbar.style.display = 'block';
    }
    else {
        navbar.style.display = 'none';
    }
});


// Select
let select_styled = document.querySelector('.select-styled');
let select_styled_p = document.querySelector('.text-p');
let select_option = document.querySelector('.select-option');

if(select_styled) {
    select_styled.addEventListener('click',function(e) {
        e.stopPropagation();
        select_option.classList.toggle('show');
    });
}

if(select_option) {
    select_option.querySelectorAll('li').forEach(e => {
        e.addEventListener('click', function (e) {
            e.preventDefault();
            let text = this.innerHTML;
            select_styled_p.innerHTML = text;
        });
    });
}

let body = document.body;
body.addEventListener('click',function() {
    if(select_option) {
        select_option.classList.remove('show');
    }
});

if(select_styled) {
    select_styled.addEventListener('click',function(e) {
        e.stopPropagation();
        this.classList.toggle('updown');
    });
}


// Slider
$('.slider__wrap').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround : true,
    prevNextButtons: false,
    autoPlay : 3500
});



$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
});