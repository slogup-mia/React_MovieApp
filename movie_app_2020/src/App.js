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
            <section>
                {isLoading
                    ? (<div clas = 'loader'>
                        <span class = 'loader__text'> Loading.. </span>
                    </div>)
                    : (<div class='movies'>
                        {movies.map(movie => (
                            <Movie
                                summary={movie.summary}
                                id={movie.id}
                                poster={movie.medium_cover_image}
                                title={movie.title}
                                year={movie.year}
                                key ={movie.id}
                            />
                        ))}
                    </div>)
                }
            </section>
        )
     }

}
export default App;
