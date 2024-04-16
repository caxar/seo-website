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
      $("body").css({
        paddingTop: hederHeight + "px", // делаем отступ у body, равный высоте шапки
      });
    } else {
      header.removeClass("sticky");
      $("body").css({
        paddingTop: 0, // удаляем отступ у body, равный высоте шапки
      });
    }
  });
});

// Parallax
