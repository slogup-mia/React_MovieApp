import React from "react";
import { Link } from 'react-router-dom';

function Navigation(){
    return <div>
        {/*<a href="/">HOME</a>*/}
        {/*<a href="/about">ABOUT</a>*/}
            {/*  리액트는 a 링크를 쓰지 않는다 : a href는 화면을 리다이랙트 하기 때문에 싱글 페이지에 맞지않음  */}
            {/*  그래서 import { Link } 를 사용  */}
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
    </div>
}

export default Navigation