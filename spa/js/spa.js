// 이벤트 섹션의 버튼 이벤트입니다.

$(function () {
  let Arr = [
    "./images/event.jpg",
    "./images/event2.jpg",
    "./images/event3.jpg",
  ];

  let Title_1 = [
    "SUMMER RELAXING SPA",
    "COUPLE POOL DISCOUNT",
    "FAMILY POOL DISCOUNT",
  ];
  let Title_2 = [
    `객실 + 아로마 마사지 + 사우나 + 호텔 시그니처 아로마 오일`,
    `연인과 함께 예약시 객실 + 실외 수영장 최대 30% 할인되는 이벤트입니다.`,
    `4인 이상 예약시 최대 25% 할인되는 패밀리 수영장을 즐겨보세요.`,
  ];
  let Title_3 = [
    "예약 : 2022.08.12 ~ 22.10.10",
    "예약 : 2022.08.01 ~ 22.12.31",
    "예약 : 2022.08.01 ~ 22.12.31",
  ];
  let Title_4 = [
    "투숙 : 2022.08.17 ~ 22.10.31",
    "투숙 : 2022.08.10 ~ 22.12.31",
    "투숙 : 2022.08.10 ~ 22.12.31",
  ];

  let num = 0;

  $(".event_product_info_btn_arrow_right").on("click", function () {
    $(function () {
      num++;
      if (num >= Arr.length) {
        num = 0;
      }
      $(".evnet_img").attr("src", `${Arr[num]}`);

      $(".event_product_info_text h1").html(Title_1[num]);
      $(".event_product_info_text h2").html(Title_2[num]);
      $(".event_product_info_text h3").html(Title_3[num]);
      $(".event_product_info_text h4").html(Title_4[num]);
    });
  });

  $(".event_product_info_btn_arrow_left").on("click", function () {
    $(function () {
      num--;
      if (num <= -1) {
        num = Arr.length - 1;
      }
      $(".evnet_img").attr("src", `${Arr[num]}`);

      $(".event_product_info_text h1").html(Title_1[num]);
      $(".event_product_info_text h2").html(Title_2[num]);
      $(".event_product_info_text h3").html(Title_3[num]);
      $(".event_product_info_text h4").html(Title_4[num]);
    });
  });
});
