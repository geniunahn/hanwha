// 헤더의 스크롤 이벤트입니다.

$(function () {
  $(window).scroll(function () {
    let scrollT2 = $(window).scrollTop();

    if (scrollT2 > 1) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });
});

// 사이트맵 버튼 입니다.

$(function () {
  $(".site_map_btn").on("click", function () {
    $(".site_map").toggleClass("site_map_open");
  });

  $(".site_map_close_btn img").on("click", function () {
    $(".site_map").removeClass("site_map_open");
  });
});
