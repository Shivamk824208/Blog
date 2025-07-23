// script.js

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".read-more");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const paragraph = this.previousElementSibling;
      const isShort = paragraph.innerText === paragraph.dataset.short;

      if (isShort) {
        paragraph.innerText = paragraph.dataset.full;
        this.innerText = "Read Less";
      } else {
        paragraph.innerText = paragraph.dataset.short;
        this.innerText = "Read More";
      }
    });
  });
});