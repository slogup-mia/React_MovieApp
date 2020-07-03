import React from "react";
import PropTypes from 'prop-types';
import './Movie.css'

function Movie({id, year, title, summary, poster}){
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <p className="movie__summary">{summary}</p>

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
    poster : PropTypes.string.isRequired
}

export default Movie