---
date: '2023-04-29'
title: '[React 공식 문서 타파하기] Describing the UI'
summary: 'React에서는 UI를 어떻게 표현하는지 간략하게 알아봅니다.'
thumbnail: './react-logo.png'
categories: ['React']
---

# Describing the UI

Describing the UI에 해당하는 챕터들이 어떤 내용들을 담고 있는지 간력하게 말해주는 아티클이다.

**React는 UI를 렌더링하기 위한 JavaScript 라이브러리이다.** 이 때 UI는 버튼이나 텍스트, 이미지와 같은 작은 단위들로부터 만들어진다. React는 이것들을 재사용 가능하고 중첩시킬 수 있는 컴포넌트를 만들 수 있게 해준다. 웹부터 모바일 앱까지 화면의 모든 것들을 컴포넌트로 쪼갤 수 있다.

## Your first Component, 첫 번째 컴포넌트

React의 컴포넌트는 화면에 뿌릴 수 있는 JavaScript 함수(JavaScript function)이다. 이 컴포넌트는 버튼처럼 아주 작을 수도 있고, 페이지를 구성하는 아주 클 수도 있다.

## Importing and exporting components

React에서 컴포넌트들을 한 파일에 모두 선언할 수 있다. 하지만 이렇게 하면 파일이 커질 수록 탐색하기 어려워진다. 이를 해결하기 위해 React에서는 어떤 한 컴포넌트를 export 할 수 있고, 이 컴포넌트가 필요한 다른 파일에서는 import를 통해 컴포넌트를 가지고 올 수 있다.

## Writing markup with JSX

React 컴포넌트는 브라우저에 렌더링되는 마크업을 포함하고 있는 JavaScript 함수이다. 이 마크업을 표현하기 위해 JSX라는 확장 문법을 사용한다. JSX는 HTML처럼 생겼지만 조금 더 제한된다. 하지만 동적인 데이터를 이 마크업에 담아 보여줄 수 있다.

## JavaScript in JSX with curly braces, 중괄호를 통해 JSX 문법 안에서 자바스크립트 코드 작성하기

그렇다면 동적인 데이터를 어떻게 보여줄 수 있을까? JSX문 안에서 중괄호 안에 작성하는 작은 로직의 자바스크립트 코드를 통해 마크업에 동적인 데이터를 넣어줄 수 있다.

```tsx
const Temp = props => {
  return (
    <div>
      <h1>{props.person.name}'s Todos</h1>
    </div>
  );
};

export default Temp;
```

## Passing props to a component

React 컴포넌트는 다른 컴포넌트들과 상호작용하기 위해 props라는 인자를 사용할 수 있다. props라는 인자는 객체가 될 수도 있고 배열, 함수, 심지어 JSX문도 가능하다.

## Conditional rendering

종종 조건문에 따라 다른 내용을 화면에 보여줄 수 있어야 한다. React에서는 이를 위해 JSX문에 if 혹은 && 연산자, ? 연산자를 통해 구현할 수 있다.

## Rendering lists

또한 종종 다수의 비슷한 컴포넌트들을 렌더링해야 할 수도 있다. ul안의 li 태그들처럼! 이럴 때 JSX문 안에서 배열의 메서드인 filter와 map을 사용하면 된다.

이 때 특이한 점은 key 속성에 unique한 value를 부여한다는 점이다. 이 key의 value로는 데이터베이스의 고유한 id 값을 넣을 수 있다. 이 key를 통해 React는 해당 컴포넌트의 위치를 추적하게 된다.

## Keeping components pure

자바스크립트에서 다음 조건을 충족할 때 종종 순수 함수라고 칭하곤 한다.

- 자신의 일에만 관심을 가진다. 즉 함수가 실행되면 함수 내에서 함수 바깥의 다른 객체나 변수들을 바꾸지 않아야 한다.
- 동일한 입력을 여러번 넣으면 출력 또한 계속 같아야 한다.

이를 통해 코드, 프로젝트가 커지더라도 당황스러운 버그들과 예상할 수 없는 동작들을 방지할 수 있다. 다음은 순수하지 않은 React 컴포넌트 예시이다.

```tsx
let guest = 0;

const Cup = () => {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
};

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}
```

위와 같이 작성하면 나중에 guest를 다른 컴포넌트에서 참고해야 할 때 guest의 값을 예상하기 어렵다. 따라서 다음과 같이 Cup 컴포넌트는 guest를 변경하는 것이 아니라 그냥 props 인자로 받는 것이 좋다.

```tsx
const Cup = ({ guest }) => {
  return <h2>Tea cup for guest #{guest}</h2>;
};

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
```

## 새롭게 알게 된 점

- props로 JSX문 또한 넘길 수 있다는 건 원래 알았는데 다시 한 번 되새기게 되었다. 잘 쓰지 않은 방법이었는데 한 번 다음에 기회가 생기면 써봐야겠다.
- list를 렌더링하기 위해 filter 또한 사용할 수 있다는 걸 인지는 하고 있었는데 문서를 보면서 다시 되새기게 되었다. 이전엔 JSX문 바깥에서 filter 하고 나서 JSX문에서 map으로 렌더링 했던 것 같은데 생각해 보니 filter만 써서 가능했던 것이었다.
- 공식 문서에서 key의 value로 데이터베이스의 고유한 id를 사용해도 된다고 언급하는 걸 알게 되었다.

## 참고

[Describing the UI](https://react.dev/learn/describing-the-ui)
