## 프로젝트 제목

![Group 113](https://github.com/yyoumi4854/taxi/assets/64270940/09fb8c93-ff6f-4194-b2bf-c93f8da6407f)
**개인택시 운행기록 (LPG 전용)**

## 소개

개인택시 운행관리를 위한 기록 앱 입니다. </br>
사용하기 간편하게 불필요한 요소를 줄이고, 운행기록에 필요한 정보만 적을 수 있게 제작했습니다.

### 주요 기능

**🚕 운행 기록하기**

- 카드, 현금, LPG 주입량, LPG 단가, 주행거리, 영업 거리, 통행료를 기록할 수 있습니다.
- 작성한 기록을 토대로 영업금액, LPG 충전 금액, 연비, LPG 사용량이 자동으로 계산됩니다.

</br>

**🚕 운행기록 달력에서 확인하기**

- 작성한 운행기록을 달력에서 확인하실 수 있습니다.
- 작성한 날에는 표시되어 있습니다.

</br>

**🚕 월별로 운행관리 기록 확인하기**

- 작성한 운행기록을 토대로 월별마다 총합산을 확인할 수 있습니다.

</br>

**🚕 월간, 연간 영업금액을 그래프로 확인하기**

- 월간 영업금액을 막대그래프로 확인하실 수 있습니다.
- 연간 영업금액을 막대그래프로 확인하실 수 있습니다.

## 시작하기

> ❗️ Android 전용 앱입니다.

</br>
프로젝트를 실행하려면 다음 단계를 따르세요. </br>

1. 저장소를 클론합니다.

   ```bash
   https://github.com/yyoumi4854/taxi.git
   ```

2. 필요한 의존성 패키지를 설치합니다.

   ```bash
   npm i
   ```

3. 애플리케이션을 실행합니다.
   ```bash
   npm run android
   ```

## 기능

프로젝트 주요 기능 및 사용방법 </br>
홈, 캘린더, 차트 3개의 하단메뉴 기록하기 화면 총 4개의 페이지가 있습니다.

### 📝 RECORD

운행정보를 기록할 수 있습니다.

![Group 103](https://github.com/yyoumi4854/taxi/assets/64270940/0f8287ae-a14f-4a9d-83de-8c9881fff027)

- 카드, 현금, LPG 주입량, LPG단가, 주행거리, 영업거리, 통행료를 기록할 수 있습니다.
- 작성한 기록을 토대로 영업금액, LPG 충전 금액, 연비, LPG 사용량이 자동으로 계산됩니다.
- 캘린더 버튼을 클릭하면 다른날짜를 선택할 수 있습니다.

### 🏠 HOME

연간 영업금액 및 월별로 운행관리 기록 확인할 수 있습니다.

![image 20](https://github.com/yyoumi4854/taxi/assets/64270940/4579982f-d305-4aef-b60c-bf97dd7ca86d)

- 작성한 운행기록을 토대로 월별마다 총 합산을 확인할 수 있습니다.
- +버튼을 클릭하시면 운행정보를 기록할 수 있습니다.

### 🗓️ CALENDAR

운행기록을 달력에서 확인할 수 있습니다.

![Group 105](https://github.com/yyoumi4854/taxi/assets/64270940/8b585fc6-321c-47d3-9f23-611ab29fb3c1)

- 작성한 운행기록을 달력에서 확인하실 수 있습니다.
- 작성한 날에는 표시가 되어 있습니다.
- 선택한 날짜에 운행정보가 없으면 운행정보를 추가하실 수 있습니다.
- 선택한 날짜에 운행정보가 있으면 운행정보를 수정하시거나, 삭제하실 수 있습니다.

### 📊 CHART

월간, 연간 영업금액 총액을 차트로 확인할 수 있습니다.

![Group 104](https://github.com/yyoumi4854/taxi/assets/64270940/c759e397-c26f-4358-bfe7-ea18fc82564e)

- 월간 영업금액을 막대 그래프로 확인하실 수 있습니다.
- 연간 영업금액을 막대 그래프로 확인하실 수 있습니다.

## 기술 스택

<div align=center>
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/reactnative-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
<img src="https://img.shields.io/badge/realm-39477F?style=for-the-badge&logo=realm&logoColor=white">
<img src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white">
<img src="https://img.shields.io/badge/dayjs-FF5F4C?style=for-the-badge&logo=&logoColor=white">
</div>

### react-native library

- react-navigation/native
- react-navigation/bottom-tabs
- react-navigation/native-stack
- react-native-svg
- react-native-calendars
- react-native-gifted-charts
