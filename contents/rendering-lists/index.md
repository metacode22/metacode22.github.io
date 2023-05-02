---
date: '2023-05-05'
title: '[React 공식 문서 타파하기] Rendering Lists'
summary: 'React에서 비슷한 데이터를 바탕으로 비슷한 컴포넌트를 여러 개 렌더링 시켜야 할 때 어떻게 해야 하는지 살펴봅니다.'
thumbnail: './react-logo.png'
categories: ['React']
---

> <strong>- 주의 -</strong> <br /> 정리하면서 저의 생각도 많이 넣는 편입니다. <br /> 혹시나 제 글을 읽으실 때 아리송한 부분이 생기신다면 해당하는 공식 문서를 꼭 참고하시길 바랍니다. <br /> 또한, 저에게 익숙한 내용들은 생략하고 정리합니다.

데이터를 가지고 비슷한 컴포넌트들을 여러 개 보여줘야 할 때가 있다. 이럴 때 array의 데이터를 조작하는 자바스크립트 메서드를 사용할 수 있다. filter와 map을 통해 컴포넌트 형태의 array로 만들어보자.

## Rendering data from arrays

다음과 같이 array에 대해 map을 돌려 새로운 array에 컴포넌트를 담고 이를 JSX문의 중괄호에 담아 렌더링하면 된다.

```tsx
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist',
];

export default function List() {
  const listItems = people.map(person => <li>{person}</li>);
  return <ul>{listItems}</ul>;
}
```

하지만 이렇게만 하면 `Warning: Each child in a list should have a unique “key” prop.` 이라는 경고창이 뜬다. 조금 뒤에 다시 보자.

## Filtering arrays of items

array에서 원하는 데이터만 걸러서 보여주고 싶다면 다음과 같이 filter를 사용하면 된다.

```tsx
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people.filter(person => person.profession === 'chemist');
  const listItems = chemists.map(person => (
    <li>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}
```

## Keeping list items in order with key

아까 뜬 key에 대한 경고 문구는 다음과 같이 key 속성에 value를 부여함으로써 해결할 수 있다.

```tsx
<li key={person.id}>...</li>
```

이 key는 array의 요소들이 추가되거나 삭제, 정렬 되는 등의 변경이 일어날 때 중요하다. 아주 잘 선택된 key, 즉 unique한 key는 지금 어떤 일이 일어나는지 React가 잘 추론하도록 돕고 DOM tree가 올바르게 수정되도록 해준다. 이러한 key는 즉석에서 생성하기 보다는 array의 요소에 포함된 데이터를 사용하는 것이 좋다.

만약 array의 요소가 단 하나의 부모 DOM node가 아니라 여러 부모 DOM node를 반환하게 하려면 어떻게 해야 될까? 이럴 때 Fragment를 사용할 수 있는데 <></>에는 key 속성을 부여할 수 없다. 따라서 <Fragment></Fragment>라고 명시적인 태그를 사용해야 한다. 이 Framgent는 DOM에 나타나지 않는다. 따라서 다음 코드는 h1, p, h1, p와 같은 HTML을 생산해낸다.

```tsx
import { Fragment } from 'react';

// ...

const listItems = people.map(person => (
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
));
```

### Where to get your key

key는 어디로부터 가져올 수 있을까?

- Data from a database: 데이터베이스로부터 데이터를 가져온다면 unique한 id를 사용할 수 있다.
- Locally generated data: 데이터가 로컬에서 생성되고 유지된다면 증가하는 count를 사용하거나, crypto.randomUUID를 쓰거나 uuid와 같은 패키지를 사용해서 unique한 id를 부여한다.

### Rules of keys

- Keys must be unique among siblings: 형제 컴포넌트들끼리의 key 값은 고유해야 한다. 다른 array의 컴포넌트들과는 고유하지 않아도 된다.
- Keys must not change

### Why does React need keys?

만약 어떤 폴더에 있는 파일들의 이름이 없다고 생각해보자. 이름이 없는 대신 순서를 기억하고 있다고 가정하자. 이 상태에서 하나의 파일이 추가되거나 삭제되는 순간 순서는 무의미해진다. 첫 번째 파일이 두 번째가 될 수도 있고, 두 번째 파일이 첫 번째가 될 수도 있다. 이렇듯 파일 이름과 key는 유사하다. 이들은 형제들 사이에서 고유하게 존재할 수 있도록 도와준다. 잘 선택된 고유한 key는 array 요소들의 순서가 바뀌더라도 React는 생애주기 동안 컴포넌트를 효율적으로 렌더링할 수 있다.

주의할 점은 array의 index나 Math.random()를 key 값으로 쓰는 것이다. 정렬이 되거나 삭제, 삽입이 일어나면 index가 변할 수 있고 Math.random은 아예 재렌더링 시 값이 계속 달라진다. 따라서 재렌더링 시 React가 이전의 key 값과 비교해서 다르다고 판단해 비효율적인 렌더링이 일어날 수 있다. 따라서 index나 Math.random()을 key 값으로 쓰지 말아야 한다.

또한 이 key 값은 React 만을 위한 hint 같은 것이다. 따라서 prop으로 사용할 수 없으니 따로 prop을 만들어 자식 컴포넌트에게 전달해야 한다.

```tsx
<Profile key={id} userId={id} />
```

## 새롭게 알게 된 점

- React 공식 문서의 링크 참조를 따라가보면 MDN 문서가 자주 나온다. 그만큼 React 팀에서도 MDN을 자주 참고하고 있다는 것을 알게 되었다.
- uuid 대신 javascript에 내장되어 있는 crypto.randomUUID를 사용해도 된다.
- key의 값이 같은 array 상에서만 unique하면 되고 다른 array와는 unique하지 않아도 된다는 것을 처음 알게 되었다. key 값은 형제 컴포넌트들끼리만 React가 고유성을 판단하여 DOM 업데이트를 하지 않을까라는 생각을 해보았다.

## 참고

[Rendering Lists](https://react.dev/learn/rendering-lists)
