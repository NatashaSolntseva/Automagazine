//__________________________________глобальные переменные
const burgerMenuBtn = document.querySelector(".header__burger");
const headerSection = document.querySelector('.header');
const logoHeaderSection = headerSection.querySelector(".logo");
const navHeaderSection = headerSection.querySelector(".header__nav-list");
const subscribeBtn = document.querySelector('.form__subscribe-button');
const form = document.querySelector('.form__area');

//----------------слушатель: нажатие на бургерное меню, превращает в крестик
function setEventListnerBurgerMenuActive () {  
 // console.log('burgerMenuBtn', burgerMenuBtn);
  burgerMenuBtn.addEventListener("click", () => {
  //  console.log('щелк щелк');
  burgerMenuBtn.classList.toggle("header__burger_active");
  logoHeaderSection.classList.toggle("logo_visibility_none");
  navHeaderSection.classList.toggle("header__nav_visibility_none");
  })
}
setEventListnerBurgerMenuActive();

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
 // console.log("форма не отправилась"); 
  subscribeBtn.textContent = 'Готово!';
  form.reset(); //сброс формы
});

//инициализаци Swiper для секции Галерея
const swiperGallery = new Swiper('.gallery__block', {
 /*// не работает???
  slidesPerView: 1,
  
  slidesPerGroup: 1,
  // Кол-во пролистываемых слайдов*/
  cssMode: true,
  // бесконечный цикл
  loop: true, 

  speed: 1000,

  navigation: {
    nextEl: '.gallery__nav-arrow_type_right',
    prevEl: '.gallery__nav-arrow_type_left',
  },

});


/*
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
*/


/*
const swiperReviews = new Swiper('.reviews__container', {
  // Инициализируем Swiper для блока Reviews
  wrapperClass: 'reviews__wrapper',
  slideClass: 'reviews__slide',
  slideActiveClass: 'reviews__slide_type_active',

  spaceBetween: 50,
  // Отступ между слайдами

  slidesPerView: 1,
  // Кол-во отображаемых слайдов

  slidesPerGroup: 1,
  // Кол-во пролистываемых слайдов

  // Листать стрелками бесконечно
  loop: true,

  // autoplay: {
  // Автопрокрутка
  //   // Пауза между прокруткой
  //   delay: 3000,
  //   disableOnIteraction: true
  // },

  speed: 1000,
  // Скорость переключения

  centeredSlides: true,
  // Активный слайд по центру

  initialSlide: 0,
  // Индекс активного слайда

  navigation: {
    // Стрелки
    nextEl: '.reviews__next-button',
    prevEl: '.reviews__prev-button'
  },

  pagination: {
    // Навигация
    // Буллеты, текущее положение
    el: '.reviews__pagination',
    bulletClass: 'reviews__bullet',
    bulletActiveClass: 'reviews__bullet_type_active',
    // Буллеты
    clickable: true,
    dynamicBullets: false,
  },

  slideToClickedSlide: true,
  // Переход по слайдам путем клика на следующий


  simulateTouch: true,
  // Включение / отключение перетаскивания на десктопе
  // (также включается возможность переключиться на другой слайд по клику на него)

  touchRatio: 1,
  // Чувствительность свайпа

  touchAngle: 45,
  // Угол срабатывания свайпа

  breakpoints: {
    // Брейкпойнты для адаптива
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    1440: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    }
  },
});
*/
