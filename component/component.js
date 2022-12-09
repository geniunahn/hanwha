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
    $(".site_map").addClass("site_map_close");
  });
});

// nav 호버 이벤트입니다. pc에서만 적용 됩니다.

// $(function () {
//   $(".nav > ul > li > a").on("mouseover", function () {
//     $(".nav > ul > li > a").addClass("active");
//     $(this).find("a").removeClass("active");
//   });

//   $(".depth_1 li").on("mouseout", function () {
//     $(".depth_1 li a").removeClass("active");
//   });
// });

// 사이트맵 호버 이벤트입니다. 모바일에서만 적용 됩니다.

$(function () {
  $(".site_map_dep1_li").on("mouseover", function () {
    $(".site_map_dep1_li a").addClass("active");
    $(this).find("a").removeClass("active");
  });

  $(".site_map_dep1_li").on("mouseout", function () {
    $(".site_map_dep1_li a").removeClass("active");
  });
});

// 서브 메뉴 버튼 입니다.

$(function () {
  $(".sub_menu_option").on("click", function () {
    $(this).find("ul").toggleClass("active");
  });
});
