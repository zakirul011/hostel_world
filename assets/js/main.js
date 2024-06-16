//========== SEARCH TRIGGER ==========>
const searchTrigger = document.querySelectorAll(".search-mobile-trigger");
searchTrigger.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    document.getElementById("search-mobile").classList.toggle("show");
  });
});
//========== SEARCH TRIGGER // ==========>

//========== PRELOADER ==========>
window.addEventListener("load", () => {
  if (document.querySelector(".preloader")) {
    document.querySelector(".preloader").classList.add("hide");
  }
});
//========== PRELOADER// ==========>

//========== STICKY HEADER, BACK TO TOP ==========>
const headerArea = document.querySelectorAll(".header-wrapper");
headerArea.forEach((area) => {
  let height;
  let scrollUp = document.querySelector(".scroll-up");
  window.addEventListener("resize", () => {
    addHeaderHeight();
  });
  window.addEventListener("load", () => {
    addHeaderHeight();
  });
  function addHeaderHeight() {
    height = area.clientHeight;
    document.documentElement.style.setProperty("--header-h", height + "px");
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY > height) {
      area.classList.add("sticky");
      scrollUp.classList.add("sticky");
    } else {
      area.classList.remove("sticky");
      scrollUp.classList.remove("sticky");
    }
  });
  scrollUp.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
//========== STICKY HEADER, BACK TO TOP// ==========>

(function ($) {
  "use strict";
  //========== FEED SLIDER ==========>
  $(".feed-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  //========== FEED SLIDER// ==========>
})(jQuery);
