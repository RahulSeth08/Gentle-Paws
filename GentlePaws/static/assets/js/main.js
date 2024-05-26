$(document).ready(function () {
    $("#search-icon").click(function () {
      $(this).toggleClass("fa-times");
      $("#search-box").toggleClass("active");
    });
  
    $("#menu").click(function () {
      $(this).toggleClass("fa-times");
      $(".navbar").toggleClass("nav-toggle");
    });
  
    $(window).on("scroll load", function () {
      $("#search-icon").removeClass("fa-times");
      $("#search-box").removeClass("active");
  
      $("#menu").removeClass("fa-times");
      $(".navbar").removeClass("nav-toggle");
  
      if ($(window).scrollTop() > 0) {
        $("header").addClass("sticky");
      } else {
        $("header").removeClass("sticky");
      }
    });
  
    // smooth scrolling
  
    $('a[href*="#"]').on("click", function (e) {
      e.preventDefault();
  
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top,
        },
        500,
        "linear"
      );
    });
  });
  
//   document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("search-icon").addEventListener("click", function () {
//     this.classList.toggle("fa-times");
//     document.getElementById("search-box").classList.toggle("active");
//   });

//   document.getElementById("menu").addEventListener("click", function () {
//     this.classList.toggle("fa-times");
//     document.querySelector(".navbar").classList.toggle("nav-toggle");
//   });

//   window.addEventListener("scroll", function () {
//     document.getElementById("search-icon").classList.remove("fa-times");
//     document.getElementById("search-box").classList.remove("active");
//     document.getElementById("menu").classList.remove("fa-times");
//     document.querySelector(".navbar").classList.remove("nav-toggle");

//     if (window.scrollY > 0) {
//       document.querySelector("header").classList.add("sticky");
//     } else {
//       document.querySelector("header").classList.remove("sticky");
//     }
//   });

//   // smooth scrolling
//   document.querySelectorAll('a[href*="#"]').forEach(anchor => {
//     anchor.addEventListener("click", function (e) {
//       e.preventDefault();

//       document.querySelector(this.getAttribute("href")).scrollIntoView({
//         behavior: "smooth"
//       });
//     });
//   });
// });
