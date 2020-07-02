import React from 'react';


class App extends React.Component{
    // state라는 오브젝트는 컴포넌트의 동적 데이터를 넣을 공간을 갖고있다.
        // 데이터가 동적으로 변하기 때문에 state가 필요한 것.
    state = {
        cnt : 0
    }
    add = () => {console.log('add')};
    minus = () => {console.log('minus')};
     render(){
         return(
         <div>
             <h1>Its a class component - { this.state.cnt } ! </h1>
             <button onClick={this.add}>Add</button>
             <button onClick={this.minus}>Minus</button>
         </div>
             )
     }
}
// Function App 컴포넌트는 function 이고, 어떤것을 return하여 스크린에 뿌려진다.
// Class App 컴포넌트는 class지만 React.Component로부터 확장되고, 스크린에 뿌려진다.
    // React는 모든 class 컴포넌트의 render 메소드를 자동으로 실행한다.
    // Class App 컴포넌트는 지금부터 알아볼 state 라는 object를 갖고있다.

export default App;
