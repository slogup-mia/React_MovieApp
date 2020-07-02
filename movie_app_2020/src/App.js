import React from 'react';
import axios from 'axios';
import Movie from './Movie';
class App extends React.Component{
    state = {
        isLoading : true,
        movies : []
    };

    getMovies = async () =>{
        // const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json')
        // console.log(movies.data.data.movies)
        // ES6 문법으로 불러오기 :
        const {data: {data: { movies }}} = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
        console.log(movies);
        // this.setState({ movies:movies, isLoading:false }) // state의 movies: axios로 get한 movies
        this.setState({ movies, isLoading:false }) // movies 한번언급으로 줄일수있다 by ES6
    };

    // render() 호출 후 가장 먼저 호출 되는 메소드
    componentDidMount() {
        this.getMovies();
    }

    render(){
        const {isLoading, movies } =  this.state;
        return <div>
            { isLoading
                ? "Loading..."
                : movies.map( movie => {
                    console.log(movie)
                    return (<Movie key={movie.id} poster={movie.medium_cover_image} summary={movie.summary} year={movie.year} id={movie.id} title={movie.title}/>);
                    })
            }
                </div>
     }

}
export default App;
