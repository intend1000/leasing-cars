const swiper = new Swiper('.swiper', {
    effect: 'fade',
    fadeEffect:{
      crossFade:true
    },
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });