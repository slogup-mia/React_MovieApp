import React from 'react';


// React.Component 는 render() 외에도 여러 메소드를 갖는다.
    // 그 중 이번에 알아 볼 것은 life cycle method
    // : 리액트가 컴포넌트를 생성/없애는 방법
    // : 리액트가 컴포넌트를 생성/없애기 전/후로 실행되는 메소드들의 집합을 말하는건가?
    // 모든 life cycle method 메소드를 알 필요는 없다. 아래 나열된 것들이 볼 만한 것.
        // Mounting, Updating, Unmounting
        // 공식문서로 확인하기 https://ko.reactjs.org/docs/react-component.html

class App extends React.Component{
    state = {
        cnt : 0
    }
    add = () => {
        this.setState({cnt: this.state.cnt-1})
    };
    minus = () => {
        this.setState(current => ({cnt : current.cnt +1 }));
    };

    // 콘솔을 통해 life cycle 메소드들이 각각 호출되는 시점을 보자
    componentDidMount() {
        console.log("component rendered")
    }
    componentDidUpdate() {
        console.log("I just updated")
    }

    render(){
         console.log('render!')
         return(
         <div>
             <h1>Its a class component - { this.state.cnt } ! </h1>
             <button onClick={this.add}>Add</button>
             <button onClick={this.minus}>Minus</button>
         </div>
             )
     }
}
export default App;
