#  Vue3 + Vuetify 를 활용한 포트폴리오 프로젝트

## 🧾 소개

이 프로젝트는 **Vue 3**와 **Vuetify**를 기반으로 제작된 개인 포트폴리오로, 가상의 호텔을 소개하는 컨셉의 웹사이트입니다.
프론트엔드 개발에 대한 이해를 바탕으로, 웹 퍼블리싱 역량을 보여주기 위해 제작했습니다.

- **기술 스택**: Vue 3, Vuetify 3, Vite, GitHub Pages
- **배포 주소**: 👉 [https://nahojoo.github.io/vue-toy-project1](https://nahojoo.github.io/vue-toy-project1)


## 📄 Page 구성
- Home
  * 이미지 슬라이드를 캐러셀(Carousel) 컴포넌트로 구현
- Room 
  * 서브페이지 상단에 패럴랙스(Parallax) 스크롤 효과 적용
  * 카드(Card) 컴포넌트를 사용해 다양한 방 정보를 시각적으로 표현

## 📄 Components
- 공통 컴포넌트
  * Header
  * Card Item
  * Footer

## 🎨 스타일 커스터마이징

- Vuetify의 기본 스타일을 활용하되, 콘셉트에 맞게 전역 스타일링 수정
- v-primary, v-secondary, v-tertiary 로 커스텀 버튼 컴포넌트를 정의
-	Vuetify 3의 theme system을 활용해 다크모드 및 라이트모드에 대응되는 색상 설정
-	공통되는 카드 UI를 컴포넌트로 분리하고, 슬롯(slot)을 사용해 내용만 바꿀 수 있도록 구성함으로써 재사용성과 확장성 고려