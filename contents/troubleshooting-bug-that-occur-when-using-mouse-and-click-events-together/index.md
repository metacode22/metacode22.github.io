---
date: '2023-05-11'
title: '캐러셀에서 마우스 이벤트와 클릭 이벤트를 같이 사용할 때 발생할 수 있는 버그 해결하기'
summary: 'Carousel에서 mousedown, mouseup, click 이벤트를 사용하며 겪었던 버그와 해결 방법을 기록해보았습니다.'
thumbnail: './mouse.png'
categories: ['Featured', '버그 해결']
---

## 개요

<div style='display: flex; justify-content: center;'>
  <video src='./bug-that-occur-when-using-mouse-and-click-events-together-in-carousel.mp4' width='50%' controls>
  </video>
</div>

모 기업의 과제를 수행하면서 [Swiper](https://swiperjs.com/demos#default)처럼 Carousel을 직접 구현해야 하는 상황이 생겼었다. Carousel은 [유튜브 동영상](https://www.youtube.com/watch?v=V0dfhBc2lj8)을 보면서 어느 정도 커스텀을 거쳐 완성시킬 수 있었다.

문제는 Carousel 안의 카드를 클릭 시 그 카드가 실제로 위치한 곳으로 이동시켜야 하는 요구사항에서 발생했다. 이로 인해 Carousel의 카드를 넘기기 위해 심은 mousedown, mousemove, mouseup 이벤트와 함께 click 이벤트가 카드에 심어졌다. 이로 인해 PC 환경에서 버그가 발생했다. 카드를 넘기기 위해 드래그를 하면, 카드를 넘기는 것 뿐만 아니라 카드 위치로 화면이 이동하는 기능까지 같이 동작하는 것이었다.

## 원인

원인은 PC 환경에서 [사용자가 단순 클릭을 하더라도 mousedown - mouseup - click 순서로 이벤트가 호출](https://ko.javascript.info/mouse-events-basics#ref-721)되기 때문이었다.

> 모바일 환경에서는 드래그와 함께 click 이벤트가 발생하는 버그가 발생하지 않는다. 모바일에서는 드래그 시 touchstart - touchmove - touchend 순서로 이벤트가 호출될 뿐 click 이벤트는 호출되지 않았고, 진짜 손가락으로 단순 클릭만 할 때 click 이벤트가 발생했다.

## 시도

사실 원인이 무엇인지 파악하기조차 처음엔 어려웠다. 과제 제출까지 5시간 남았기도 했고, 새벽 4시 쯤이어서 정신이 온전치 못했다. 그래도 일단 직감적으로 시도한 것이 `event.stopPropagation()`으로 이벤트 버블링을 막는 것이었다. 하지만 mousedown - mouseup - click으로 이벤트가 호출되는 것은 이벤트 버블링 때문이 아니고 원래 그렇게 만들어진 것이다. 그래서 `event.stopPropagation`으로는 막을 수 없었다. 이후 새로운 상태를 선언해서 해볼까 했지만 뚜렷하고 자세한 구현 방법이 떠오르지 않았던 만큼 제대로 된 해결이 아닐 것이란 걸 직감해서 시도하지 못하고 결국 과제를 제출하게 되었다.

## 해결

그렇게 제출을 하고 나서 시간이 지나 이 문제를 해결하고 싶어졌다. 여러 가지 키워드로 구글링 하던 중, `mousedown click`으로 검색하니 [동일 요소의 클릭이벤트, 마우스이벤트 이슈라는 제목의 글을 발견](https://sangmin802.github.io/Study/Think/mouse%20and%20click%20issue/)할 수 있었다.

원인은 위에서 설명한 바와 같았고, 해결 방안이 나에겐 신선하고 새로웠다. 결론은 `setTimeout`을 사용하는 것이었다. 이 문제 해결에 있어 핵심은 click 이벤트가 발생할 때 이전 동작이 드래그 중이었는지, 아니면 단순 클릭인지를 판단하는 것인데 setTimeout을 이용해 간단하게 해결할 수 있다.

해결 과정을 알아보기에 앞서 마우스 이벤트 호출 순서를 정리해보자.

- 드래그 시: mousedown - mousemove - mouseup - click
- 단순 클릭 시 : mousedown - mouseup - click

두 동작에 있어 차이점은 mousemove이다. 이 mousemove를 통해 드래그 중이었는지 혹은 단순 클릭이었는지 판단할 수 있다고 생각했다. mousemove가 발생했으면 이 때 isDragging이라는 flag를 true로 바꾸고 이를 통해 click에서 드래그 중이었는지 단순 클릭이었는지 판단하는 것이다. 하지만 로직을 생각해보면 mouseup에서 isDragging을 false로 바꿔야 하는데 그러면 결국 click에서 isDragging이 무조건 false이기 때문에 소용 없는 것이 아니냐?라는 의문이 들 수 있다. 이 때 사용해야 할 것이 `setTimeout`이다.

> mousemove가 발생했다면(즉 드래그라면) 그냥 click에서 드래그로 간주해 카드로 화면을 이동시키는 기능을 막고, mousemove가 발생하지 않았다면(즉 단순 클릭이라면) isDragging은 false이니 click에서 단순 클릭으로 간주해 카드로 화면을 이동시키는 기능을 동작시키면 되지 않냐라는 의문이 들 수 있다. 나도 그런 의문이 들어 그렇게 해보았다. 하지만 이 때 간과한 것은 모바일 환경이었다. 모바일 환경에서는 드래그 시 touchstart - touchmove - touchend로 끝날 뿐, 마우스 이벤트처럼 마지막에 click 이벤트를 발생시키지 않는다. 모바일 환경에서는 단순 클릭 시에만 click 이벤트가 발생한다. 이로 인해 유저가 <strong>드래그 후 조금 있다가 카드를 클릭한다면</strong> 드래그로 인해 isDragging이 true로 바뀌는 반면, click으로 인해 isDragging이 false로 바뀌지 않아, 정작 클릭할 때에는 isDragging이 true라서 화면을 카드로 이동시키는 로직을 발생시킬 수 없다.

> 그리고 참고로 isDragging이라는 flag에 따라 컴포넌트가 다시 렌더링 될 필요는 없으니 useState가 아니라 useRef로 선언했다.

setTimeout의 콜백 함수는 Web APIs에 들어가 동작을 완료하고 나서 call stack이 빌 때까지 task queue에 남아있다는 점을 이용하는 것이다. mousemove에서 setTimeout 없이 isDragging을 true로 바꾸고, mouseup에서 isDragging을 false로 바꾸면, click에서는 드래그 시 mousemove에 의해 isDragging가 true이니 드래그 임을 감지할 것이고, 단순 클릭 시에는 mousemove가 발생하지 않았으니 isDragging이 false임으로 단순 클릭임을 판단할 수 있다. 그리고 둘 다 mouseup에 심어둔 setTimeout에 의해 isDragging은 false가 될 것이다. setTimeout의 콜백 함수가 곧바로 실행되지 않고 비동기로 동작함을 활용하는 것이다.

> 여기서 착각하면 안되는 것이 setState도 비동기로 동작하지 않냐는 것이다. React에서는 setState를 이벤트 핸들러 단위로 모아서 한 번에 실행할 뿐(batch) 비동기로 동작시키는 것이 아니다. 따라서 setTimeout처럼 task queue에 들어가 setTimeout보다 늦게 호출되고 그럴 일은 없다는 것이다.

### 코드

코드로 보면 대략 다음과 같다. onTouchStart는 onMouseDown, onTouchMove는 onMouseMove, onTouchEnd는 onMouseEnd에도 사용되었다.

```typescript
const onTouchStart = (
  event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
) => {
  ...
};

const onTouchMove = (event: TouchEvent | MouseEvent) => {
  isDraggingRef.current = true;

  ...
};

const onTouchEnd = () => {
  if (isDraggingRef.current)
    setTimeout(() => {
      isDraggingRef.current = false;
    })
  ...
};
```

> delay 시간을 0으로 설정해도(2번 째 인자인 delay 시간을 따로 설정하지 않으면 기본값으로 0이 들어간다) 바로 실행되는 것이 아니라 Web APIs로 들어간다는 것을 유의하자. setTimeout은 timer가 종료되고 나서 task queue에 들어가 call stack이 빌 때까지 기다린다. call stack이 비어야 비로소 task queue에서 기다리는 setTimeout의 콜백 함수가 call stack으로 들어가 실행될 수 있다.

### 정리

그리고 로직을 정리하자면 다음과 같다.

- 드래그 시

  1. mousedown(isDragging = false)
  2. mousemove(isDragging = true) - isDragging를 true로 바꾼다.
  3. mouseup(isDragging = true) - setTimeout을 통해 isDragging을 false로 만드는 코드를 심어둔다. 아직 isDragging은 false가 아니다.
  4. click(isDragging = true) - isDragging이 true임을 감지하고 화면을 카드 위치로 이동시키는 코드를 실행시키지 않는다.
  5. 콜 스택의 함수가 다 실행되어 비게 되면 setTimeout의 콜백 함수가 task queue에서 콜 스택으로 들어가 실행되며 isDragging은 false가 된다.(isDragging = false)

- 단순 클릭 시
  1. mousedown(isDragging = false)
  2. mouseup(isDragging = false) - setTimeout을 통해 isDragging false로 만드는 코드를 심어둔다. 아직 isDragging은 false가 아니다.
  3. click(isDragging = false) - isDragging이 false임을 감지하고 화면을 카드 위치로 이동시키는 코드를 실행한다.
  4. 콜 스택이 빈다.(isDragging = false)
  5. 콜 스택의 함수가 다 실행되어 비게 되면 setTimeout의 콜백 함수가 task queue에서 콜 스택으로 들어가 실행되며 isDragging은 false가 된다.(isDragging = false)

## 느낀 점

이벤트 루프의 동작 과정을 이해만 하고 있었는데 여기서 이렇게 실제로 써보게 될 줄 몰랐다. 자바스크립트와 브라우저의 개념에 대해 왜 알아야 하는지 체감하게 되었다.

## 참고

[Swiper](https://swiperjs.com/demos#default)

[Carousel 직접 구현하기](https://www.youtube.com/watch?v=V0dfhBc2lj8)

[마우스 이벤트 호출 순서](https://ko.javascript.info/mouse-events-basics#ref-721)

[동일 요소의 클릭이벤트, 마우스이벤트 이슈](https://sangmin802.github.io/Study/Think/mouse%20and%20click%20issue/)
