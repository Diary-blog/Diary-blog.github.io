---
title: 🧚 How to write React Code
date: 2021-01-03
update: 2021-01-03
tags:
  - Javascript
  - Reactjs
  - Clean
  - Code
  - mystory
keywords: mystory, gatsby, blog, Javascript, Reactjs, clean, code
read: 3m 50s
cover: ./img/re1.png
---

## 1. Arrow functions

```js
function App(props) {
  return <div />;
}
```
리턴이 한줄일 시 화살표 함수를 사용해서 리턴 생략  
function으로 선언한 함수를  
const 변수(바뀔 수 없는 상수)로 선언하고 화살표 함수를 사용하여 객체를 새로 생성하여 리턴
```js
const App = (props) => <div />;
```

***

## 2. Less brackets

```js
const App = (props) => {
  return <div>{props.name}</div>;
}
```
props를 감싸는 () 삭제
```js
const App = props => {
  return <div>{props.name}</div>;
}
```

***

## 3. Automatic return

```js
const App = props => {
  return <div>{props.name}</div>;
}
```
한줄만 리턴할 시 객체에 담긴 리턴 삭제
```js
const App = props =>
  <div>{props.name}</div>;
```

***

## 4. Destructure props

```js
const App = props => (
  <div>
    <div>{props.name}</div>
    <div>{props.age}</div>
  </div>
);
```
props 구조분해할당
```js
const App = ({ name, age }) => (
  <div>
    <div>{name}</div>
    <div>{age}</div>
  </div>
);
```

***

## 5. React fragments
fragment는 DOM에 별도 노드를 추가하지않고 자식 목록을 그룹화할 수 있음
```js
const App = ({ name, age }) => (
  <div>
    <div>{name}</div>
    <div>{age}</div>
  </div>
);
```
`<div>` 를 리액트에서 사용되는 짧은 구문인 `<></>` 으로  
빈 태그처럼 보이게 작성이 가능  
  
```js
const App = ({ name, age }) => (
  <>
    <div>{name}</div>
    <div>{age}</div>
  </>
);
```
빈 태그는 map 사용 시 key 속성을 사용할땐  
`<React.Fregment>` 를 작성하는걸 추천  

```js
// Key 가 있는 Fragment
function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // Without the `key`, React will fire a key warning
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
```

***

## 6. handle undefined

```js
const App = user => (
  <>
    <div>{user && user.name}</div>
  </>
);
```
&& 앞에 자신이 있으면 옵셔널 체이닝으로 작성
```js
const App = user => (
  <>
    <div>{user?.name}</div>
  </>
);
```

***

## 7. Destructure arrays
map을 사용한 옵셔널체이닝으로 props를 직접 지정
```js
const App = user => (
  <ul>
    {items.map(item => {
      return <li>{item?.name} {item?.age}</li>
    })}
  </ul>
);
```
map을 사용한 배열 구조분해할당으로 props 전달
```js
const App = user => (
  <ul>
    {item.map(({ name, age }) =>
      <li>{name} {age}</li>
    )}
  </ul>
);
```

***

## 8. Pass all props
props를 모두 가져와서 옵셔널체이닝으로 확인해서 출력하는 방법도 있고
```js
const App = props => (
  <div {...props}>{props?.name}</div>
);
```
조금 더 간단하게  
출력 할 props를 적어두고 나머지 ...rest로 모든 파라미터를 가져와서  
인자를 출력하는 방법도 있음
```js
const App = ({ name, ...rest } => (
  <div {...rest}>{name}</div>
));
```

***

## 참고자료

- [옵셔널 체이닝](https://ko.javascript.info/optional-chaining)

- [React.Fragment](https://reactjs-kr.firebaseapp.com/docs/fragments.html)

- [자바스크립트 rest, spread 문법과 destructuring](https://velog.io/@ashnamuh/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-rest-spread-%EB%AC%B8%EB%B2%95%EA%B3%BC-destructuring)


