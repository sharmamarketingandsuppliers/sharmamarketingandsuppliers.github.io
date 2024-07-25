$(document).ready(function () {
    $(".bar").on("click", function () {
      $("#cross").show();
      $(".bar").hide();
      $(".menu").slideDown();
    });
  
    $("#cross").on("click", function () {
      $(".menu").slideUp();
      $(".bar").show();
      $("#cross").hide();
    });
  });
  
  function itemSearchFunction() {
    var input, filter, div, column, p;
    input = document.getElementById("itemSearch");
    filter = input.value.toUpperCase();
    div = document.getElementById("box");
    column = div.getElementsByClassName("column");
    for (i = 0; i < column.length; i++) {
      p = column[i].getElementsByTagName("p")[0];
      if (p.innerHTML.toUpperCase().indexOf(filter) > -1) {
        column[i].style.display = "";
      } else {
        column[i].style.display = "none";
      }
    }
  }
  
  // script.js
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const items = document.querySelectorAll('.slider-item');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;

  function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
      } else {
          currentIndex = items.length - 1;
      }
      updateSlider();
  });

  nextBtn.addEventListener('click', () => {
      if (currentIndex < items.length - 1) {
          currentIndex++;
      } else {
          currentIndex = 0;
      }
      updateSlider();
  });
});
