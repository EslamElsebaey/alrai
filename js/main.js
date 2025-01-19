$(window).on("load", function () {
  $(".preloader").fadeOut();
});

$(document).ready(function () {
  // LazyLoad
  function lazyLoad() {
    const images = document.querySelectorAll(".lazy-img");

    const optionsLazyLoad = {};

    const imageObserver = new IntersectionObserver(function (enteries) {
      enteries.forEach(function (entery) {
        if (!entery.isIntersecting) {
          return;
        } else {
          preloadImage(entery.target);
          imageObserver.unobserve(entery.target);
        }
      });
    }, optionsLazyLoad);

    images.forEach(function (image) {
      imageObserver.observe(image);
    });
  }
  function preloadImage(img) {
    img.src = img.getAttribute("data-src");
    img.onload = function () {
      img.removeAttribute("data-src");
      img.parentElement.classList.remove("loading-img");
      img.parentElement.classList.add("loaded-img");
      // img.parentElement.parentElement.classList.add("lazy-head-img");
    };
  }
  lazyLoad();

  // ***********************************************************************************************

  // Fire Select2

  if ($(".myselect").length > 0) {
    // fire select2
    $(".myselect").select2();

    $(".form select").select2({
      minimumResultsForSearch: -1,
    });
  }

  // ***********************************************************************************************
  // SWIPERS

  // Main Swiper
  const mainSwiper = new Swiper(".mainBanner .swiper", {
    loop: true,
    autoplay: true,
    draggable: true,
    speed: 800,
    pagination: {
      el: ".mainBanner .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mainBanner .swiper-button-next",
      prevEl: ".mainBanner .swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });

  // Product Swiper
  const productSwiper = new Swiper(".products .swiper", {
    loop: true,
    draggable: true,
    autoplay: true,
    speed: 800,
    pagination: {
      el: ".products .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  // Recipes Swiper
  const recipeSwiper = new Swiper(".recipes .swiper", {
    loop: true,
    draggable: true,
    autoplay: true,
    speed: 800,
    // navigation: {
    //   nextEl: " .recipes .swiper-button-next",
    //   prevEl: ".recipes .swiper-button-prev",
    // },
    pagination: {
      el: ".recipes .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  // Brands Swiper
  const brandSwiper = new Swiper(".brands .swiper", {
    loop: true,
    draggable: true,
    autoplay: true,
    speed: 800,
    pagination: {
      el: ".brands .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      350: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 45,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 65,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  // Product Swiper
  const expYearsSwiper = new Swiper(".exp-years .swiper", {
    loop: true,
    draggable: true,
    // autoplay: true,
    speed: 800,
    pagination: {
      el: ".exp-years .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  // ***********************************************************************************************

  // Counter up
  const statisticsSection = document.querySelector(".statistics");
  if (statisticsSection) {
    const sectionOffsetTop = statisticsSection.offsetTop;
    const windowHeight = window.innerHeight;
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      if (scrollPosition > sectionOffsetTop - windowHeight) {
        const numberElements = document.querySelectorAll(".stat-item .number");
        const interval = 2000;
        numberElements.forEach((numberElement) => {
          if (numberElement.textContent == 0) {
            let startValue = 0;
            const endValue = parseInt(numberElement.dataset.num);
            const duration = Math.floor(interval / endValue);
            const counter = setInterval(() => {
              startValue++;
              numberElement.textContent = startValue;
              if (startValue === endValue) {
                clearInterval(counter);
              }
            }, duration);
          }
        });
      }
    });
  }

  // ***********************************************************************************************

  // show and hide search

  $(".open-search").click(function () {
    $(".search").addClass("show-search");
    $("body").addClass("overflowHidden");
  });
  $(".search").on("click", function () {
    $(this).removeClass("show-search");
    $("body").removeClass("overflowHidden");
  });
  $(".search-input-wrapper").on("click", function (e) {
    e.stopPropagation();
  });

  $(".close-searh-btn").click(function () {
    $(".search").removeClass("show-search");
    $("body").removeClass("overflowHidden");
  });

  // ***********************************************************************************************

  // Mobile Side Menu

  $(".bars").click(function () {
    $("nav").addClass("show-site-nav");
    $("body").addClass("overflowHidden");
  });

  $(".close-btn").click(function () {
    $("nav").removeClass("show-site-nav");
    $("body").removeClass("overflowHidden");
  });

  // ***********************************************************************************************

  // Mobile Dropdown Menu

  if ($(window).width() < 992) {
    $(".dropdown-li > a").removeAttr("href");
    $(".submenu-dropdown-li > a").removeAttr("href");
    $(".dropdown-li > a").on("click", function () {
      $(this).siblings(".slider-div").slideToggle(300);
      $(this).toggleClass("arrow-rotate");
    });
    $(".submenu-dropdown-li > a").on("click", function (e) {
      e.stopPropagation();
      $(this).siblings(".slider-div").slideToggle(300);
      $(this).toggleClass("sub-arrow-rotate");
    });
  }

  // ***********************************************************************************************

  // Fixed header

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 40) {
      $(".header").addClass("fixed-header");
    } else {
      $(".header").removeClass("fixed-header");
    }
  });

  // ***********************************************************************************************

  //  Footer Dropdown Menu

  if ($(window).width() < 768) {
    $(".footer-title").click(function () {
      $(this).next(".collapsible").slideToggle(300);
      $(this).toggleClass("arrow-rotate");
      $(".footer-title").not($(this)).next(".collapsible").slideUp(300);
      $(".footer-title").not($(this)).removeClass("arrow-rotate");
    });
  }
  // ***********************************************************************************************
}); // End Document Ready
