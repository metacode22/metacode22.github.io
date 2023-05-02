---
date: '2023-05-04'
title: '[React 공식 문서 타파하기] Conditional Rendering'
summary: 'React에서 조건에 따라 어떻게 내용을 다르게 보여줄 수 있는지 알아봅니다.'
thumbnail: './react-logo.png'
categories: ['React']
---

> <strong>- 주의 -</strong> <br /> 정리하면서 저의 생각도 많이 넣는 편입니다. <br /> 혹시나 제 글을 읽으실 때 아리송한 부분이 생기신다면 해당하는 공식 문서를 꼭 참고하시길 바랍니다. <br /> 또한, 저에게 익숙한 내용들은 생략하고 정리합니다.

React 컴포넌트가 종종 조건에 따라 다른 내용을 보여줘야 할 때가 있다. React에서는 `if` , `&&` , `? :` 를 사용해 JSX를 조건에 따라 다르게 렌더링함으로써 다른 내용을 보여줄 수 있다.

## if

가장 먼저 떠오르는 방법은 if이다.

```tsx
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className='item'>{name} ✔</li>;
  }
  return <li className='item'>{name}</li>;
}
```

아무것도 렌더링하고 싶지 않다면 다음과 같이 `null` 을 사용하면 된다.

```tsx
function Item({ name, isPacked }) {
  if (isPacked) {
    return null;
  }
  return <li className='item'>{name}</li>;
}
```

하지만 null을 렌더링한다는 것은 개발자에게 혼란을 줄 수 있으니 보통 사용하는 패턴은 아니다.

## ? :

앞서 if문을 사용하면 조건 렌더링을 보면 return 문이 중복된다는 것을 알 수 있다. 여기서 만약 className이 변경 된다면 두 곳의 코드를 변경해줘야 한다. 이렇듯 DRY 원칙을 따르지 않으면 비효율적이다. 따라서 이와 같이 중복이 발생할 경우 삼항 연산자인 `? :` 를 쓰는 것을 고려해봐도 좋다.

```tsx
function Item({ name, isPacked }) {
  return <li className='item'>{isPacked ? name + ' ✔' : name}</li>;
}
```

객체 지향 프로그래밍에 기반하고 있다가 React를 처음 배운다면 if문을 사용했을 때와 삼항 연산자를 사용했을 때 두 개가 다르다고 생각할 수 있다. 다른 instances를 반환한다고 생각할 수 있기 때문이다. 하지만 JSX는 내부에서 상태를 가지고 있지 않고 진짜 DOM nodes가 아니기에 instances가 아니다. 그저 가벼운 설명일 뿐이고 청사진이다. 따라서 위의 예제에서는 두 개가 완벽히 똑같다. → 무슨 말인지 완전히 이해하지는 못했다. 이후 [Preserving and Resetting State](https://react.dev/learn/preserving-and-resetting-state)에서 자세히 설명될 예정이라고 한다.

어쨋든 이 삼항 연산자는 잘 작동하고 현재 많이 사용하는 방법이다. 하지만 조건문이 계속 중첩되어 복잡해질 수 있는데, 이럴 때 공식 문서에서는 컴포넌트로 추출하는 것을 권장하고 있다. 혹은 조건문을 함수로 추출하는 것도 권장하고 있다.

## &&

조건 렌더링을 위한 다른 방법은 `&&` 연산자를 사용하는 것이다. 조건에 따라 렌더링 되거나, 렌더링 되지 않도록 해야 할 때 사용할 수 있다.

```tsx
function Item({ name, isPacked }) {
  return (
    <li className='item'>
      {name} {isPacked && '✔'}
    </li>
  );
}
```

왼쪽 조건이 true이면 체크가 렌더링 된다. 반면 false이면 렌더링 되지 않는다. false나 null, undefined는 React가 JSX tree에서 hole로 판단하고 어느 곳에도 렌더링하지 않는다. → 여기서 말하는 hole이 정확히 무엇인지는 모르겠다.

그리고 React 공식 문서에서는 `&&` 연산자의 왼쪽 조건문에 number가 들어가는 것을 권장하지 않고 있다. 다음과 같이 작성하면 개발자는 messageCount가 0일 때 아무것도 렌더링되지 않겠구나라고 생각할 수 있다. 하지만 React에서는 0을 그대로 렌더링한다. → 이유는 자세히 모르겠다. 설명되어 있지 않다.

```tsx
// X
messageCount && <p>New messages</p>;

// O
messageCount > 0 && <p>New messages</p>;
```

따라서 boolean을 반환할 수 있도록 messageCount > 0과 같이 작성해주는 것이 좋다.

## 새롭게 알게 된 점

- React의 JSX문에서는 false, null, undefined를 렌더링하지 않는다.

```tsx
const Temp = () => {
  return <>{false}</>; // 아무것도 렌더링 되지 않는다.
};
```

- `&&` 연산자를 사용할 때 조건문에 number 그대로 넣어 0이 falsy 인 점을 이용해 조건 렌더링을 하면, 0일 때는 그대로 렌더링되니까 주의해야 한다. 따라서 조건문이 number를 반환하는 것이 아니라 boolean을 반환하도록 하는 것이 좋다.

## 참고

[Conditional Rendering](https://react.dev/learn/conditional-rendering)
