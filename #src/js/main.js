// ********** SWIPER ****************
// в html добавляем встроенные классы swiper
// swiper-container, swiper-wrapper, swiper-slide swiper-pagination, swiper-button-prev(next), swiper-scrollbar
let slider03 = new Swiper('.block03-slider', {
   direction: 'horizontal',
   loop: true,
   slidesPerView: 6,
   spaceBetween: 20,
   pagination: {
     el: '.block03-slider-dots',
   },
   breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 20
    }
    },
 
 })
// ********** END SWIPER ****************
let slider09 = new Swiper('.block-09-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
  // centeredSlidesBounds: true,
  // autoHeight: 'true',

  // If we need pagination
  pagination: {
    el: '.block-09-slider-dots',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    530: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      centeredSlides: false,
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 2.1,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    },
})
// ********** END SWIPER ****************

//const qs = selector => document.querySelector(selector),
//      qsAll = selector => document.querySelectorAll(selector);

//const icon = qs('.icon-menu');
//const menu = qs('.header__main-nav-list');
//
//icon.addEventListener('click', () => {
//    icon.classList.toggle('active')
//    menu.classList.toggle('show')
//    qs('body').classList.toggle('fixed')  //стабилизация моб.меню
//})

//события для гамбургера ******************
// const icon = document.querySelector('.header__icon');
// const headerMenu = document.querySelector('.header__menu-list');

// const toggleMenu = function() {
//    icon.classList.toggle('active');
//    headerMenu.classList.toggle('show');
// }

// icon.addEventListener('click', e => {
//    e.stopPropagation();
//    toggleMenu();
// })

// //закрываем меню если кликнули не по нему
// document.addEventListener('click', e => {
//    const target = e.target;
//    const its_menu = target == headerMenu || headerMenu.contains(target);
//    const its_icon = target == icon;
//    const menu_is_active = headerMenu.classList.contains('show');

//    if (!its_menu && !its_icon && menu_is_active) toggleMenu();
// })
//end ******************

