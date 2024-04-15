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
