function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}



var swiper = new Swiper(".mySwiper", {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    autoplay: true,
    pauseOnHover: false,
    loop: true,
    cssEase: 'linear',
    autoplay: {
        delay: 2000,

    },
    breakpoints: {
        360: {
            slidesPerView: 1.7,
            spaceBetween: 20,
        },
        460: {
            slidesPerView: 2.3,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        1324: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        1624: {
            slidesPerView: 6,
            spaceBetween: 50,
        },
        1920: {
            slidesPerView: 6,
            spaceBetween: 50,
        },
    },
});


var swiper = new Swiper(".myslider", {
    pagination: {
        el: ".swiper-pagination",
    },
});