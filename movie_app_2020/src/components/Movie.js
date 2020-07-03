import React from "react";
import PropTypes from 'prop-types';
import './Movie.css'

function Movie({ id, year, title, summary, poster, genres }){
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary.slice(0,180)}...</p>
                <ul className="movie__genres">
                    {/*여기서도 마찬가지로 콘솔에서는 unique "Key"를 요구한다. */}
                        {/* map이 제공하는 argument를 활용하면 된다. */}
                    {genres.map( (genre, idx ) => (
                        <li key={idx} className="genres__genre">{genre}</li>
                    ))}
                </ul>
            </div>

            {/*    reactJS 태그 안에서 CSS style 먹이는 법 : duble braket : style= {{}}  */}
            {/*    <p className="movie__summary" style={{ fontSize: 10px }}>{summary}</p>   */}

        </div>
        )

}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    // string 묶음인 array로 들어오는 PropType를 명시하는 아래 방법을 주목하자
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie