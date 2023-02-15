// 이벤트 섹션의 버튼 이벤트입니다.

$(function () {
  let Arr = [
    "./images/event.jpg",
    "./images/event2.jpg",
    "./images/event3.jpg",
  ];

  let Title_1 = ["THE THRONE Of GOLF", "SPECIAL LESSON", "HORSEBACK RIDING"];
  let Title_2 = [
    `장기숙박으로 쌓인 피로도 풀고 무료 필라테스 강의도 받아보세요.`,
    `친구들과 인룸 다이닝을 즐기며 밤새 즐거운 추억을 만들어보세요.`,
    `가족, 친구와 거제도의 자연 속에서 10분 동안 승마를 즐겨보세요.`,
  ];
  let Title_3 = [
    "예약 : 2022.08.01 ~ 22.10.31",
    "예약 : 2022.08.01 ~ 22.12.31",
    "예약 : 2022.08.01 ~ 22.10.31",
  ];
  let Title_4 = [
    "투숙 : 2022.08.17 ~ 22.10.31",
    "투숙 : 2022.08.10 ~ 22.12.31",
    "투숙 : 2022.08.10 ~ 22.10.31",
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
