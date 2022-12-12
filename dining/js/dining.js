// 이벤트 섹션의 버튼 이벤트입니다.

$(function () {
  let Arr = [
    "./images/event.jpg",
    "./images/event2.jpg",
    "./images/event3.jpg",
  ];

  let Title_1 = ["FAMILY DISCOUNT", "SUITE COLLECTION", "BEST LIVE GRILL"];
  let Title_2 = [
    `4인 이상 예약시 최대 20% 할인되는 뷔페 이벤트를 만나보세요.`,
    `친구들과 인룸 다이닝을 즐기며 밤새 즐거운 추억을 만들어보세요.`,
    `제철 재료들과 진향 육향의 갈비, 스테이크로 구성된 다이닝 프로모션입니다. `,
  ];
  let Title_3 = [
    "예약 : 2022.08.12 ~ 22.10.10",
    "예약 : 2022.08.01 ~ 22.12.31",
    "예약 : 2022.08.25 ~ 22.12.25",
  ];
  let Title_4 = [
    "투숙 : 2022.08.17 ~ 22.10.31",
    "투숙 : 2022.08.10 ~ 22.12.31",
    "투숙 : 2022.09.19 ~ 22.12.25",
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
