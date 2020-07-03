import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import About from './routes/About';
import Home from './routes/Home';

function App() {
    return <HashRouter>
        {/* path='/url경로' component= {가져올 컴포넌트} */}
        <Route path='/' exact={true} component={Home}/>
        {/*  exact={true} 의 역할:   */}
            {/*  오직 해당 path 에서만 해당 컴포넌트를 불러오겠다   */}
            {/*  exact={true}를 빼면, path='/about' component={About} 에서  */}
            {/*  path '/'으로 {Home}과 + 'about'으로 {About}이 함께 불러와진다.   */}

        <Route path='/about' component={About} />

    </HashRouter>

}

export default App;