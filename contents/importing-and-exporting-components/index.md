---
date: '2023-04-30'
title: '[React 공식 문서 타파하기] Importing and Exporting Components'
summary: 'React에서 어떻게 여러 파일에 컴포넌트를 작성하고, 이를 사용할 수 있는지 알아봅니다.'
thumbnail: './react-logo.png'
categories: ['React']
---

> <strong>- 주의 -</strong> <br /> 정리하면서 저의 생각도 많이 넣는 편입니다. <br /> 혹시나 제 글을 읽으실 때 아리송한 부분이 생기신다면 해당하는 공식 문서를 꼭 참고하시길 바랍니다. <br /> 또한, 저에게 익숙한 내용들은 생략하고 정리합니다.

한 파일 내에서 컴포넌트들을 선언해서 사용할 수도 있겠지만, 프로젝트 크기가 커질 수록 이해하기 어려워진다. 이럴 때 필요한 것이 Import와 Export이다.

## Exporting and importing a component

다음 과정을 통해 컴포넌트를 export 혹은 import 할 수 있다.

### 1. 새로운 자바스크립트 혹은 타입스크립트 파일을 만들고 거기에 component를 만든다.

### 2. default 혹은 named exports 방식으로 component를 export한다.

### 3. component를 사용하고자 하는 파일에서 import한다.

default export 방식은 한 파일에서 하나만 export할 수 있다. 반면 named exports는 여러 개를 export할 수 있다. 그리고 default export와 named exports를 섞을 수도 있다.

default로 export한 컴포넌트는 다른 파일에서 다음과 같이 import 할 수 있다. import 할 때 이름이 달라져도 괜찮다. 하지만 특별한 경우를 제외하곤 이름을 다르게 하는 것은 디버깅을 어렵게 만들 수 있다. export 할 때에도 마찬가지이다. export 할 때 `export default () => {}` 이렇게 익명 함수를 export 하는 것은 바람직하지 않다.

```tsx
// export 하는 파일
export default function Button() {}

...

// import 하는 파일
import Button from './Button.js';
```

반면 named exports 방식으로 export한 컴포넌트는 다른 파일에서 다음과 같이 import 할 수 있다. 이름이 일치해야 하며 중괄호를 사용해야 한다. 따라서 named라는 말이 붙었다. 여러 개를 import 할 수 있어 export가 아니라 exports이다.

```tsx
// export 하는 파일
export function Button() {}

...

// import 하는 파일
import { Button } from './Button.js';
```

두 가지 방식을 섞는 것도 가능하다.

```tsx
// export 하는 파일
export function Profile() {}
export default function Gallery() {}

...

// import 하는 파일
import Gallery from './Gallery.js';
import { Profile } from './Gallery.js';
```

React를 사용하는 팀들에서는 혼란을 방지하기 위해 default export만 사용하거나 named exports만 사용하기도 한다. 본인 혹은 팀원들과 적절히 상의해서 한 가지만 사용하거나 섞어서 사용하면 된다.

## 참고

[Importing and Exporting Components](https://react.dev/learn/importing-and-exporting-components)
