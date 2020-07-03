import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Detail from './routes/Detail';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';

function App() {
    return <HashRouter>
        <Navigation/>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/about' component={About} />
        {/*<Route path='/movie-detail' component={Detail} />*/}
        <Route path='/movie/:id' component={Detail} />
            {/* Route에서 매개변수 명명법  ':var'  */}
    </HashRouter>

}
export default App;