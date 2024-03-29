# 한화호텔&리조트 홈페이지 리디자인 프로젝트
- 제작자 : 안정원
- 깃허브 url : https://github.com/geniunahn/hanwha
- 프로젝트 url : https://geniunahn.github.io/hanwha/
- 오리지널 홈페이지 : https://www.hanwharesort.co.kr/irsweb/resort3/index_.do
- 경쟁사 홈페이지 : http://www.resom.co.kr/resom/main/main.asp

# 제작 상황 및 목표
- 제작 상황 : 선생님이 선정한 사이트를 jQuery를 활용하여 리디자인하는 팀 프로젝트를 마친 상황. 팀 프로젝트에서 얻는 경험을 살려서 이번에는 혼자서 리디자인을 할 사이트를 선택한 후 디자인부터 코딩까지 프로젝트를 완성한다. 
- 제작 목표 : 필자는 한화호텔&리조트의 사이트를 분석하고 경쟁사 사이트의 강점을 벤치마킹하여 한화호텔&리조트를 리디자하기로 결정했다. 동기와 근거는 아래와 같다.
1. 한화호텔&리조트는 자사의 모든 호텔과 리조트의 정보를 하나의 사이트에 모아서 제공하고 있다. 많은 양의 정보를 좁은 너비의 화면 안에 밀집시켜서 전달하기 때문에 정보의 전달력과 디자인의 매력이 부족한 상황이다. 
2. 경쟁사를 관찰하면 자신들이 가지고 있는 리조트를 일관된 양식으로 만든 사이트를 다수 만들어 운영하고 있다. 넉넉한 크기의 너비 안에 이미지와 폰트를 충분한 크기와 간격을 두고 배치하여 가독성을 높였다. 또한 주제에 맞는 매력적인 이미지를 타이틀 배너와 상품 이미지로 사용하여 정보의 전달력과 시각적인 매력을 놓치지 않고 있다.
3. 정보를 효율적으로 제공한다는 기능적인 측면과 사용자의 관심과 호감을 얻는다는 심미적인 측면에서 한화호텔&리조트의 사이트는 경쟁사의 사이트와 비교해 완성도가 낮다고 판단된다. 이 문제를 해결하기 위해서는 한화호텔&리조트 역시 통일된 양식 아래에서 서로 다른 장점과 시설물을 가지고 있는 호텔과 리조트의 정보를 고객에게 효과적으로 전달하는 전략을 취해야 한다. 만약 각각의 호텔과 리조트에게 서로 다른 양식의 사이트를 만들어주면 비용과 시간을 많이 투자될 것이다. 또한 유지보수의 측면에서도 큰 비용이 따를 것이 예상되므로 하나의 양식으로 통일하는 것이 합리적인 판단이다. 통일된 양식을 유지하며 다양한 개성을 가지는 호텔과 리조트가 모두 만족할 수 있는 사이트를 만들기 위해서는 그에 맞는 범용성이 높은 사이트맵, GNB, LNB를 설계해야 한다. 또한 좁은 너비의 화면 안에서 정보를 나열할 뿐인 기존의 홈페이지의 문제를 해결하기 위해 더 넓은 너비의 그리드 시스템을 선택하여 가독성과 매력을 모두 충족하는 디자인을 구현해야한다.
4. 한화호텔&리조트 회사소개 페이지가 없다. 기업의 이미지를 홍보하는 부분에서 단점으로 지적된다. 기업의 역사, 정체성, 비전, 홍보를 위해서 리디자인 사이트에게 기업을 소개하는 페이지를 추가하도록 한다.
<br/><br/><br/>
# 한화호텔&리조트 사이트의 문제점
![1](https://user-images.githubusercontent.com/106502672/210072163-2fde3a6a-2cd6-457b-a26f-7c2504b2d428.jpg)
![2](https://user-images.githubusercontent.com/106502672/210042185-e0d778dd-1bc7-476e-bdb1-18495baecae9.jpg)
![3](https://user-images.githubusercontent.com/106502672/210042203-5ccaefc6-b4cf-430f-974f-8935f3791d53.jpg)
![4](https://user-images.githubusercontent.com/106502672/210042224-ec5b9e2a-94df-4c53-b646-aeb8587b5795.jpg)
![5](https://user-images.githubusercontent.com/106502672/210042228-21b0ef01-371e-462a-b572-433c62c6881d.jpg)
![6](https://user-images.githubusercontent.com/106502672/210042233-dba657c9-1270-4adf-84ed-03fed093fe2a.jpg)
<br/><br/><br/>
# 경쟁사 사이트의 장점 분석
![7](https://user-images.githubusercontent.com/106502672/210042281-0b8b57c7-9637-4ae4-b00d-6d5bc88c2b65.jpg)
![8](https://user-images.githubusercontent.com/106502672/210042289-340b4552-29c3-47a3-a929-3843f5ca0d7e.jpg)
![9](https://user-images.githubusercontent.com/106502672/210042293-a7d46aa3-f658-4af3-8e45-7aeb23ba3c03.jpg)
![10](https://user-images.githubusercontent.com/106502672/210042297-8d33c495-bd32-4c1d-8459-af9b1f9a689b.jpg)
<br/><br/><br/>
# 프로젝트 디자인 및 적용기술 설명
![11](https://user-images.githubusercontent.com/106502672/210073405-11ed1286-f75c-4e88-9a13-e7c8f4434085.jpg)
![12](https://user-images.githubusercontent.com/106502672/210051902-342d7a76-96be-4276-9303-37cb87d9171a.jpg)
![13](https://user-images.githubusercontent.com/106502672/210051904-cdd1c874-2c21-44c7-83d1-854fa8c682ca.jpg)
![13-2](https://user-images.githubusercontent.com/106502672/210051906-37f11e46-7131-4913-80a7-792ae1a29fb6.jpg)
![13-3](https://user-images.githubusercontent.com/106502672/210051907-260b0aea-570f-4cea-b7a9-746dd80b8d14.jpg)
![14](https://user-images.githubusercontent.com/106502672/210051910-89567c86-e486-4443-a828-407c538f979f.jpg)
![15](https://user-images.githubusercontent.com/106502672/210051911-0b74a10d-4abf-4542-9652-533f61e1763e.jpg)
![16](https://user-images.githubusercontent.com/106502672/210051912-d32bd565-dd48-43b1-9232-63087b5866a0.jpg)
![17](https://user-images.githubusercontent.com/106502672/210051913-542ff707-f537-458a-be25-7c9be4b6f841.jpg)
![18](https://user-images.githubusercontent.com/106502672/210051915-ea704e73-4c71-444c-8460-1ed7b1b2c08b.jpg)
![19](https://user-images.githubusercontent.com/106502672/210051916-3acbe932-acc0-487d-8e95-50567ad94696.jpg)
![20](https://user-images.githubusercontent.com/106502672/210074158-d60e6333-bdf7-48da-a878-e58cb16f093f.jpg)
![21](https://user-images.githubusercontent.com/106502672/210051918-4a851450-5650-4ab4-90e8-88822ccfe7d5.jpg)
![22](https://user-images.githubusercontent.com/106502672/210051919-92837d88-d7d2-4254-9611-77109a938674.jpg)
![23](https://user-images.githubusercontent.com/106502672/210051920-d400f0ca-e5bf-4ca0-b4f2-034864abcc36.jpg)
![24](https://user-images.githubusercontent.com/106502672/210074630-19106d63-b832-4f25-8f04-afbce5b21b77.jpg)
![25](https://user-images.githubusercontent.com/106502672/210051922-c61befe1-524e-478b-a594-c2e9a767e562.jpg)
![26](https://user-images.githubusercontent.com/106502672/210051927-9f80f573-78bd-4dca-a42e-88eac43567f8.jpg)
![27](https://user-images.githubusercontent.com/106502672/210051929-00ddc08f-62dd-477b-b2b3-1ca02ce17910.jpg)
<br/><br/><br/>

# 제작 과정에서의 문제와 극복 과정
- 본 프로젝트를 진행하면서 가장 힘들었던 두 가지다. 첫째는 짧은 제작 마감 기한이고 둘째는 프로젝트의 규모다.
- 프로젝트는 약 5일이라는 기간 안에 완성되어야 했다. 리디자인 사이트를 선정하는 것부터 디자인 시안, 그리고 완성까지 5일이라는 기간 안에 해내야 한다는 사실은 필자에게 상당한 압박감을 주었다. 
- 시간의 압박에 대응하는 왕도는 없기 때문에 잠을 줄이며 해결해나가는 수밖에 없었다. 하루만에 리디자인 사이트로 한화호텔&리조트를 선택했고 다음날 리디자인 시안을 완성했다. 다행히 이전에 혼자 만들던 시안이 하나 있었는데, 그것이 리디자인 프로젝트에 요긴하게 쓰였다. 총 6페이지의 시안이 완성됐고 그 다음부터는 코딩하는 일만이 기다리고 있었다.
- 시안까지 빠르게 해낸 것까진 좋았으나 6페이지를 pc와 모바일 미디어쿼리까지 적용하여 완성한다는 것은 만만치 않은 일이었다. 필자는 예전에 완성한 프로젝트의 소스를 불러와서 적절하게 응용하는 방식으로 작업 속도를 올리려고 노력했다.

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
# 2022년 12월 12일
- 패밀리사이트에 커서 효과 추가함
- 서브메뉴의 홈버튼에 메인페이지로 가는 링크를 추가함
- 이벤트 섹션에 버튼 이벤트 완성

# 2023년 1월 2일
- 헤더의 로고 크기를 줄임
- max-width를 담당하는 div 박스에게 padding 값을 적용하여 화면이 줄어들 때 좌우 여백이 존재하도록 함.
- max-width를 담당하는 div 박스에세 overflow:hidden 을 적용하여 AOS 애니메이션으로 벌어지는 width 값을 없앰.
- 언어 아이콘, 사이트맵 아이콘 사이즈 키움

# TO DO LIST
- 푸터의 간격이 너무 크므로 윗부분과 비슷한 크기의 공백으로 수정하기
- 패밀리사이트 배경색을 넣어줘서 존재감을 키워주기
- 대중교통 이용 버튼 클릭시 하단 메뉴가 덮이지 않고 내려가도록 수정하기
- 글씨가 좌측정렬 되어 있는데 살짝 안 쪽으로 들여쓰기 
