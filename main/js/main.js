// 메인 배너 이벤트 입니다.

$(function () {
  let bgArr = [
    "main/images/main_bn_1.jpg",
    "main/images/main_bn_2.jpg",
    "main/images/main_bn_3.jpg",
  ];

  let bnTitle_1 = ["ONLY", "HEALING", "PERFECTLY"];
  let bnTitle_2 = ["ENJOY IT", "YOUR LIFE", "PEACEFUL TIME"];
  let bnTitle_3 = [
    "가족과 함께 감동으로 가득한 추억을 만드세요",
    "지친 당신에게 재충전의 시간을 선물하세요",
    "우리는 당신의 행복을 위해 최선을 다하겠습니다",
  ];

  let bg_img_num = 0;

  setInterval(function () {
    bg_img_num++;
    if (bg_img_num >= bgArr.length) {
      bg_img_num = 0;
    }

    $(".main_box").css({
      "background-image": `url(${bgArr[bg_img_num]})`,
    });

    $(".main_box").css({
      transition: "1s",
      opacity: "1",
    });

    $(".main_bn_title h3").html(bnTitle_1[bg_img_num]);
    $(".main_bn_title h1").html(bnTitle_2[bg_img_num]);
    $(".main_bn_title p").html(bnTitle_3[bg_img_num]);
  }, 6000);
});

// 대중교통 이동시 이벤트 입니다

$(function () {
  $(".contact_traffic_right li").on("click", function () {
    $(this).find("div").toggleClass("active");
    $(this).find("svg").toggleClass("active");
  });
});
