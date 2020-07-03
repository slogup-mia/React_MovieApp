import React from "react";

// 모든 컴포넌트에는 props가 있다.
    // function About() { 로 props를 보내지 않아도
    // 리액트 컴포넌트는 디폴트 props를 포함하므로 우리는 이를 활용할 수 있다.
    // 아래와 같이 기본 props를 콘솔에서 확인해보자
        // 추가로, Navigation.js (Navi 버튼으로 들어온 경우의) 에서 보낸 props에
        // state : fromNavigation 이 잘 들어왔는지도 확인 해 보자.
function About(props) {
    console.log(props)
    return <span> Helol</span>

}

export default About