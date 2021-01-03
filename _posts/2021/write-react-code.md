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
함수 선언으로 리턴이 한줄일 시 화살표 함수를 사용해서 리턴 생략  
function으로 선언한 함수를  
변수선언문인 const로 변수를(바뀔 수 없는 상수) 선언하고  
화살표 함수를 사용하여 객체에 담긴 값을 리턴
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
props를 구조 분해로 인자를 전달하여 객체 할당
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
&& 앞에 자신이 있으면 옵셔널 체이닝 `?.` 으로 작성
```js
const App = user => (
  <>
    <div>{user?.name}</div>
  </>
);
```

***

## 7. Destructure arrays
map을 사용한 옵셔널체이닝`?.`으로 props를 직접 지정
```js
const App = user => (
  <ul>
    {items.map(item => {
      return <li>{item?.name} {item?.age}</li>
    })}
  </ul>
);
```
map을 사용한 props를 배열 구조분해할당으로 인자를 전달
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
props를 spread연산자`...`를 사용해서 모두 가져와서  
옵셔널 체이닝 `?.` 으로 확인해서 출력하는 방법도 있고
```js
const App = props => (
  <div {...props}>{props?.name}</div>
);
```
조금 더 간단하게  
전달받을 인자 props를 미리 적어두고  
나머지 `...rest`로 모든 파라미터를 가져와서  
인자를 출력하는 방법도 있음
```js
const App = ({ name, ...rest } => (
  <div {...rest}>{name}</div>
));
```

***

## 9. With Hooks

### useEffect
componentDidMount와 비슷하며  
라이프사이클 작업 가능한 useEffect를 사용
```js
// A cleaner way of doing lifecycle stuff similar to componentDidMount
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // do somthing only once
  },[])
  return <div>Something</div>
}
```

### useState
useState를 사용하여 기능을 설정  
```js
// A cleaner way to create a state variable with a function to set it
import { useState } from "react";

const OpenButton = () => {
  const [open, setOpen] => useState(false);

  return (
    <button onClick={() => setOpen(!open)}>
      {open ? "Open" : "Closed"}
    </button>
  )
}
```

### useSelector (react-redux)
username을 바로 맵핑하지 않고 리덕스 스토어에서 가져옴
```js
// A clean way to get stuff out of your redux store without mapping to props
import { useSelector } from "react-redux";

const UserLabel = () => {
  const { username } = useSelector(state => state.auth);
  return <label>{username}</label>
}
```

### useDispatch (react-redux)
props에 바로 맵핑하지 않고 중복 작업을 useDispatch로 전달
```js
// A clean way to dispatch redux actions without mapping to props
import { useDispatch } from "react-redux";

const ReduxButton = ({ action }) => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(action())}>
     Click Me
    </button>
  );
}
```

### useHistory (react-router-dom)
useHistory로 간단한 경로 변경
```js
// A clean way to change route programmatically
import { useHistory } from "react-router-dom";

const HomeButton = () => {
  const history = useHistory();

  return (
    <button onClick={() => history.push("/home")}>
     Go home
    </button>
  );
}
```

### useLocation (react-router-dom)
useLocation으로 URL 경로를 확인
```js
// A clean wary to check the URL path
import { useLocation } from "react-router-dom";
const App = () => {
  const location = useLocation();
  const isAuthPage = location.pathname.includes("auth");

  return (
    <nav>
      {!isAuthPage && <button>logout</button>}
    </nav>
  );
}
```

### useParams (react-router-dom)
useParams로 URL 매개변수를 전달
```js
// A super clean way to extract URL parameters
import { useParams } from "react-router-dom";
const App = () => {
  const { slug } = useParams();

  return <h3>post {slug}</h3>
}
```

### useStyledTheme (custom hook with useContext)
스타일 컴포넌트에서 제공하는 ThemeContext를 사용 할 수 있도록  
useContext를 사용하여 useStyledTheme 라는 커스텀 훅스를 만듬
```js
// I built this custom hook to allow me to use my theme variables  inside react components
// (very useful when styling charts and 3rd party libraries)
import { useContext } from 'react';
import { ThemeContext } from 'style-componets';

export default function useStyledTheme() {
  const theme = useContent(ThemeContext);
  return theme || {};
}
```

***

## 참고자료

- [옵셔널 체이닝](https://ko.javascript.info/optional-chaining)

- [React.Fragment](https://reactjs-kr.firebaseapp.com/docs/fragments.html)

- [자바스크립트 rest, spread 문법과 destructuring](https://velog.io/@ashnamuh/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-rest-spread-%EB%AC%B8%EB%B2%95%EA%B3%BC-destructuring)


