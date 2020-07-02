import React from 'react';
import axios from 'axios';

class App extends React.Component{
    state = {
        isLoading : true,
        movies : []
    };

    getMovies = async () =>{
        const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json')
    };

    // render() 호출 후 가장 먼저 호출 되는 메소드
    componentDidMount() {
        setTimeout(() => {
            this.setState( {isLoading: false});
            }, 6000);
        // 여기서 필요한 js 문법 지식 : fetch, axios
        // npm install axios
        // 사용할 API : YTS API : https://yts.mx/api - List Movies
            // YTS는 토렌트 영화 리스트업 업체로, API 데이터 사용은 용이하지만 API url이 매번 바뀌기 때문에
            // 니꼴라스가 이를 보완한 API를 제공하고 있다 : https://yts-proxy.now.sh/list_movies.json
        // Tip: 정돈된 API JSON text를 보려면 'JSON Viewer'라는 Chrome 확장 프로그램을 설치하세요

        // const movies = axios.get('https://yts-proxy.now.sh/list_movies.json')
        // axios는 다소 느리다. 그래서 componentDidMount 함수가 끝날 때까지 이를 명시하고, 기다려야한다.
            // async 사용, 비동기 API 호출 함수에서 필수인 요소이므로 반드시 알아야 하는 ES6 개념 async await!
        this.getMovies();
    }

    render(){
        const {isLoading} = this.state;
        return <div>{ isLoading ? "Loading..." : "Im Ready!"}</div>
     }

}
export default App;
