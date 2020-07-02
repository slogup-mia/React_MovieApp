import React from 'react';


class App extends React.Component{
    // state라는 오브젝트는 컴포넌트의 동적 데이터를 넣을 공간을 갖고있다.
        // 데이터가 동적으로 변하기 때문에 state가 필요한 것.
    state = {
        cnt : 0
    }
    add = () => {
        console.log('add')
        this.setState({cnt: this.state.cnt-1})
    //    기존의 state를 새로운 state로 오버로딩하기
        // setState로 화면에 다시 뿌리기와 같다.
    };
    minus = () => {
        console.log('minus')
        // this.setState({cnt: this.state.cnt+1})
        // this.state.cnt 로 불러오는건 사실 성능상 좋은 방법은 아니다.
        this.setState(current => ({cnt : current.cnt +1 }));
        // 위와 같이 this.state 를 current로 불러올 수 있다.
            // 이 방법은 state를 set 할 때, react에서 외부의 상태에 의존하지 않는 가장 좋은 방법이다.
    };
    // minus = () => { this.state.count = -1 };
        // 위처럼 add, minus function 으로 state의 cnt 값을 직접 바꾸어도
        // 아래 render()는 새로고침되지 않는다.
        // 그리고 콘솔에 warning 이 뜬다 : Do not mutate state directly. Use setState()

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

// 정리 :
    // 우리가 "set.State를 호출하는 순간마다" 리액트는 "새로운 state"와 함께 "render 함수를 호출"한다.
    // 리액트는 리랜더한다!!
