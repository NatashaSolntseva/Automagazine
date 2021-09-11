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

  // Кол-во пролистываемых слайдов - из демо примеров в документации
  cssMode: true,
  // бесконечный цикл
  loop: true, 

  speed: 1000,

  navigation: {
    nextEl: '.gallery__nav-arrow_type_right',
    prevEl: '.gallery__nav-arrow_type_left',
  },

});

const swiperPress = new Swiper(".press__swiper", {

  cssMode: true,
  speed: 1000,

  pagination: {
    el: ".press__nav-wrapper",
    bulletClass: "press__bullet",
    bulletActiveClass: 'press__bullet_active',
    clickable: true,
  },
});