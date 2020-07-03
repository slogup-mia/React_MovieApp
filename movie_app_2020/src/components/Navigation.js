import React from "react";
import { Link } from 'react-router-dom';

function Navigation(){
    return (
        <div className="nav">
            <Link to='/'>Home</Link>
            <Link to={{
                pathname:'/about',
                state: { fromNavigation:true } }}
                > About
            </Link>
            {/* 위처럼 Link to를 object로 바꾸어 더 많은 것을 정의할 수 있다. 아래 문서 링크로 확인  */}
                {/*  https://reactrouter.com/web/api/Link/to-object  */}
                {/*  위의 경우에는 state를 포함한 obj를 /about으로 보내는 것  */}
        </div>
        )
}




export default Navigation