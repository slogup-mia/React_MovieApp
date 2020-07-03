import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

class App extends React.Component{
    state = {
        isLoading : true,
        movies : []
    };

    getMovies = async () =>{
        const {data: {data: { movies }}} = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
        console.log(movies);
        this.setState({ movies, isLoading:false })
    };

    componentDidMount() {
        this.getMovies();
    }

    render(){
        const {isLoading, movies } =  this.state;
        return (
            <section className='container'>
                {isLoading
                    // ReactJS 코드 안의 HTML 태그의 class는 class='name'이아니라
                    // className='name'으로 명시해주어야 한다.
                    // Class Component와 구분하기 위한 문법
                    ? (<div className= 'loader'>
                        <span className = 'loader__text'> Loading.. </span>
                    </div>)
                    : (<div className='movies'>
                        {movies.map(movie => (
                            <Movie
                                summary={movie.summary}
                                id={movie.id}
                                poster={movie.medium_cover_image}
                                title={movie.title}
                                year={movie.year}
                                key ={movie.id}
                                genres={movie.genres}
                            />
                        ))}
                    </div>)
                }
            </section>
        )
     }

}
export default App;
