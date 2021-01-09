---
title: 🧚 How to write React Code
date: 2021-01-03
update: 2021-01-08
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

## 📍 How to write React Code

### 1. Arrow functions

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

### 2. Less brackets

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

### 3. Automatic return

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

### 4. Destructure props

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

### 5. React fragments

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

### 6. handle undefined

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

### 7. Destructure arrays

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

### 8. Pass all props

props를 spread연산자`...`를 사용해서 모두 가져와서  
옵셔널 체이닝 `?.` 으로 확인해서 출력하는 방법도 있고

```js
const App = props => (
  <div {...props}>{props?.name}</div>
);
```

전달받을 인자 props를 미리 적어두고  
나머지 `...rest`로 모든 파라미터를 가져와서  
인자를 출력하는 방법도 있음

```js
const App = ({ name, ...rest } => (
  <div {...rest}>{name}</div>
));
```

***

## 📍 With Hooks

### 1. useEffect

componentDidMount와 비슷하며  
라이프사이클 작업 가능한 useEffect를 사용

```js
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // do somthing
  },[])
  return <div>Something</div>
}
```

### 2. useState

useState를 사용하여 상태 기능을 설정  

```js
import { useState } from 'react';

const OpenButton = () => {
  const [open, setOpen] => useState(false);

  return (
    <button onClick={() => setOpen(!open)}>
      {open ? "Open" : "Closed"}
    </button>
  )
}
```

### 3. useSelector (react-redux)

username을 바로 맵핑하지 않고 리덕스 스토어에서 가져옴

```js
import { useSelector } from 'react-redux';

const UserLabel = () => {
  const { username } = useSelector(state => state.auth);
  return <label>{username}</label>
}
```

### 4. useDispatch (react-redux)

props에 바로 맵핑하지 않고 중복 작업을 useDispatch로 전달

```js
import { useDispatch } from 'react-redux';

const ReduxButton = ({ action }) => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(action())}>
     Click Me
    </button>
  );
}
```

### 5. useHistory (react-router-dom)

useHistory로 간단한 경로 변경

```js
import { useHistory } from 'react-router-dom';

const HomeButton = () => {
  const history = useHistory();

  return (
    <button onClick={() => history.push("/home")}>
     Go home
    </button>
  );
}
```

### 6. useLocation (react-router-dom)

useLocation으로 URL 경로를 확인

```js
import { useLocation } from 'react-router-dom';
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

### 7. useParams (react-router-dom)

useParams로 URL 파라미터를 전달

```js
import { useParams } from 'react-router-dom';
const App = () => {
  const { slug } = useParams();

  return <h3>post {slug}</h3>
}
```

### 8. useStyledTheme (custom hook with useContext)

React 컴포넌트 내의 theme 관련 변수 활용을 위해 생성된 custom hook  
(Chart를 스타일링하거나 3rd-party 라이브러리를 활용할 때 유용) 

```js
import { useContext } from 'react';
import { ThemeContext } from 'style-componets';

export default function useStyledTheme() {
  const theme = useContent(ThemeContext);
  return theme || {};
}
```

***

## 📍 Event handlers

### 1. onClick

Element가 클릭되었을 때 실행됨  
주로 form 태그 내에 있는 button 태그에 적용되어 UI 관련 액션을 실행함

```js
const Button = () => (
  <button onClick={() => console.log("onClick")}>
    Click Me
  </button>
)
```

### 2. onChange

form element의 값이 바뀌었을 때 실행됨  
주로 input box와 form의 상태를 관리하기 위한 form control에 사용됨

```js
import { useState } from 'react';

const Textbox = () => {
  const [value, setValue] = useState("");
  return (
    <input
      type="text"
      onChange={(e) => setValue(e.target.value)}
    />
  )
};
```

### 3. onFocus

Element가 focus 상태가 되었을 때 실행됨  
종종 CSS class를 활용하지 않고 UI를 조작하고자할 때 유용하게 활용할 수 있음

```js
import { useState } from "react";

const Search = () => {
  const [focus, setFocus] = useState(false);
  return (
    <input
      type="text"
      style={{borderColor: focus ? "red" : "blue" }}
      onFocus={(e) => setFocus(true)}
    />
  )
};
```

### 4. onBlur

Element가 focus 상태에서 벗어났을 때 실행됨  
onFocus와 함께 사용됨 (기본적으로 반대에 해당)

```js
import { useState } from 'react';

const Search = () => {
  const [focus, setFocus] = useState(false);
  return (
    <input
      type="text"
      style={{ borderColor: focus ? "red" : "blue" }}
      onBlur={(e) => setFocus(false)}
    />
  )
};
```

### 5. onSroll

Element가 스크롤되었을 때 overflow가 실행됨  
사용자가 스크롤 다운 시에만 UI를 통해 무언가를 보여주고자할 때 유용함

```js
import { useState } from 'react';

const Page = () => {
  const [scrolled, setScrolled] = useState(true);
  return (
    <>
      {scrolled && <button>Scroll up</button>}
      <div
        onScroll={(e) =>
          setScrolled(e.target.scrollTop > 0
            ? true
            : false
          )}
      />
    </>
  )
};
```

### 6. onMouseEnter

Element가 hover되었을 때 실행됨  
Javascript에서 hover 상태를 유지하고자할 때 유용함 

```js
import { useState } from 'react';

const Panel = () => {
  const [hover, setHover] = useState(flase);
  return (
    <div
      style={{ background: hover ? "red" : "blue" }}
      onMouseEnter={() => setHover(true)}
    >
  )
};
```

### 7. onMouseLeave

마우스 hover 상태가 끝나면 실행됨  
기본적으로 onMouseEnter의 반대이며  
인라인 스타일을 토글(on/off)할 수 있을 뿐만 아니라 더 다양한 효과를 부여할 수 있음

```js
import { useState } from 'react';

const Panel = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      style={{ background: hover ? "red" : "blue" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
  )
};
```

### 8. onSubmit

form이 submit 되었을 때 실행됨  
preventDefault()를 사용하면 페이지가 다시 로드되지 않음

```js
const Form = () => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <button type="submit">
        Submit
      </button>
    </form>
  )
};
```

***

## 참고자료

- [옵셔널 체이닝](https://ko.javascript.info/optional-chaining)

- [React.Fragment](https://reactjs-kr.firebaseapp.com/docs/fragments.html)

- [자바스크립트 rest, spread 문법과 destructuring](https://velog.io/@ashnamuh/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-rest-spread-%EB%AC%B8%EB%B2%95%EA%B3%BC-destructuring)


