import React from 'react';

class App extends React.Component{
    state = {
        isLoading : true
    };

    // render() 호출 후 가장먼저 호출되는 메소드
    componentDidMount() {
        setTimeout(() => {
            this.setState( {isLoading: false});
            }, 6000);
    }

    render(){
        const {isLoading} = this.state;
        return <div>{ isLoading ? "Loading..." : "Im Ready!"}</div>
     }

}
export default App;
