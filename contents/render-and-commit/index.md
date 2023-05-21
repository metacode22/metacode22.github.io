---
date: '2023-05-21'
title: '[React 공식 문서 타파하기] Render and Commit'
summary: 'React가 어떻게 컴포넌트들을 화면에 그리게 되는지 그 과정을 알아봅니다.'
thumbnail: './react-logo.png'
categories: ['React']
---

> <strong>- 주의 -</strong> <br /> 정리하면서 저의 생각도 많이 넣는 편입니다. <br /> 혹시나 제 글을 읽으실 때 아리송한 부분이 생기신다면 해당하는 공식 문서를 꼭 참고하시길 바랍니다. <br /> 또한, 저에게 익숙한 내용들은 생략하고 정리합니다.

우리가 작성한 컴포넌트가 화면에 나타나기 이전에 React로부터 render되어야 한다. React에서 말하는 이 render라는 것이 무엇일까? 컴포넌트가 render되고 화면에 나타나는 과정을 이해하게 되면 우리가 작성한 코드가 어떻게 동작하는지 생각하는 데에 도움이 된다.

## Step 1: Trigger a render

컴포넌트가 render되는 데에는 2가지 이유가 있다.

1. 초기 렌더링
2. 본인 컴포넌트 혹은 부모 컴포넌트의 state가 변경되었을 때

### Initial render

우리가 만든 애플리케이션을 작동시킬 때 초기 렌더링을 발생시킬 필요가 있다. 프레임워크들은 종종 이를 숨기곤 한다. React에서는 애플리케이션의 초기 렌더링을 위해 root DOM Node가 필요하다. 이에 `createRoot` 가 사용되고 반환된 root값의 render를 실행시킴으로써 초기 렌더링을 발생시킨다.

```tsx
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

컴포넌트가 초기에 한 번 렌더링 되고 나서 추가적인 렌더링은 useState로부터 반환 받은 `set` function을 통해 트리거시킬 수 있다. state를 업데이트시키는 것은 자동적으로 batch된다.(이벤트 핸들러의 같은 블록에 작성된 setState들의 경우, 각각 실행되는 것이 아니라 한 번에 실행되는 것을 말한다)

## Step 2: React renders your components

render를 트리거하고 나서는 화면에 어떤 것이 표시되면 될지 알아내기 위해 React는 우리가 작성한 컴포넌트들을 호출한다. 즉 rendering은 React가 컴포넌트 함수를 호출하는 것을 말한다.

- 초기 렌더링시에는 React가 root 컴포넌트를 호출한다.
- 이후에 render가 될 때에는, state가 변경되어 render를 트리거한 컴포넌트들이 호출될 때이다.

좀 헷갈릴 수 있지만 render는 컴포넌트 함수를 호출, 즉 실행하는 경우를 말한다.

이 render 과정은 재귀적이다. state가 변경되어 호출된 컴포넌트가 또 다른 컴포넌트를 반환한다면 그 컴포넌트도 다시 호출되고, 이 컴포넌트가 또 다른 컴포넌트를 반환한다면 그 컴포넌트가 호출될 것이다. 즉 이렇게 컴포넌트를 반환하지 않을 때까지 계속해서 반환된 컴포넌트를 호출한다. 이렇게 재귀적으로 호출시킴으로써 연결되어 있는 컴포넌트들을 화면에 나타낼 수 있다.

주의할 점은 rendering, 즉 컴포넌트 함수 호출은 순수한 계산을 수행해야 한다는 것이다.

- 매번 입력값이 같으면 컴포넌트 함수는 매번 같은 출력값을 반환해야 한다. 즉 state, props 등 입력값이 동일하면 컴포넌트 함수는 동일한 JSX문을 반환해야 한다.
- 오직 자신의 관심사만 생각해야 한다. 컴포넌트 함수가 호출되면 rendering 이전에 생성된 객체 값이나 변수들을 변경시키면 안된다.

## Step 3: React commits changes to the DOM

컴포넌트 함수들을 호출하고 나면 React는 DOM을 수정한다.

- 초기 렌더링 시에는 `appendChild` 라는 브라우저에 내장된 DOM API를 사용해, 초기 화면에 표시해야 할 모든 DOM Node들을 생성한다.
- 재렌더링시에는 가장 최근의 rendering 출력값에 매칭되는 DOM(즉 가장 최신으로 화면에 표시되어야 할 DOM)을 만들기 위해 최소한으로 필요한 계산 과정을 수행한다. 이 과정은 rendering 때 계산된다.

React는 오로지 rendering 간에 차이점이 생긴 DOM Node들만 변경시킨다. 다음 예시를 보자.

```tsx
export default function Clock({ time }) {
  return (
    <>
      <h1>{time}</h1>
      <input />
    </>
  );
}
```

time을 prop으로 받고 있고 input 태그가 있다. 단순히 생각해보면, time은 prop으로 받기 때문에 time이 변경되면 Clock 컴포넌트는 재렌더링 되어 우리가 타이핑한 input의 value는 계속해서 초기화될 것이다. 하지만 그렇지 않다. Clock이 반환하는 input 태그는 변경되지 않았기 때문에, 매번 재렌더링 될 때 React는 이 input 태그를 건드리지 않는다.

## Epilogue: Browser paint

React가 모든 컴포넌트 함수들을 render, 즉 호출하고 나서 React가 commit 과정을 통해 DOM까지 변경시키면 비로소 브라우저가 스크린을 다시 그린다. 이 브라우저가 스크린을 그리는 과정을 보통 `Browser Rendering`이라고 칭하곤 하지만, 해당 공식 문서에서는 Rendering을 컴포넌트 함수들을 재귀적으로 호출하는 동작을 일컫기 때문에 `Browser Paint`라고 했다.

## 새롭게 알게 된 점

- 처음엔 React가 컴포넌트들을 화면에 그리는 것을 render로 알고 있었다. 하지만 React가 화면에 컴포넌트들을 그리는 과정 중 하나의 step이 render이다. state가 변경되어 render가 trigger되면, React가 컴포넌트 함수들을 재귀적으로 호출해나가는 동작을 render라고 한다.
- state 혹은 prop이 변할 때 단순 input 태그의 value가 초기화되지 않았던 이유를 이번 챕터의 step 3에서 알 수 있었다. 단순 input 태그는 변하지 않기 때문에 React가 Commit에 반영시키지 않기 때문이다.
- 이번 챕터를 통해 배운 React가 화면을 그리는 과정을 정리해보자면 다음과 같다고 생각한다.
  - 초기 렌더링
  - Trigger 단계로 초기 렌더링이나 state, prop의 변경으로 인해 render를 trigger
  - Render 단계로, render를 통해 컴포넌트 함수들을 재귀적으로 호출
  - commit 단계로, render에서 계산된 가장 최신으로 보여야할 DOM(이걸 Virtual DOM보다는 스냅샷이라고 칭해야 하지 않나 싶다)을 바탕으로 실제 DOM과 비교를 하여 가장 최소한으로 변경되어야 할 실제 DOM의 부분만 변경
  - 마지막으로 변경된 실제 DOM을 바탕으로 브라우저가 Layout, Paint, Composite 단계를 거치며 화면을 재구성한다.

## 참고

[Render and Commit](https://react.dev/learn/render-and-commit)
