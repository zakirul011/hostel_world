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

  //========== MAGNIFIC POPUP ==========>
  $(".video-btn").magnificPopup({
    type: "iframe",
  });
  $(".pop-img-btn").magnificPopup({
    type: "image",
  });
  $(".gallery-item a").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  //========== MAGNIFIC POPUP// ==========>

  //========== ONE PAGE NAV ==========>
  var top_offset = $(".header-area").height() - 170;
  $(".mainmenu ul, .sidebar ul").onePageNav({
    scrollOffset: top_offset,
  });
  //========== ONE PAGE NAV// ==========>

  //========== SKROLLR JS ==========>
  var skrollrSetting = {
    forceHeight: false,
    smoothScrollingDuration: 500,
  };
  var s = skrollr.init(skrollrSetting);
  function doubleAction() {
    if (window.matchMedia("(max-width: 991px)").matches) {
      s.destroy();
    } else {
      s = skrollr.init(skrollrSetting);
    }
  }
  window.addEventListener("load", () => {
    doubleAction();
  });
  window.addEventListener("resize", () => {
    doubleAction();
  });
  //========== SKROLLR JS// ==========>

  //========== HERO AREA SLIDER ==========>
  function heroSlider() {
    var BasicSlider = $(".hero-slider");
    BasicSlider.on("init", function (e, slick) {
      var $firstAnimatingElements = $(".hero-slide:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on(
      "beforeChange",
      function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          '.hero-slide[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]");
        doAnimations($animatingElements);
      }
    );
    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: false,
      fade: true,
      arrows: true,
      appendArrows: ".hero-slider-wrap .slider-nav",
      prevArrow:
        '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
    });
    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay,
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  heroSlider();
  //========== HERO AREA SLIDER// ==========>

  //========== PRODUCT SLIDER ==========>
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
  //========== PRODUCT SLIDER// ==========>
})(jQuery);
