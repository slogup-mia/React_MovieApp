import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
//    index.html 의 id='root'에 렌더링 한다.
    // index.html은 앞으로 빈 상태로 간다.
    // 그리고 컴포넌트 소스코드에서 html을 추가하거나 제거한다.
    // 그것이 react가 빠른 이유!
    // 그것이 react가 만들어내는 Virtual DOM(Document Object Model)

);
