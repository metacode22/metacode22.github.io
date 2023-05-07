---
date: '2023-05-08'
title: '[React 공식 문서 타파하기] Responding to Events'
summary: 'React에서 어떻게 JSX문에 이벤트 핸들러를 더해줄 수 있는지 알아봅니다.'
thumbnail: './react-logo.png'
categories: ['React']
---

> <strong>- 주의 -</strong> <br /> 정리하면서 저의 생각도 많이 넣는 편입니다. <br /> 혹시나 제 글을 읽으실 때 아리송한 부분이 생기신다면 해당하는 공식 문서를 꼭 참고하시길 바랍니다. <br /> 또한, 저에게 익숙한 내용들은 생략하고 정리합니다.

React에서는 JSX문에다가 이벤트 핸들러를 더할 수 있다. 이 때 이벤트 핸들러란 클릭이나 호버, 인풋에 포커스하는 등의 사용자 응답에 맞춰 트리거되는 함수이다.

## Adding event handlers

사용자가 버튼 클릭하면 간단한 메시지를 alert하려고 하는데 어떻게 구현할 수 있을까? 이 때 이벤트 핸들러를 다음 단계에 따라서 JSX문에 더해주면 된다.

1. 컴포넌트에서 handle~~이라는 함수를 선언한다.

2. 해당 함수에서 로직을 구현한다.

3. button이라는 JSX문에 onClick={handleClick}을 더한다.

```tsx
export default function Button() {
  function handleClick() {
    alert('You clicked me!');
  }

  return <button onClick={handleClick}>Click me</button>;
}
```

handleClick이라는 함수를 정의하고 이를 prop으로 button에 전달하면 된다. 이 때 handleClick이 이벤트 핸들러이다. onClick 속성에 넣어야 한다면 handleClick, onMouseEnter 속성에 넣어야 한다면 handleMouseEnter와 같이 handle이라는 prefix가 붙는 것이 일반적이다.

다음과 같이 JSX문에서 곧바로 정의해서 사용할 수 있다.

```tsx
<button onClick={function handleClick() {
  alert('You clicked me!');
}}>
```

이 때 코드를 더 간결하게 하기 위해 화살표 함수를 사용할 수 있다.

```tsx
<button onClick={() => {
  alert('You clicked me!');
}}>
```

## Passing event handlers as props

Material UI, Chakra UI 등의 디자인 시스템을 사용하고 있다면, 버튼과 같은 스타일링 코드만 가지고 있고 행동은 특정 짓지 않는 것이 일반적이다. 즉, 보통 스타일링만 설정할 수 있고 행동은 onClick에 handleClick을 따로 정의해서 넣곤 해야 한다.

## Event propagation

이벤트 핸들러는 자식 컴포넌트에서 발생한 이벤트를 catch 할 수 있다. 보통 이러한 현상을 이벤트가 트리를 타고 위로 버블 혹은 전파된다고 표현한다. 이러한 현상은 이벤트가 발생하는 곳에서 시작되며, 트리를 타고 올라간다.

다음과 같이 하면 button 클릭 시 button의 상위 태그인 div 태그의 이벤트 핸들러 또한 동작한다. 이벤트가 전파되어 div 태그 또한 거쳐가기 때문이다.

```tsx
export default function Toolbar() {
  return (
    <div
      className='Toolbar'
      onClick={() => {
        alert('You clicked on the toolbar!');
      }}>
      <button onClick={() => alert('Playing!')}>Play Movie</button>
      <button onClick={() => alert('Uploading!')}>Upload Image</button>
    </div>
  );
}
```

만약 div 태그 영역만 클릭했다면, 이벤트는 트리를 타고 위로 올라가니 button에 해당하는 이벤트 핸들러는 동작하지 않는다.

주의할 점은, React에서는 이벤트 핸들러를 붙인 JSX문의 태그에서만 동작하는 `onScroll` 을 제외하고는 다른 이벤트들은 전파된다는 점이다. 즉 onScroll의 이벤트는 전파되지 않는다.

## Stop propagation

이벤트 핸들러는 인자로 event 객체를 전달 받는다. 보통 코딩 컨벤션으로 이의 변수 이름은 e라고 설정한다. 이벤트에 대한 정보를 읽기 위해 이 event 객체를 이용할 수 있다.

이벤트 전파를 막는 데에도 이 event 객체를 이용할 수 있다. 부모 컴포넌트로 이벤트가 전파되는 것을 막으려면 `e.stopPropagation` 을 해주면 된다.

```tsx
function Button({ onClick, children }) {
  return (
    <button
      onClick={e => {
        e.stopPropagation();
        onClick();
      }}>
      {children}
    </button>
  );
}
```

## Preventing default behavior

어떤 브라우저 이벤트는 기본 동작들을 가지고 있다. 예를 들어 `form` 의 submit 이벤트는 트리거 되면 기본적으로 페이지를 reload한다. 이는 다음과 같이 `e.preventDefault()` 를 사용해서 방지할 수 있다.

```tsx
export default function Signup() {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        alert('Submitting!');
      }}>
      <input />
      <button>Send</button>
    </form>
  );
}
```

## 참고

[Responding to Events](https://react.dev/learn/responding-to-events)
