# 한화호텔&리조트 홈페이지 리디자인 프로젝트
- 제작자 : 안정원
- 오리지널 홈페이지 : https://www.hanwharesort.co.kr/irsweb/resort3/index_.do
- 리뉴얼 홈페이지 : https://geniunahn.github.io/hanwha/
- 경쟁사 홈페이지 : http://www.resom.co.kr/resom/main/main.asp

# 제작 동기와 목표
- 한화호텔&리조트는 자사의 모든 호텔과 리조트의 정보를 하나의 홈페이지에서 제공하고 있다. 방대한 양의 정보를 하나의 홈페이지, 게다가 좁은 너비의 화면 안에 밀집시키기 때문에 사용자는 자신이 원하는 정보를 파악하기 어려우며 심미적인 측면에서도 기업과 상품의 이미지를 긍정적으로 홍보하는 장점을 찾아볼 수 없다. 
- 경쟁사의 홈페이지를 관찰하면 자신들이 가지고 있는 리조트를 일관된 양식으로 통일하여 홈페이지를 만들어 운영하고 있다. 충분한 크기의 너비를 가진 화면 안에 적절한 크기의 이미지와 폰트사이즈를 선택하여 가독성을 높였으며 정보를 직관적으로 빠르게 파악할 수 있는 사이트맵을 갖추고 있다. 또한 매력적인 사진 자료를 타이틀 배너와 상품 이미지로 사용하고 자사의 홍보를 담당하는 회사소개 페이지를 만들어 기업 이미지를 긍정적인 방향으로 홍보하고 있다. 
- 정보를 효율적으로 제공한다는 기능적인 측면과 기업 이미지를 긍정적인 방향으로 홍보한다는 심미적인 측면에서 한화호텔&리조트의 홈페이지는 경쟁사의 홈페이지에 비교해 완성도가 낮다고 판단된다. 이 문제를 해결하기 위해서는 한화호텔&리조트 역시 하나의 통일된 양식 아래에서 서로 다른 장점과 시설물을 가지고 있는 호텔과 리조트의 정보를 고객에게 효과적으로 전달할 수 있도록 리모델링 해야 한다. 만약 호텔과 리조트마다 서로다른 양식의 홈페이지를 만들면 비용과 시간을 많이 투자해야 한다는 단점을 감수해야 하고 유지보수에서 큰 비용이 따를 것이 예상되므로 하나의 양식으로 통일하는 것이 합리적인 판단이다. 하나의 양식 아래에서 다양한 개성을 가지는 호텔과 리조트가 모두 만족할 수 있는 홈페이지를 만들기 위해서는 그에 맞는 범용성이 높은 사이트맵, GNB, LNB를 설계해야 한다. 또한 좁은 너비의 화면 안에서 정보를 나열할 뿐인 기존의 홈페이지의 문제를 해결하기 위해 더 넓은 너비의 화면을 선택하여 가독성을 키우고 심미적인 측면에서 고객에게 호감과 만족감을 줄 수 있는 디자인을 구현해야한다.
- 한화호텔&리조트는 자사를 소개하는 회사소개 페이지가 없다. 기업의 이미지를 홍보하는 부분에서 단점으로 지적된다. 기업의 역사, 정체성, 비전, 이미지 홍보를 위해서 리뉴얼되는 홈페이지에게 기업을 소개하는 페이지를 추가해야 한다.

# 대표사진
![home_main_bn](https://user-images.githubusercontent.com/106502672/206598056-90f79a2e-48af-4adc-8da4-457f14d7bcae.png)
![home_main_bn_mobile](https://user-images.githubusercontent.com/106502672/206598070-ad1e4a6c-0805-4c0a-ab47-5eea5fb3f654.png)


# 개발자 노트
# 2022년 12월 7일
- 시안을 바탕으로 메인페이지 구현을 시작함
- header의 nav에게 드롭다운 이벤트를 구현함
- 사용자가 스크롤을 내리면 헤더의 배경색, 폰트 색, 아이콘, 로고 색이 변하는 이벤트를 구현함
- 사용자가 스크롤을 내리면 헤더의 크기가 줄어드는 이벤트를 구현함
- 헤더에 hover 했을 때  헤더의 배경색, 폰트 색, 아이콘, 로고 색이 변하는 이벤트를 구현함
- 헤더에 사이트맵 아이콘을 추가하고 사이트맵 이벤트를 구현함
- 메인 베너가 fade 효과와 함께 변하는 이벤트를 구현함. 배너는 3가지이며 각각 서로 다른 타이틀 문구를 가지고 있음.
- about 서브 페이지 완성
# 2022년 12월 8일
- rooms 서브 페이지 완성
- spa 서브 페이지 완성
- dining 서브 페이지 완성
- facilities 서브 페이지 
- 서브 메뉴 (빵 부스러기) 완성
- seo 최적화 및 오픈그래프 태그 사용
- favicon 제작 후 적용함
- 모든 버튼에 하이라이트 이벤트 완성
- 모든 메뉴가 메인 페이지, 서브 페이지로 이동하도록 완성
- 메인 페이지 모바일 완성
- rooms, spa, dining, facilities 모바일 완성
- about 모바일 완성
- 맞춤법, 어색한 문장 수정
- 오시는 길 대중교통 이용 설명 이벤트 완성
# 2022년 12월 9일
- 사이트맵 폰트 크기를 가독성이 좋게 수정함
- 사이트맵에 hover 이벤트 완성
- 컨텐츠에 AOS API 를 이용하여 애니메이션 이벤트를 적용함
- 모든 서브 페이지의 메인 배너 이미지에게 작아지는 이벤트를 적용함
- 모든 상품 이미지에게 호버 이벤트를 적용함
- footer 의 패밀리사이트 완성
- footer의 요소들에게 url 링크를 연결함
- event section에 좌우 화살표 버튼 추가함
# TO DO LIST
- event section에게 슬라이드 이벤트 만들기
- 영어 언어지원 이벤트 만들기
- 예약 페이지를 제작 예정. 예약 페이지로 들어가기 전에 로그인 페이지에서 회원 인증을 하도록 구현할 예정.
- 로그인 페이지 제작 예정. 간단한 로그인이 가능하도록 할 예정.
- 상품 설명 페이지 제작 예정. sub_menu, button, 상품 이미지를 클릭하면 상품 설명 페이지로 이동하도록 구현할 예정
- 화면 구현과 이벤트 구현이 완성 단계에 접어들면 기존의 소스 파일 구조를 보다 효율적으로 재편집할 예정. html, css, js, images 을 각각 카테고리별로 폴더에 모아서 관리하는 것을 목표로 하고 있음 (현재 소스가 비효율적이라는 것을 필자도 인지하고 있음. 소스 최적화를 작업 중간에 하는 것은 오히려 일을 힘들게 할 위험이 크다고 판단함.)
