---
date: '2023-05-03'
title: '[React 공식 문서 타파하기] Passing Props to a Component'
summary: '부모 컴포넌트에서 자식 컴포넌트에게 어떻게 props를 전달할 수 있는지 알아봅니다.'
thumbnail: './react-logo.png'
categories: ['React']
---

> <strong>- 주의 -</strong> <br /> 정리하면서 저의 생각도 많이 넣는 편입니다. <br /> 혹시나 제 글을 읽으실 때 아리송한 부분이 생기신다면 해당하는 공식 문서를 꼭 참고하시길 바랍니다. <br /> 또한, 저에게 익숙한 내용들은 생략하고 정리합니다.

React의 컴포넌트는 다른 컴포넌들과 상호작용하기 위해 props를 사용한다. 모든 부모 컴포넌트는 자식 컴포넌트들에게 데이터를 전달하기 위해 props를 사용할 수 있다. 이 props로 HTML 태그의 속성 값 뿐만 아니라 객체와 배열, 함수까지 어떤 자바스크립트 값도 전달할 수 있다.

## Passing props to a component

### 1. Pass props to the child component

다음과 같이 데이터를 props로 전달한다. 마치 HTML 태그에 속성값을 부여하듯이 전달하면 된다.

```tsx
export default function Profile() {
  return (
    <Avatar person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} size={100} />
  );
}
```

### 2. Read props inside the child component

자식 컴포넌트에서 이 전달 받은 props를 읽는다. 밑의 예제에서는 destructuring이 사용되었다.

```tsx
function Avatar({ person, size }) {
  // person and size are available here
}
```

React 공식 문서의 예제를 보면 다음과 같다.

```tsx
import { getImageUrl } from './utils.js';

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2',
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma',
          imageId: 'OKS67lh',
        }}
      />
    </div>
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className='avatar'
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
```

이 때 Avatar라는 컴포넌트가 person, size라는 props를 어떻게 사용할지 Profile에서는 신경 쓸 필요가 없다. 단지 Profile은 Avatar에 어떤 값을 넘겨주고 싶은지만 결정하면 된다. 즉 props를 통해 Profile과 Avatar가 분리된다. 그리고 Avatar는 받은 이 props를 사용하는 로직은 얼마든지 변경할 수 있다. 변경해도 Profile 컴포넌트에는 영향을 끼치지 않는다.

destructuring 문법이 사용된 데에서 유추할 수 있듯이 props는 객체로 전달된다. 앞서 전달한 person과 size는 하나의 객체에 묶여서 자식 컴포넌트로 전달되고, 자식 컴포넌트에서는 단지 destructuring을 통해 person과 size를 받았을 뿐이다. 따라서 다음과 같이 사용할 수도 있다.

```tsx
function Avatar(props) {
  let person = props.person;
  let size = props.size;
  // ...
}
```

## Specifying a default value for a prop

함수에서 default value를 설정해주는 것처럼 컴포넌트의 props에도 default value를 설정해줄 수 있다.

```tsx
function Avatar({ person, size = 100 }) {
  // ...
}
```

size라는 prop을 정의하여 전달하지 않았거나, undefined를 전달했다면 size는 default value인 100으로 할당된다. 하지만 null이나 0을 전달하면 default value로 할당되지 않는다.

## Forwarding props with the JSX spread syntax

종종 다음과 같이 어떤 부모 컴포넌트로부터 props를 전달 받은 자식 컴포넌트 Profile이, 그의 자식인 Avatar에 그대로 props를 모두 전달해야 될 때가 있다.

```tsx
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className='card'>
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}
```

이럴 땐 spread 문법을 통해 props를 전달하며 코드를 간결하게 만들 수 있다.

```tsx
function Profile(props) {
  return (
    <div className='card'>
      <Avatar {...props} />
    </div>
  );
}
```

React 공식 문서에서는 이러한 spread 문법은 제한적으로 사용하라고 한다. 그 이유는 아직 와닿지 않는다.

## Passing JSX as children

JSX 안에서 컨텐츠를 중첩시키면 부모 컴포넌트는 그 중첩된 컨텐츠를 children이라는 prop으로 받게 된다.

```tsx
import Avatar from './Avatar.js';

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2',
        }}
      />
    </Card>
  );
}

function Card({ children }) {
  return <div className='card'>{children}</div>;
}
```

위와 같을 때 Card는 Avatar 컴포넌트를 children으로 받게 되는 것이다. 이렇게 하면 Card 컴포넌트에서는 card라는 className의 div 태그 안의 내용에 대해서는 신경 쓸 필요가 없어진다.

## How props change over time

props는 언제나 정적인 것이 아니다. props가 변하면 해당 컴포넌트는 재렌더링되어 전달 받은 데이터를 반영할 수 있다.

그러나 props는 immutable이다. 즉 props가 참조하고 있는 값을 변경하면 안된다. object의 key에 해당하는 value를 바꾸는 등의 행위를 하면 안된다는 것이다. 따라서 props를 직접적으로 건드려 변경된 데이터를 사용하는 것이 아니라 부모 컴포넌트로부터 아예 새로운 객체인, 새로운 메모리 공간에 할당된 props를 받아서 사용해야 한다.

따라서 props를 직접적으로 건드리려는 시도를 하면 안된다. 나중에 소개 될 state, useState 훅을 사용해야 한다.

## 새롭게 알게 된 점

- props를 직접적으로 건드리는 실험을 해봤는데 경고가 뜨는 것을 확인했다.

![immutable한 props를 변경하면 발생하는 에러](./immutable-props.png)

## 참고

[Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
