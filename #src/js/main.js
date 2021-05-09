// ********** SWIPER ****************
// в html добавляем встроенные классы swiper
// swiper-container, swiper-wrapper, swiper-slide swiper-pagination, swiper-button-prev(next), swiper-scrollbar
//var mySwiper = new Swiper('.swiper__container', {
//    // Optional parameters
//    direction: 'horizontal',
//    loop: true,
  //  slidesPerView: 3,
  //  spaceBetween: 30,
//    // autoHeight: 'true',
//  
//    // If we need pagination
//    pagination: {
//      el: '.swiper__pagination',
//    },
//  
//    // Navigation arrows
//    navigation: {
//      prevEl: '.swiper__prev',
//      nextEl: '.swiper__next',
//    },
//  
//    // And if we need scrollbar
//    // scrollbar: {
//    //   el: '.swiper-scrollbar',
//    // },
//  })
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
