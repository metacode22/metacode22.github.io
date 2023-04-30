---
date: '2023-05-01'
title: '[React 공식 문서 타파하기] Writing Markup with JSX'
summary: 'React에서 JSX는 무엇인지, 어떻게 사용해야 하는지 알아봅니다.'
thumbnail: './react-logo.png'
categories: ['React']
---

> <strong>- 주의 -</strong> <br /> 정리하면서 저의 생각도 많이 넣는 편입니다. 혹시나 제 글을 읽으실 때 아리송한 부분이 생기신다면 해당하는 공식 문서를 꼭 참고하시길 바랍니다. <br /> 또한, 저에게 익숙한 내용들은 생략하고 정리합니다.

JSX는 자바스크립트 파일에서 HTML스러운 마크업을 작성할 수 있도록 해주는, 자바스크립트를 확장한 문법이다. 많은 React 개발자들이 JSX의 간결함을 선호하여 많이 사용하고 있다.

## JSX: Putting markup into JavaScript, 자바스크립트에 마크업 넣기

많은 시간동안 HTML과 자바스크립트 코드를 다른 파일로 분리하여 사용했다. 하지만 점점 시간이 흐를수록 웹은 더 많은 상호작용을 요구하고, 로직에 따라 컨텐츠가 변경되는 일이 잦아졌다. 이것이 React가 렌더링하는 로직과 마크업을 컴포넌트라는 공간에 같이 넣는 이유이다.

이렇게 한 공간에 둠으로써 로직이 변경되면 마크업도 변경되도록 동기화시킬 수 있다. 동시에 관련 없는 다른 컴포넌트의 마크업은 따로 분리되어 있으니 변경되지 않는다. 즉 자신의 로직이 변경될 때 자신의 마크업만 변경되고 다른 컴포넌트의 마크업은 건드리지 않는다. 이렇게 됨으로써 더욱 코드가 안전해질 수 있다.

이러한 JSX는 HTML과 유사하게 생겼지만 조금 더 제한적이면서도 동적인 데이터를 보여줄 수 있다.

## The Rules of JSX

JSX문을 작성할 때 알아야 할 몇 가지 규칙을 알아보자.

### 1. Return a single root element

컴포넌트에서 여러 요소를 반환하려면 하나의 부모 태그로 감싸야 한다.

```tsx
// 올바르지 않은 예시
const Temp = () => {
  return (
    <h1>Im Jun</h1>
    <div>Frontend Developer</div>
  )
}

// 올바른 예시
const Temp = () => {
  return (
    <div>
      <h1>Im Jun</h1>
      <div>Frontend Developer</div>
    </div>
  );
};
```

div 대신 마땅한 태그가 없다면 Fragment로 불리는 <></> 태그를 사용하면 된다.

이렇게 감싸야 하는 이유는 하나의 자바스크립트 객체를 반환하기 위해서이다. [JSX문으로 작성해도 결국엔 React가 자바스크립트 객체로 변환한다.](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#whats-a-jsx-transform) 자바스크립트의 함수에서는 1개의 값만 반환할 수 있다. 올바르지 않은 예시처럼 작성하면 다음과 같이 될 것이다.

```tsx
const Temp = () => {
  return (
    React.createElement('h1', null, 'Im Jun'),
    React.createElement('div', null, 'Frontend Developer')
  );
};
```

React에서는 이를 하나의 배열이나 객체로 묶지 않는다. 따라서 하나로 묶기 위해 이를 포함할 수 있는 부모 태그로 감싸서 반환해줘야 한다.

### 2. Close all the tags

HTML 작성하듯이 끝나는 태그가 있어야 한다. `<img />`과 같은 셀프 클로징도 가능하다.

### 3. camelCase ~~all~~ most of tags

JSX문에서 태그의 속성으로는 보통 카멜 케이스로 작성해야 한다. 대표적으로 class가 있다. 다음과 같이 작성해야 한다.

```tsx
const Temp = () => {
  return (
    <div className='profile'>
      <h1>Im Jun</h1>
      <div>Frontend Developer</div>
    </div>
  );
};
```

이렇게 속성이 조금 변경되는 면이 있다. 하지만 data-*, aria-*와 같은 속성들은 역사적인 이유로 그대로 사용하거나 여전히 -를 사용하고 있다.

## 참고

[Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx)

[Introducing the New JSX Transform](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#whats-a-jsx-transform)
