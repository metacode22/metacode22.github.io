---
date: '2023-05-02'
title: '[React 공식 문서 타파하기] JavaScript in JSX with Curly Braces'
summary: '새로운 React 공식 문서를 학습하며 새로 얻은 지식과 깨달은 것들을 기록으로 남기고자 합니다.'
thumbnail: './react-logo.png'
categories: ['React']
---

> <strong>- 주의 -</strong> <br /> 정리하면서 저의 생각도 많이 넣는 편입니다. <br /> 혹시나 제 글을 읽으실 때 아리송한 부분이 생기신다면 해당하는 공식 문서를 꼭 참고하시길 바랍니다. <br /> 또한, 저에게 익숙한 내용들은 생략하고 정리합니다.

JSX는 자바스크립트 파일에서 HTML스러운 마크업을 작성할 수 있도록 해주고 같은 공간, 즉 같은 파일 내에서 자바스크립트 로직이 존재하도록 해준다. 가끔 이렇게 자바스크립트 로직이나 동적으로 변하는 데이터에 대한 참조를 컴포넌트 내에 작성하고 싶을 수 있다. 이는 JSX문 안에 작성하는 중괄호를 통해 구현할 수 있다.

## Passing strings with quotes

문자열을 JSX안의 태그들의 속성에 전달하고 싶으면 원래 HTML에서 해왔듯이 작은 따옴표 혹은 큰 따옴표를 사용하면 된다.

```tsx
export default function Avatar() {
  return (
    <img
      className='avatar'
      src='https://i.imgur.com/7vQD0fPs.jpg'
      alt='Gregorio Y. Zara'
    />
  );
}
```

하지만 src나 alt에 동적인 데이터를 넣고 싶으면 어떻게 해야 할까? 이는 자바스크립트 코드와 중괄호 {}를 이용하면 된다.

```tsx
export default function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return <img className='avatar' src={avatar} alt={description} />;
}
```

## Using “double curlies”: CSS and other objects in JSX

JSX에는 string과 number 뿐만 아니라 object도 전달할 수 있다. 그 대표적인 예시가 inline style을 작성할 때, 즉 style 속성에 object를 전달할 때이다. 여기서 알 수 있는 점은 {{ }}가 특별한 문법이 아니라 JSX에 {}로 자바스크립트 코드를 전달할 때 단지 object를 전달한다는 것이다.

```tsx
export default function TodoList() {
  return (
    <ul
      style={{
        backgroundColor: 'black',
        color: 'pink',
      }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
```

주의할 점은 style의 속성 또한 camelCase로 작성해야 한다는 것이다.

또다른 예시는 다음과 같이 응용하는 것이다.

```tsx
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink',
  },
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className='avatar'
        src='https://i.imgur.com/7vQD0fPs.jpg'
        alt='Gregorio Y. Zara'
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
```

## 참고

[JavaScript in JSX with Curly Braces](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
