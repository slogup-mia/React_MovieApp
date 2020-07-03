import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Detail from './routes/Detail';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';

function App() {
    //    <HashRouter> 대체로 <BrowserRouter>를 사용해도 된다.
        // <HashRouter> 의 url은 'localhost:3000/#/' 해쉬를 포함하고
        // <BrowserRouter> 의 url은 'localhost:3000/' 해쉬를 포함하지 않는것이 차이점
    return <HashRouter>
        {/* Navigation은 링크를 담고 있는 컴포넌트인데, */}
        {/* 링크는 라우터<HashRouter> 안에 있어야 한다! */}
            {/*  링크없는 footer 같은 건 밖에있어도 됨   */}
        <Navigation/>
        {/* path='/url경로' component= {가져올 컴포넌트} */}
        <Route path='/' exact={true} component={Home}/>
        {/*  exact={true} 의 역할:   */}
            {/*  오직 해당 path 에서만 해당 컴포넌트를 불러오겠다   */}
            {/*  exact={true}를 빼면, path='/about' component={About} 에서  */}
            {/*  path '/'으로 {Home}과 + 'about'으로 {About}이 함께 불러와진다.   */}

        <Route path='/about' component={About} />
        <Route path='/movie-detail' component={Detail} />

    </HashRouter>

}

export default App;