var swiper=new Swiper(".swiper",{
    effect: "coverflow",
    initialSlide: 1,
    slidesPerView: "auto",
    centeredSlides:true,
    allowTouchMove: false,
    preventClicks: false,
    preventClicksPropagation: false,
    coverflowEffect:{
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 2,
        slideShadows:false,
        scale: 1.1,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});