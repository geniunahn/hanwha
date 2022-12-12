// 이벤트 섹션의 버튼 이벤트입니다.

$(function () {
  let Arr = [
    "./images/event.jpg",
    "./images/event2.jpg",
    "./images/event3.jpg",
  ];

  let Title_1 = [
    "THE ROMANTIC SUMMER",
    "LONG STAY PACKAGE ",
    "PREMIUM WITH WINE",
  ];
  let Title_2 = [
    `객실 + 데일리 생화 꽃다발 + 호텔 시그니처 와인 + 리조트 상품권 5만원.`,
    `내 집 같은 객실에서 착한 가격으로 장기 숙박과 다양한 혜택을 누리세요.`,
    `프리미엄 1박 + 식음 바우처 2만원 + 시즌와인&칠링백.`,
  ];
  let Title_3 = [
    "예약 : 2022.08.10 ~ 22.09.10",
    "예약 : 2022.08.28 ~ 22.11.31",
    "예약 : 2022.08.27 ~ 23.01.31",
  ];
  let Title_4 = [
    "투숙 : 2022.08.15 ~ 22.09.31",
    "투숙 : 2022.09.01 ~ 22.11.31",
    "투숙 : 2022.08.27 ~ 23.01.31",
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
