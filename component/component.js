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
