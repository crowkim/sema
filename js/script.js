$(function () {
  $("a").click(function (e) {
    e.preventDefault();
  });

  // 슬라이드 슬라이더
  var swiper = new Swiper(".swiper-container", {
    autoplay: {
      delay: 6000,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  //   현재전시 슬라이더
  var swiper = new Swiper(".swiper-container2", {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      480: { slidesPerView: 1.5, spaceBetween: 8 },
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1080: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });

  //   내비게이션
  $(".nav>ul.nav_text>li").hover(function () {
    $(this).find(".submenu").stop().slideToggle(300);
  });

  // 찾아오는길
  $(".map .map_right ul li").click(function (e) {
    e.preventDefault();
    $(".map .map_right ul li a").removeClass("active");
    $(this).find(">a").toggleClass("active");
    var wWidth = $(window).width();
    if (wWidth > 768) {
      $(".map .map_right ul li ul").stop().slideUp(150);
      $(this).find("ul").stop().slideDown(150);
    } else {
      $(".map .map_right ul li ul").stop().fadeOut();
      $(this).find("ul").stop().fadeIn();
    }
  });

  var lastScrollTop = 0;
  var moveScroll;

  $(window).scroll(function (event) {
    //스크롤을 감지
    moveScroll = true;
  });
  setInterval(function () {
    //스크롤 감지를 0.25초마다 실행
    if (moveScroll) {
      hasScroll();
      moveScroll = false;
    }
  }, 250);

  function hasScroll() {
    var wScroll = $(this).scrollTop();
    if (wScroll < lastScrollTop) {
      $(".nav_btn").addClass("on");
    } else {
      if (wScroll > lastScrollTop) {
        $(".nav_btn").removeClass("on");
      }
    }
    lastScrollTop = wScroll;
  }
});
