import React from 'react';

function Potato(){
    return <h2>I like Potato</h2>
}

// case 1. props
function Food(props){
    console.log(props) // > {name: "kimchi"}
    console.log(props.name) // > kimchi
    return <h3> What Food? </h3>
}
// case 2.  {props의 속성(이름)}
function Color({name}){
    return <h4>Beautiful {name} </h4>
}

// case 3.  props.속성
function PropTest(props){
    return <h4>{props.favo}</h4> // cake
}

function App() {
  return (
    <div className="App">
        <h1>Hello!</h1>

        <Potato/>

        <Food name ='kimchi' />
        {/*props가 name인 Food가 불린다.*/}

        <Color name = 'Black' />
        <Color name = 'Blue' />
        <Color name = 'Yellow' />
        <Color name = 'Green' />

        <PropTest
            favo = 'cake'
            sth={true}
            bla={['hello',1,2,3,true]} />
        {/* 여러 props를 정의하여 Food를 부를수도 있다. */}
    </div>
  );
}
// jsx에서는 컴포넌트에서 정보를 보낼 수 있다.
// 리액트의 장점 하나 : 컴포넌트를 만들고, 무한 재사용할 수 있다는 것
export default App;
