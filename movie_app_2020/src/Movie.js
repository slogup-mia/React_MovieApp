import React from "react";
import PropTypes from 'prop-types';

 // state가 필요없는 컴포넌드의 경우에는
    // class 컴포넌트로 짤 필요가 없다
    // function 컴포넌트로 구현하자

function Movie({id, year, title, summary, poster}){
    return <h3>{title}</h3>
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

export default Movie