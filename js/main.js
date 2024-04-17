// КОд для работы FAQ аккордиона
document.querySelectorAll(".accordion_tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".accordion_tab").forEach((item) => {
      item.parentNode.classList.remove("active");
      item.classList.remove("active");
    });
    tab.parentNode.classList.add("active");
    tab.classList.add("active");
  });
});

// Скролл для шапки сайта и вычисление высоты

$(function () {
  let header = $("#header");
  let hederHeight = header.height();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0 && $(window).width() > 768) {
      header.addClass("sticky");
      // $("body").css({
      //   paddingTop: hederHeight + "px", // делаем отступ у body, равный высоте шапки
      // });
    } else {
      header.removeClass("sticky");
      // $("body").css({
      //   paddingTop: 0, // удаляем отступ у body, равный высоте шапки
      // });
    }
  });
});

// Удалить ссылку якоря при обновлении страницы из URL

history.pushState("", document.title, window.location.pathname);

// Прокрутка по якорям с добавлением отступа

$(document).ready(function () {
  $(".nav-menu li a").click(function () {
    /*задали какой мы хотим отступ от верха страницы*/
    var otstupTop = 60;
    $("body,html").animate(
      {
        /*получили положение элемента вычли отступ и прокрутили*/
        scrollTop: $($(this).attr("href")).offset().top - otstupTop,
      },
      100
    );
  });
});

// маска паттерн для ввода номера
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll(".tel"), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) : a;
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      var reg = matrix
        .substr(0, this.value.length)
        .replace(/_+/g, function (a) {
          return "\\d{1," + a.length + "}";
        })
        .replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (
        !reg.test(this.value) ||
        this.value.length < 5 ||
        (keyCode > 47 && keyCode < 58)
      ) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});

// Кнопка вверх

const btnUp = {
  el: document.querySelector(".btn-scroll"),
  show() {
    // удалим у кнопки класс btn-scroll_hide
    this.el.classList.remove("btn-scroll_hide");
  },
  hide() {
    // добавим к кнопке класс btn-scroll_hide
    this.el.classList.add("btn-scroll_hide");
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener("scroll", () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-scroll
    document.querySelector(".btn-scroll").onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  },
};

btnUp.addEventListener();

// Менять цвет кнопки наверх в области футер
window.onscroll = function () {
  var button = document.querySelector(".btn-scroll_content");
  var footer = document.querySelector(".footer");

  var buttonPosition = button.getBoundingClientRect();
  var footerPosition = footer.getBoundingClientRect();

  if (buttonPosition.bottom >= footerPosition.top) {
    button.style.backgroundColor = "#2dca74";
  } else {
    button.style.backgroundColor = "#000";
  }
};

// Срипт открытие меню в моб версии
jQuery(document).ready(function ($) {
  // Клик по кнопке-гамбургеру открывает меню, повторный клик закрывает
  $(".pushmenu").click(function () {
    $(".pushmenu").toggleClass("open");
    $(".mobile-menu").toggleClass("show");
    $(".hidden-overley").toggleClass("show");
    $("body").toggleClass("sidebar-opened");
  });

  $(".text-close").click(function () {
    $(".hidden-overley").toggleClass("show");
    $(".mobile-menu").toggleClass("show");
    $(".pushmenu").toggleClass("open");
    $("body").toggleClass("sidebar-opened");
  });
  // Когда панель открыта, клик по облсти вне панели закрывает ее
  $(".hidden-overley").click(function () {
    $(this).toggleClass("show");
    $(".mobile-menu").toggleClass("show");
    $(".pushmenu").toggleClass("open");
    $("body").toggleClass("sidebar-opened");
  });
  // меняем активность пункта меню по клику (НЕОБЯЗАТЕЛЬНО)
  $(".mobile-menu ul li").click(function () {
    $(this)
      .addClass("current-menu-item")
      .siblings()
      .removeClass("current-menu-item");
    $(".mobile-menu").toggleClass("show");
    $(".pushmenu").toggleClass("open");
    $("body").toggleClass("sidebar-opened");
    $(".hidden-overley").toggleClass("show");
  });
});
