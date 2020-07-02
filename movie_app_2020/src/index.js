import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'));

// 위는 create react app 했을 때 자동생성되는 index.js 일부코드
// 아래는 니꼬의 코드

ReactDOM.render(<App />, document.getElementById('root'));

//    index.html 의 id='root'에 렌더링 한다.
    // index.html은 앞으로 빈 상태로 간다.
    // 그리고 컴포넌트 소스코드에서 html을 추가하거나 제거한다.
    // 그것이 react가 빠른 이유!
    // 그것이 react가 만들어내는 Virtual DOM(Document Object Model)

// <App/> 은 컴포넌트가 된다.
    // 컴포넌트는 데이터를 보여주고
    // HTML을 반환하는 함수이다. => App.js function App(){return }에서 직관적으로 확인할 수 있다.
    // render( <App/>, .. 은 리액트 문법! 컴포넌트를 사용하여 HTML처럼 사용하기 위한.
    // JS와 HTML의 조합은 jsx라고 부른다 . = 리액트에서만 볼수있는(니꼬피셜) 개념

// 컴포넌트를 만드는 방법은?
    // src에 `potato.js` 생성
    // 이제 potato.js 컴포넌트로 넘어가서 확인후 돌아오자.

// 생성된 potato.js를 가져오기 위해 아래와 같이 임포트 하면?
    // import Potato from './potato';
    // ReactDOM.render(<App/><Potato/>, document.getElementById('root'));
    // 안된다!
    // 리액트 application이 하나의 컴포넌트, 바로 오직 <App/>만을 렌더링 해야 하기 때문에
    // 내가 생성한 컴포넌트는 App.js로 가서 렌더링하자.