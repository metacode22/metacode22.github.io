---
date: '2023-03-26'
title: '프로그래머스 데브코스 최종 프로젝트 회고'
summary: '마지막 프로젝트 수행 간 겪은 고민과 이슈, 생각들을 정리해보았습니다. 그리고 앞으로 어떻게 개선하고 성장해나갈지 생각해보았습니다.'
thumbnail: './kkini-logo.png'
categories: ['Featured', '회고', '프로그래머스']
---

![kkini logo](./kkini-logo.png)

> 배고프면 합류하라! 위치기반 밥 친구 만들기 서비스 Kkini <br /><br /> Kkini는 현재 위치에 기반하여 주변의 음식점을 랜덤으로 추천해줍니다. 또한, 혼자서는 두려운 음식점을 방문할 수 있도록 밥모임 모집 서비스를 제공합니다. <br /><br />식사 해결에 고민하는 시간을 줄이고, 나아가 인연을 만날 수 있는 기회를 제공하며 음식점 현장 방문을 장려하기 위해 Kkini를 기획하였습니다.

<br />

3월 15일 수요일의 최종 발표를 마지막으로 데브코스를 수료했다. 처음엔 기획때문에 팀 분위기가 살벌해서 이번 프로젝트도 만만치 않겠다는 생각이 들었다. 하지만! 서로 잘 합의하여 기획 단계만 넘고 나니 정말 마법 같이 화기애애해졌다. 서로 선을 넘지도 않으면서 분위기도 유쾌하게 잘 흘러갔다. 또한, 한 번 잘 부딪히고 나니 서로의 의견을 가감 없이 드러낼 수 있었고, 의견을 듣는 사람들 또한 이해와 배려를 가득 가지고 들어주었다. 그러면서도 서로 잘못된 점은 확실하게 짚어주려 하면서 건강한 토의와 토론을 했던 것 같다.

공식적인 프로젝트 기간은 끝났지만 Kkini 서비스를 발전시키기 위해 계속해서 팀원들과 스프린트를 진행할 예정이다. 그 전에 내가 구현한 것, 배운 것들을 정리하고 넘어가면 뒤에 더 속도가 붙을 것 같아 이렇게 회고를 작성한다. KPT, 타임라인 등 여러 회고 작성법들이 있던데 원하는 내용들을 담는 게 어려울 것 같아 그냥 마음대로 적어보려 한다.

[끼니 해결하러 가기](https://kkini.vercel.app/)

[Kkini FE Github Repository](https://github.com/prgrms-web-devcourse/Team-DarkNight-Kkini-FE)

<br />

## 내가 구현한 것

팀원들에게 정말 미안하게도 이번 프로젝트에서는 내가 많은 욕심을 부린 것 같다. 재미 있어 보이는 것들은 하고 싶다고 먼저 말하면서 다른 팀원들의 기회를 많이 날려버리지 않았나 싶다. 혹시 팀원들이 이 글을 본다면 꼭 미안하다는 말을 전해주고 싶다.

<br />

### 초기 프로젝트 셋팅

이전에 정글이라는 부트캠프에서 팀원과 같이 작업하면서 불편했던 점 중 하나가 코드 포맷팅과 폴더 구조이다. 그 때는 그 팀원도 그렇고 나도 그렇고 eslint나 prettier가 무엇인지 전혀 몰랐다. 그리고 폴더 구조를 어떻게 하면 좋을지 크게 생각해보지도 않았던 것 같다. 조금만 시간을 들이면 다른 프로젝트들을 구경하면서 구조를 잡을 수 있었을텐데 말이다.

다행히 이번 프로젝트에서는 팀원 모두 협업 시 코드 일관성에 관심이 많았다. 그래서 처음부터 구조에 대해 적극적으로 얘기했었다. 최종적으로 현재 만들어진 폴더 구조는 다음과 같다.

```
src
 ┣ apis
 ┣ components
 ┃ ┣ ...
 ┃ ┗ common # Header, Navigation, Button 등 공통으로 쓰이는 컴포넌트 폴더
 ┣ contexts
 ┃ ┗ kakaoMap # kakao를 통해 만든 객체들을 context로 저장
 ┣ hooks
 ┃ ┣ ...
 ┃ ┗ query # useQuery, useMutation 등 react-query 훅 폴더
 ┣ pages
 ┃ ┣ food-party
 ┃ ┃ ┣ detail
 ┃ ┃ ┃ ┣ chat
 ┃ ┃ ┃ ┃ ┗ [roomId].tsx # 채팅방 페이지
 ┃ ┃ ┃ ┗ [partyId].tsx # 밥모임 상세 페이지
 ┃ ┃ ┣ list
 ┃ ┃ ┃ ┣ restaurant
 ┃ ┃ ┃ ┃ ┗ [placeId].tsx # 맛집으로 검색한 밥모임 목록을 페이지
 ┃ ┃ ┃ ┗ my.tsx # 자신이 참여 중인 밥모임 목록을 보여주는 페이지
 ┃ ┃ ┣ review
 ┃ ┃ ┃ ┗ [partyId].tsx # 밥모임 식사 완료 후 리뷰를 작성할 수 있는 페이지
 ┃ ┃ ┣ application.tsx # 자신이 다른 밥모임에 보낸 신청서, 자신이 만든 밥모임에 들어온 신청서들을 보여주는 페이지
 ┃ ┃ ┗ create.tsx # 밥모임을 생성하는 페이지
 ┃ ┣ user
 ┃ ┃ ┣ [userId].tsx # 나의 프로필 페이지
 ┃ ┃ ┗ edit.tsx # 나의 프로필 수정 페이지
 ┃ ┣ 404.tsx
 ┃ ┣ _app.tsx
 ┃ ┣ _document.tsx
 ┃ ┣ index.tsx
 ┃ ┗ oauth.tsx # 소셜 로그인 페이지
 ┣ services # useQuery, useMutation에 사용되는 비즈니스 비동기 로직 폴더
 ┣ stores # recoil로 저장하는 상태들을 정의하는 폴더
 ┣ styles
 ┣ types
 ┗ utils
 ┃ ┣ constants
 ┃ ┣ helpers
 ┃ ┗ validations
```

하지만 이 구조도 뭔가 부족하다는 생각이 들곤 한다. 어떤 걸 helpers나 validations에 둬야 하는가? 가끔 헷갈리곤 했다. 그래도 프로젝트를 진행하는 데에는 큰 문제를 일으키진 않았다고 생각한다.

<br />

### 카카오맵 연결 및 랜덤 음식점 뽑기 기능 개발

가장 재밌었으면서도 고민을 많이 했으며 아쉽기도 했던 부분이다.

고민을 많이 했던 부분은 네이버, 카카오, 구글 이 3가지 Maps API 중 어떤 걸 사용할지였다. 크게 고려한 부분은 디자인과 정확성, 기능이었다. 구글 Maps의 경우 너무 어지럽다는 생각이 들어 디자인은 네이버와 카카오가 뛰어나다고 봤다. 그 다음 정확성은 네이버와 카카오라고 봤다. 우리나라를 대상으로 하다보니 음식점 정보를 업데이트 하는 데에 있어 네이버와 카카오가 더 신속하고 정확할 것이라고 보았다. 반면 기능은 구글이 가장 많이 보유하고 있었다. 음식점에 대한 리뷰 사진 뿐만 아니라 평점, 지금 영업 중인지 아닌지 등등 더 많은 정보를 제공해주었다. 출발지로부터 도착지까지 쉽게 경로 또한 그릴 수 있었다. 하지만 많이 사용하면 할수록 과금이 되는 형태였다. 한 달 200달러가 제공되는데 개발 중간 단계에서까지만 해도 거의 100 달러를 써버렸다. 행복회로를 돌리는 것일 수도 있지만 사용자가 조금만 늘어나도 돈이 많이 나올거라고 판단했다. 따라서 절충안으로 1일 30만회까지 요청할 수 있는 카카오를 골랐다. 음식점 리뷰들의 사진들을 제공해주지 않고 기능들은 구글에 부족하지만 과금을 막을 수 있었고 사진은 카카오 Search API를 통해 어느 정도 보완할 수 있다고 판단했다. 그리고 무엇보다 네이버, 구글보다 공식 문서가 정말 잘 되어 있다.

카카오맵은 다음 코드를 통해 띄웠다.

```tsx
const KakaoMap = () => {
  const kakaoMapRef = useRef<HTMLDivElement>(null);
  const { kakaoMap, setKakaoMap } = useKakaoMapContext();

  ...

  // 카카오맵을 생성하고 생성된 맵 객체를 context로 저장.
  useEffect(() => {
    kakao.maps.load(() => {
      if (!kakaoMapRef.current) return;

      ...

      const options: kakao.maps.MapOptions = {
        center: new kakao.maps.LatLng(lat, lng), // lat, lng는 강남역의 위도와 경도이다.
        level: level,
      };
      const createdKakaoMap = new kakao.maps.Map(kakaoMapRef.current, options);

      ...

      // 스크롤 줌/아웃 제한
      createdKakaoMap.setMinLevel(DEFAULT_MIN_LEVEL);
      createdKakaoMap.setMaxLevel(DEFAULT_MAX_LEVEL);

      ...

      setKakaoMap(createdKakaoMap);
    });
  }, []);

  ...

  return (
    <Box position='relative' width='100%' height='100%'>
      <div
        ref={kakaoMapRef}
        style={{
          width: '100%',
          height: '100%',
        }}
      />

      ...

    </Box>
  );
};

export default KakaoMap;

```

<br />

이 과정에서 겪은 이슈는 크게 2가지이다.

첫 번째는 script 태그를 통해 카카오 Maps 기능들을 다 제공하는 kakao.js를 다 불러오기 전에 kakao 메서드들을 사용하여 에러가 떴던 점이다. 위의 코드에서와 같이 kakao.maps.load를 사용하지 않으면 kakao.maps.LatLng 객체를 만드는 과정에서 다음과 같이 정의가 되어 있지 않기에 에러가 발생한다. kakao.maps.load(callback)는 kakao.js를 다 받아오고 나서 callback 함수가 실행될 수 있게 도와준다.

![kakao.maps.load 없이 kakao 메서드를 사용하면 생기는 에러](./kakao-map-error.png)

두 번째는 카카오맵이 중복 생성되어 사용자가 맵을 이동시키거나 확대/축소할 때 카카오맵이 겹치게 보이는 현상이었다. 이는 단순히 내가 의존성 배열을 잘못 작성하였기 때문에 벌어진 일이었다. eslint가 알아서 의존성 배열에 넣을 것들을 추천해주는데 당연히 이게 맞겠지~ 하면서 안일하게 생각했기 때문이다.

카카오 Maps API에서는 생성된 kakao map 객체를 삭제할 수 있는 메서드가 존재하지 않는다. 따라서 useEffect문에서 unmount할 때, 즉 return문에다가 기존 kakao map 객체를 삭제하는 코드를 삽입할 수 없다. 그렇기 때문에 kakao map 객체는 mount될 때에만 딱 1번 생성되어야 한다. 하지만 내가 의존성 배열에 빈 배열이 아니라 값이 들어간 배열을 작성했기 때문에, 그 값이 변하면 kakao.maps.load의 callback 함수에서 kakao map 객체를 다시 생성했고 이로 인해 여러 카카오맵이 화면 상에 보이게 되어 맵들이 겹치게 보이는 현상이 발생했던 것이다. 의존성 배열을 비움으로써 해당 현상은 말끔히 해결할 수 있었다.

<div style='display: flex; justify-content: center;'>
  <video width='50%' controls>
    <source src='./kakao-map-overlap.mp4' type="video/mp4">
    <p>동영상 재생이 불가능합니다.</p>
  </video>
</div>

카카오 Maps API 사용 경험은 정말 좋았다. 공식 문서도 깔끔했고 한국 전용이다보니 한글로 된 아티클들도 많아서 참고하기 편했기 때문이다. 하지만 다음에 다른 프로젝트를 할 때에는 구글 Maps API를 써서 더 많은 기능을 제공해보고 싶기도 하다.

<br />

### 채팅

실시간으로 대화하는 것이 아니라 비동기적으로 댓글을 통해 밥모임 인원들과 얘기하는 것은 답답함을 느끼게 만들 수 있어 사용자 경험을 저하시킨다고 생각했다. 중간에 누가 못 간다던가, 10분 늦는다던가, 갑자기 음식점이 닫아서 방장이 그걸 팀원들에게 말해줘야 된다거나 하는 등 여러 상황이 생길 수 있다고 생각했고, 댓글보다는 채팅을 통해 곧장 얘기를 나누는게 더 좋겠다고 판단했다. 그래서 처음부터 백엔드분들에게 웹소켓을 사용해 채팅을 구현하자고 제안하였다. 백엔드분들 모두 웹소켓을 처음 써보기에 조금은 주춤하셨지만 나중에 곧장 너무나도 잘 구현해주셨다. 화면만 잘 구현하면 될 정도여서 책임감을 느끼고 개발했다.

이전에 모 기업의 과제에서 채팅을 완벽하게는 아니지만 대강 구색은 갖춰서 만들어 봤었기에 자신감 있게 개발했다. 당연히 socket.io-client를 쓰면 되겠지?라고 안일하게 판단했었는데 막상 구현하려고 보니 SockJS와 StompJS를 써야했다. 전자는 NodeJS 전용이지만 후자는 Java-Spring 전용이기 때문이다. 다행히 크게 개념적으로 다른 부분은 없었던 것 같다.

프론트에서 채팅을 구현한 흐름을 설명하자면, 먼저 해당 밥모임에 대한 채팅방 페이지로 이동한다. 그러면 밥모임 고유 id를 바탕으로 채팅방을 생성하게 된다. 즉 밥모임 고유 id가 채팅 room id가 되는 셈이다. 들어가는 순간 데이터베이스에 저장된 기존의 메세지 이력들을 들고와 렌더링 시킨다. 이 때 조금 커스텀 한 부분은 날짜이다. 카카오톡을 참고하여 커스텀하였는데, 같은 날짜에 작성된 메세지들의 경우 날짜는 1번만 출력될 수 있게 하였다. 즉 다음과 같이 채팅 화면이 나올 수 있도록 구현했다.

<div style="display: flex; justify-content: center;">
  <video width='60%' controls>
    <source src='./chat.mp4' type="video/mp4">
    <p>동영상 재생이 불가능합니다.</p>
  </video>
</div>

어쨋든, 그렇게 기존의 메세지들을 데이터베이스로부터 가지고 와서 렌더링을 하면서 소켓 서버와 연결한다. connect가 정상적으로 이뤄지면 subscribe를 하게 된다. 이제 구독(subscribe)할테니 발행(publish)을 하면 나한테도 데이터를 날려달라는 것이다. 이렇게 구현하면 채팅방에 들어온 다른 사람들이 메세지를 보내면, 즉 publish(send)하면 나는 그 데이터를 즉각적으로 받아서 기존의 state에 더하면 해당 메세지를 화면에 보여줄 수 있다. 나도 보낼 때 send 메서드를 사용하면 다른 사람들의 채팅방 화면에 나의 메세지가 출력되게 된다.

<a href="https://github.com/prgrms-web-devcourse/Team-DarkNight-Kkini-FE/blob/develop/src/pages/food-party/detail/chat/%5BroomId%5D.tsx" target="_blank" rel="noreferrer noopener">채팅 코드 링크</a>

> 코드가 조금 복잡할 것 같아 그냥 깃헙 링크를 달아뒀습니다.

socket.io-client에 대한 글들은 많아서 참고하기 좋아보였던 반면, SockJS와 StompJS에 대한 글들은 적어 구현하는 데에 시간이 조금 걸렸던 것 같다.

<br />

### 밥모임 목록, 상세 페이지

처음엔 NextJS의 `getServerSideProps`를 통해 서버사이드 렌더링으로 페이지를 구현해야겠다는 생각을 했다. 밥모임에 대한 상세 정보가 SEO에 노출되어도 괜찮다고 생각했고 client side에서 fetch하는 것 보다 렌더링에 필요한 데이터들을 서버에서 미리 fetch하여 보여주는 것이 더 빠르겠다는 생각이 들었기 때문이다. 하지만 기획도 바뀌고(밥모임 상세 페이지는 로그인하지 않으면 못 들어가게 바뀌었다) 특히나 getServerSideProps, 즉 서버 측면에서 cookie에 담긴 refresh token을 가지고 오지 못해 로그인 권한이 필요한 API를 호출할 수 없었다.(getServerSideProps에서 react-query의 prefetch를 이용했는데 이 때 refresh token을 가지고 올 수 없었다) 같은 팀원과 수많은 시도를 했지만 프로젝트 마감까지는 해결할 수 없는 문제라고 판단하여 과감히 getServerSideProps를 버리기도 결정했다.

어쨋든! 밥모임 목록 페이지는 랜덤 맛집 드로어를 통해서 들어갈 수도 있고, 밥모임 커스텀 오버레이를 눌러서도 들어갈 수 있으며, 네비게이션 바의 내 밥모임 버튼을 클릭해서도 들어갈 수 있다. 각 경로마다 필요한 데이터가 다를 뿐, 화면의 구조는 거의 동일했고 첫 번째로 말한 랜덤 맛집 드로어를 통해 들어가는 경우를 제외하고는 다른 팀원들이 개발하였기에 잘 이해할 수 있도록 적어놓는 것이 중요하다고 생각했다.

기본이겠지만 다음과 같이 page 컴포넌트에서만 API를 호출하는 로직을 작성했고 밥모임 리스트들은 List, ListItem으로 컴포넌트를 나누어서 작성했다. 즉 다른 페이지에서도 해당 컴포넌트를 가져와 데이터만 넣으면 동일한 화면으로 렌더링이 되도록 구현하였다.

```tsx

...

type SearchedFoodPartyListProps = SearchedFoodPartyListQuery;

const SearchedFoodPartyList = ({
  placeId,
  name,
}: SearchedFoodPartyListProps) => {
  const {
    data: foodPartyList,
    isLoading,
    error,
    isSuccess,
  } = useGetSearchedFoodPartyList(placeId);
  const { randomRestaurant } = useRandomRestaurantContext();
  const setSelectedRestaurant = useSetRecoilState(selectedRestaurantState);
  const router = useRouter();
  const handleClickFoodPartyItem = (partyId: number) => {
    router.push(ROUTING_PATHS.FOOD_PARTY.DETAIL.INFORMATION(partyId));
  };
  const handleClickCreateFoodPartyButton = () => {

    ...

  };

  if (isLoading) return <FoodPartyListSkeleton foodPartyCount={2} />;
  if (error) return <GoHomeWhenErrorInvoked />;

  return (
    <>
      {isSuccess ? (
        <Flex flexDirection='column' padding='1rem'>
          <Heading paddingBottom='1rem'>{name}의 밥모임</Heading>
          <FoodPartyList
            isMyFoodParty={false}
            foodPartyList={foodPartyList}
            onClickViewButton={handleClickFoodPartyItem}
            onClickCreateFoodPartyButton={handleClickCreateFoodPartyButton}
          />
        </Flex>
      ) : (
        <GoHomeWhenErrorInvoked />
      )}
    </>
  );
};

export default SearchedFoodPartyList;

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async context => {
  const { placeId, name } = context.query;

  return {
    props: {
      placeId,
      name,
    },
  };
};
```

로딩 중일 때는 사용자에게 대략적으로 어떤 화면이 구성되는지 보여줄 수 있도록 spinner보다는 skeleton을 사용하였다. 그리고 API를 호출하는 과정에서 error가 발생하면 에러 컴포넌트가 뜨도록 하여 Home으로 돌아가 다시 서비스를 사용할 수 있도록 하였다. 여기서 getServerSideProps를 사용한 이유는 단순히 query string들을 컴포넌트 함수에 처음부터 undefined가 되지 않게 넘겨주기 위함이다. 단순히 useRouter를 사용해서 query string을 받아오면 처음엔 undefined가 뜨기 때문에 useEffect를 사용해야 하는데 이러한 번거로운 과정을 없애기 위해 getServerSideProps를 사용했다.(이 글을 쓰면서 확인해보니 그러지 않아도 될 것 같다. Next 10.0.5 이상부터는 처음 렌더링 시 undefined가 아닌 것 같다. 리팩터링에 반영하도록 해야겠다. 배포하고 보니 getServerSideProps를 사용한 페이지로 넘어갈 때 상당히 느렸는데 getServerSideProps를 안 쓸 수 있게 되면 오히려 좋은 것 같다.)

<br />

## 기술 스택 경험

### NextJS

파일 시스템 기반의 라우팅과 getStaticProps, getServerSideProps 혹은 client-side 등 유연한 데이터 페칭, Next/Image를 이용한 이미지 최적화, Font 최적화, fast refresh, 보다 나은 SEO 등 사용하지 않을 이유가 없다고 판단하여 NextJS를 Kkini의 기술 스택으로 채택하였다. 하지만 끝나고 보니 파일 시스템 기반의 라우팅을 제외하고는 제대로 사용하지 못했다는 생각이 든다. 하지만 이렇게라도 써보면서 NextJS와 친해지는 데에는 유의미한 결과를 얻었다고 생각한다.

<br />

### TypeScript

프론트엔드끼리만 진행했던 프로젝트인 [Bigtoria](https://github.com/prgrms-fe-devcourse/FEDC3_Bigtoria_Off)에서도 TypeScript를 사용하긴 했지만, 본격적으로 프로젝트에 TypeScript를 사용한 것은 처음이었어서 귀찮을 뿐 장점을 크게 느끼지 못했다.

하지만 이번에 Kkini를 만들면서는 장점을 크게 느낄 수 있었다. 타입만 잘 지정해놓으면 IDE에서 어떤 값들이 들어와야 할지 예상해주었다. 그리고 보다 방어적으로 코드를 작성할 수 있었다. 아무래도 이제는 TypeScript를 사용하지 않는 것이 더 어색해지지 않을까 싶다. 오랜만에 알고리즘을 풀면서 갑자기 오로지 JavaScript로만 작성할 때 그 어색함을 크게 느꼈다.

TypeScript의 장점은 느꼈던 반면, 아직 나의 이해도는 많이 부족한 편이라고 생각한다. 미처 다 듣지 못했던 강의도 다 들어보고 TypeScript가 어떻게 돌아가는지 원리도 파악해보아야겠다.

<br />

### React Query

TypeScript와 더불어 가장 크게 만족감을 느낀 기술이다. 서버로부터 받은 데이터를 캐시에 저장하게 되는데 다음에 그 페이지에 재방문했을 때 staleTime이나 cacheTime 지나지 않았으면 refetch하지 않고 곧바로 캐시에서 꺼내 보여주게 됨으로써 정말 좋은 사용자 경험을 제공할 수 있겠다는 생각이 들었다. 첫방문을 제외하곤 loading spinner나 skeleton ui를 보여주지 않고 곧바로 데이터가 가득 찬 화면을 보여줄 수 있기 때문이다.

이번 프로젝트에는 아직 적용하진 못했지만, 사용자의 행동을 예측하여 미리 데이터를 불러오는 prefetch도 정말 유용하겠다는 생각을 했다.

데브코스 1기 선배님이 tanstack-query 공식 홈페이지의 120 달러 가량의 강의를 강력히 추천해주셨는데 한 번 이것도 들어봐야겠다.

<br />

### Chakra UI

이 또한 TypeScript, React Query와 함께 크게 만족감을 느낀 기술이다. 프로젝트 마감기한이 3주가 남은 시점에 개발에 들어갔는데 아무래도 여러 컴포넌트의 디자인을 수동으로 짜다보면 시간이 많이 걸릴 것이라고 판단하여 Chakra UI를 선택하게 되었다. Material UI도 같이 생각해봤었는데 이전에 사용한 경험으로는 디자인이 생각보다 나랑 취향이 맞지 않다고 판단하여 팀원들에게 Material UI는 사용하지 말자고 했다. ㅋㅋㅋ

결과론적으로는 정말 좋은 선택이었다는 생각이 든다. 그냥 Emotion을 사용했다면 Chakra의 Flex나 Stack과 같은 컴포넌트를 공통 컴포넌트로 일일이 만들었어야 했을 것이다. 하지만 이러면 누군가는 사용할 때마다 자신이 필요로 하는 디자인에 맞게 다시 커스텀을 해야 할 수도 있고, 그러면 다시 코드 리뷰를 해야 하며 그만큼 시간을 낭비하게 될 것이다. 그리고 Modal이나 Drawer, Toast도 가져다 사용하면서 많은 시간 낭비를 줄일 수 있었다.

<br />

### Recoil

Recoil에 대한 만족도는 아직 높지 않은 것 같다. 상태 관리를 위해 React에서 기본으로 제공하는 Context API 대신 Recoil을 사용한 이유는 불필요한 재렌더링을 막고 코드양 또한 줄이기 위해서였다. 허나 kakao map 객체를 atom으로 관리하는 과정에서 마주한 에러로 인해 Context API와 Recoil을 같이 쓰게 되었다.

마주한 에러는 다음과 같다.

<div style='display: flex; justify-content: center;'>
  <video width='100%' controls>
    <source src='./recoil-error.mp4' type="video/mp4">
    <p>동영상 재생이 불가능합니다.</p>
  </video>
</div>

Cannot add property 0, object is not extensible라는 에러가 계속해서 뜨는데 read only 객체에 속성을 추가하려고 할 때 뜨는 에러이다. 왜 저렇게 깨지는지, 드래그할 때마다 에러 숫자가 늘어나는지는 확인하지 못했다. 허나 kakao map 객체가 read only라는 것은 type 코드를 타고 들어가면서 확인할 수 있었는데 지금은 찾을 수가 없다...

어쨋든 에러가 떴을 때 구글링을 해본 결과, 크게 2가지 방법을 떠올렸다. lodash의 deep clone 메서드를 통해 kakao map 객체를 read only가 아닌 객체로 깊은 복사하여 atom으로 관리하는 것과 그냥 context로 관리해버리는 것 2가지였다. 전자의 경우 deep clone을 위해 lodash를 설치한다는 것은 소 잡는 칼로 닭을 잡는다?라는 느낌이 다소 들었다. 그래서 불필요한 재렌더링을 방지하기 위해 Recoil을 선택했던 처음의 의도와는 상반되게 Context API를 사용하여 kakao map 객체를 관리하게 되었다.

근데 대체 어떤 과정에서 저런 에러가 뜨는 건지 문득 궁금해서 소스 코드를 조금 파보았다.

일단 recoil을 사용하면 다음과 같은 코드를 통해 전역 상태로 관리하게 된다.

```typescript
import { atom } from 'recoil';

export const isLoginState = atom<boolean>({
  key: 'isLogin',
  default: false,
});
```

여기서 default에 실제 데이터가 저장된다. 즉 read only 객체인 kakao map 객체에 속성을 추가하려는 작업은 대략 `options.default.추가할속성 = 어쩌고저쩌고`와 같은 코드로 이루어질 것이다.

그럼 일단 atom을 찾아보자. recoil 레포지토리에서 packages -> recoil -> recoil_values -> [Recoil_atom.js](https://github.com/facebookexperimental/Recoil/blob/main/packages/recoil/recoil_values/Recoil_atom.js)로 들어가면 [atom function](https://github.com/facebookexperimental/Recoil/blob/main/packages/recoil/recoil_values/Recoil_atom.js#L599)이 보인다. 처음엔 [isRecoilValue](https://github.com/facebookexperimental/Recoil/blob/main/packages/recoil/core/Recoil_RecoilValue.js#L32)를 통해 기존에 recoil로 관리 중인 데이터인지 확인하는 과정을 거치는 것 같다. 여기서 기존에 recoil로 관리 중인 데이터가 아니라면 [baseAtom](https://github.com/facebookexperimental/Recoil/blob/main/packages/recoil/recoil_values/Recoil_atom.js#L181)이라는 function에 options.default를 넣게 된다. [여기서부터](https://github.com/facebookexperimental/Recoil/blob/main/packages/recoil/recoil_values/Recoil_atom.js#L201) 보면 options.default.state가 loading인지 검사하는 코드가 있다. 어디서 state라는 속성이 추가가 된 것인지는 모르겠는데 [atom의 상태를 보여주기 위한 state](https://recoiljs.org/ko/docs/api-reference/core/Loadable/)가 options.default에 추가된다는 것을 확인할 수 있다. 즉 이 state 속성이 read only 객체인 kakao map 객체에 추가되는 과정에서 에러가 뜨는 것이지 않을까...라고 추측해보았다. 사실 거의 틀렸을 것 같다. ㅎㅎㅎ 그래도 소스 코드를 보면서 조금이나마 이해할 수 있어서 괜찮은 경험이었던 것 같다.

이렇게 추측해보는 과정에서 느낀 점이 있다. Github Repository를 보면 React의 경우는 facebook/react인 반면, Recoil은 facebookexperimental/react로 되어 있다. 아직 실험 단계라는 의미인 것 같다. 그래서 Recoil을 회사 코드에 바로 쓰이기엔 다소 검증이 많이 필요할 수도 있겠구나라는 점을 느꼈다.

<br />

### 포맷팅 툴들

다소 많은 툴들을 사용한 것 같다. ESLint, Prettier, StyleLint로 코드 포맷팅을 최대한 일관성 있게 유지하려고 했고 CommitLint를 통해 최소 prefix(feat, refactor, docs 등)만이라도 통일하려 했다. 그리고 Husky, Lint-Staged를 통해 레포지토리로 올라가기 전에 이러한 규칙들을 강제하고 잘못 작성했을 경우 잘못된 코드가 올라가는 것을 방지했다. 그 중 몇 가지만 짚어보고 가겠다.

- ESLint: 의도적으로 이번 프로젝트에 추가한 eslint plugin은 다음 3가지이다.

  - `@tanstack/eslint-plugin-query`: 이 plugin을 통해 useQuery 등 React Query를 사용할 때 코드 일관성을 가져가려고 했다. 해당 플러그인을 사용하면 다음과 같이 queryKey, queryFn라고 속성을 명시해서 useQuery를 써야 한다.

  ```typescript
  export const useGetMyFoodPartyList = () => {
    return useQuery({
      queryKey: [QUERY_KEYS.FOOD_PARTY.MY_FOOD_PARTY_LIST],
      queryFn: () => fetchMyFoodPartyList(),
      // ... 나머지 option들(staleTime, cacheTime, refetchInterval 등)
    });
  };
  ```

  - `eslint-plugin-jsx-a11y`: accessibility도 최대한 코드를 작성하면서 지키려 했다.(하지만 나중에 lighthouse 점수 보니까 개판이었다)
  - `eslint-plugin-simple-import-sort`: 이전 [Bigtoria 프로젝트에서 한 팀원이 적용한 plugin](https://github.com/prgrms-fe-devcourse/FEDC3_Bigtoria_Off/pull/30)이었다. 지저분한 import문들을 나름 규칙성 있게 정렬할 수 있었다.

- StyleLint: 대부분은 Chakra UI를 사용했기 때문에 Emotion의 styled를 사용할 일은 적었다. 그래도 StyleLint를 사용함으로써 styled 안의 스타일 코드들을 규칙성 있게 정렬할 수 있었다.

- CommitLint: 앞서 말한 것처럼 최소한 prefix만이라도 통일하려 했다. 사람이다보니 feat 대신 feature로 적어버릴 수도 있고, 혹은 prefix를 안 적을 수도 있다. 나중에 발견해서 수정하는 건 꽤 귀찮을 것 같았다. 그래서 그 귀찮음을 없애기 위해 처음부터 도입하였다.

<br />

## 팀원들에게서 배운 것

2020년도 초반에 해외봉사를 다녀온 적이 있다. 같이 활동한 30명 동기 모두 하나씩 크게 배울 점이 있구나라는 것을 느꼈을 만큼 좋은 동기들을 만났었다. 타지의 초등학생들을 대상으로 봉사를 했던 것도 좋은 경험이었지만, 뛰어난 동기들을 보며 배울 점이 무엇일까 생각해보는 것도 좋은 경험이었다. 그 때부터 어떤 활동을 하고 나면 팀원들로부터 배울 점이 무엇인지 개인적으로 되새기곤 했다. 이번 프로젝트에서도 팀원들에게 많은 것들을 배워서 이렇게 적어보려 한다.

> 실명을 밝혀서 미안합니다. ㅎㅎㅎ

- [동우](https://github.com/SDWoo): 동우에게 배운 건 의견 조율이었다. 프로젝트 초기 기획 때 백엔드분들과 의견이 합쳐지지 않았는데 이 분열을 합치는 데에 결정적인 역할을 해준 것이 동우였다. 동우는 자신의 입장과 생각만 내세우는 사람이 아니라 다른 사람과 어떻게 융화되고 합쳐질 수 있을지 생각할 줄 아는 사람이었다. 이번 프로젝트는 꼭 내 의견을 내세우고 싶었고 욕심을 많이 부렸어서 이런 측면을 보지 못했었는데 동우를 보면서 내가 무엇을 못 보고 있었는지 깨달을 수 있었다.

- [수화](https://github.com/live-small): 수화는 순간순간마다 무엇이 옳고 그른지 판단하는 감각이 뛰어난 팀원이라고 생각했다. 의문 제기도 기분 나쁘지 않게, 그러면서도 있는 그대로 전달할 줄 안다. 그리고 개발 지식이 아주 뛰어나고 그만큼 개발을 잘한다는 인상을 받았다. 특히 코드 리뷰에서 많은 존경심을 가졌다. 감정이 절제될 수 있는 텍스트로 전달하다보니 상세히 코드리뷰하는 것이 꺼려지곤 했었는데 수화가 해준 조언 덕에 나도 코드리뷰를 상세히, 그리고 더 열심히 할 수 있게 된 것 같다.(지금 상세히 물어보고 지적해놓아야 나중에 그 사람이 아닌 내가 그 코드를 가지고 개발할 때 생산성을 높일 수 있다라는 조언이었다.)

<br />

## 프로젝트 진행 간에 아쉬웠던 점들

- 시간이 부족할 것 같다는 핑계로 atomic design과 같은 디자인 패턴을 적용해보지 못한 것이 아쉽다.

- Recoil을 잘 모르는 상태에서 도입한 것 같다. Tutorial만으로는 부족했던 것 같다. 이전에 사용해보았고 조금 복잡하더라도 레퍼런스가 많은 Redux를 애초에 사용하는 건 어땠을까라는 생각이 든다. 다른 팀들 대부분이 Recoil을 사용하고 최근에도 Recoil이 유행이다보니 선택했었는는데 이런 선택이 조금 아쉽지 않았나 싶다.

- 팀원들 모두 지식이 부족하여 도입했으면 개발 생산성이 분명 떨어졌을 기술이 있는데 그래도 도입하지 않은 것이 아쉬운 것은 Test이다. 실제 현업에 가서 처음에 1인분은 할 수 있도록 Unit Test는 짤 수 있는 정도는 배워둬야겠다.

<br />

## 느낀 점

### 이번 프로젝트에서 스스로 내 점수를 매기자면?

나는 과연 같이 개발을 이어나가고 싶은 팀원이었을까?라는 생각을 가져보았는데 객관적으로 10점 중에 6 ~ 7점은 되지 않았나 싶다. 나름 사용자 측면을 고려하여 제안한 기능들과 UI들이 잘 먹혔다고 판단하고 자유롭게 의견을 말할 수 있는 분위기 형성에도 일조했다고 생각하기 때문이다. 그리고 많은 기능들을 빠르고 많이 개발했다고 생각한다.

하지만 몇몇 에러들은 시간이 부족하다는 핑계로, 중요하지 않을 수도 있다는 생각으로 눈 가리고 아웅해버렸다. 초반엔 너무 내 의견만 내세우기도 했던 것 같고 가끔은 귀찮음을 느껴서 다른 사람의 의견에 귀 기울이지 않고 그냥 동의해버리도 했다. 따라서 10점 중 3 ~ 4점을 빼버렸다. 매 순간 집중해야 나중에 고생하지도 않고 고생시키지도 않는다는 것을 명시해야겠다.

### 과연 나는 성장을 했을까?

이번 프로젝트를 통해 어떤 성장을 이뤘을까?라고 생각을 해봤다. NextJS나 Recoil, React Query와 같이 새로운 기술도 써보고 TypeScript에 조금 더 익숙해져 보기도 했지만 가장 큰 점은 의견을 표출할 수 있게 되었다는 점 같다. 이전까지는 그저 팀 분위기가 와해되는 것을 방지하기 위해 대다수의 의견과 다르면 내 의견을 숨기기도 했다. 그러다보니 결국 나중에는 내가 찝찝해졌어서 개인적으로 토라지곤 했었는데, 이번엔 프로젝트에 욕심을 많이 내서인지 처음부터 의견을 많이 표출했다. 프로젝트를 진행하는 도중에도 의심이 생기면 속에 담아 두지 않고 곧바로 생각들을 쏟아냈다. 성숙하게 생각들을 쏟아냈는지는 모르겠지만, 이렇게 의문과 의견들을 담아두지 않고 전달하다보니 스스로 이 프로젝트에 대한 의심 없이 확신을 가지고 개발할 수 있었다. 팀 분위기도 중요하지만 제품의 품질도 생각할 수 있게 된 계기가 되지 않았나 싶다.

<br />

## 앞으로 Kkini는 어떻게 할까

- Google Analytics: 서비스의 변경 사항에 따라 사용자가 어떻게 반응하는지 수치로(특정 페이지에 머무는 시간, 페이지별 사용자 수 등) 알 수 있으면 더 동기부여가 될 것 같다는 생각이 들었다. 그리고 변경 사항이 어느 정도 긍정적으로 유효했는지 판단할 수 있는 지표도 될 것이라고 판단해 Google Analytics를 붙일 예정이다.

- PWA 적용 후 구글 스토어에 배포하기: 사용자들이 계속 웹 주소로 들어가게 되는 건 사용자 경험을 떨어뜨릴 수 있다고 생각한다. 모바일 전용 서비스이다보니 앱을 누르면 자연스레 서비스를 사용할 수 있게 하는 것이 맞지 않나 싶다. 이전에 PWA까지는 다소 수준 떨어지게 적용해봤었는데 이번엔 조금 더 보완해서 PWA를 적용하고 구글 스토어에도 배포해보아야겠다. 이를 통해 실제 사용자들의 피드백을 받을 수 있을 것 같아 많은 기대가 된다.

- 웹 성능 측정 및 최적화: 처음엔 라이트하우스로 측정하려고 했는데 팀원들로 라이트하우스는 컴퓨터마다 다르고 측정할 때마다 또 다르다는 의견을 듣게 되었다. Sentry와 같은 도구를 써보는 것도 좋을 것 같고 이를 통해 성능을 최적화해보고 싶다. 사실 지금은 라이트하우스로 측정해보고 개선하는 것만 해도 유의미한 효과가 있을 것 같다. 지금 라이트하우스 점수가 많이 낮기 때문이다. ㅎㅎㅎ

- 인피니트 스크롤 적용하기: 백엔드 분들이 정성스레 만들어주셨는데 막판에 기능 구현을 몰아치다보니 인피니트 스크롤까지 적용하진 못했다. 밥모임이나 채팅 등은 쉽게 쌓일 수 있는 데이터이다보니 많이 쌓이는 순간 성능을 저하시킬 수 있을 것 같다. 빠른 시일 내에 적용하는 것이 좋을 것 같다.

<br />

## References

- [useRouter receive undefined on query in first render](https://stackoverflow.com/questions/61040790/userouter-withrouter-receive-undefined-on-query-in-first-render)
- [tanstack query eslint](https://tanstack.com/query/v4/docs/react/eslint/eslint-plugin-query)
- [Recoil Github Repository](https://github.com/facebookexperimental/Recoil)
