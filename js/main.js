var menuButton = $(".menu-button");
menuButton.on("click", function () {
  $(".navbar-navigation").toggleClass("navbar-navigation--visible");
});

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass("modal__overlay--visible");
  modalDialog.addClass("modal__dialog--visible");
}
function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
}
$(document).on("keyup", function (esc) {
  if (esc.keyCode == 27) {
    esc.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
});
$(document).mouseup(function (e) {
  var container = $(".modal__dialog");
  if (container.has(e.target).length === 0) {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
});
// Обработка форм
$(".form").each(function () {
  $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Введите имя",
        minlength: "Имя должно быть не короче 2 символов",
      },
      email: {
        required: "Введите электронную почту",
        email: "Почта должна иметь вид name@domain.com",
      },
      phone: {
        required: "Введите номер телефона",
        minlength: "Номер телефона в виде: +7 (999) 999-99-99",
      },
    },
  });
});

$(document).ready(function () {
  $('input[name="phone"]').mask("+7 (999) 999-99-99");
});

AOS.init();

AOS.init({
  disable: function () {
    var maxWidth = 992;
    return window.innerWidth < maxWidth;
    },
  });

$(document).ready(function () {
  var portfolioSlider = new Swiper(".portfolio-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    // keyboard: {
    //   enabled: true,
    // },

    navigation: {
      nextEl: ".portfolio-slider__button--next",
      prevEl: ".portfolio-slider__button--prev",
    },
  });
  // var reviewsSlider = new Swiper(".reviews-slider", {
  //   loop: true,

  //   navigation: {
  //     nextEl: ".reviews-slider__button--next",
  //     prevEl: ".reviews-slider__button--prev",
  //   },
});