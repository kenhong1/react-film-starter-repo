	import React from 'react';
	import FilmPoster from "./FilmPoster"; 
	import Fave from "./Fave"


const FilmRow = (props) => {

			return(
				<div className="film-row" onClick={() => props.onDetailsClick(props.film)}>
					<FilmPoster poster={props.film.poster_path}> </FilmPoster>
				<div className="film-summary">

				<h1>{props.film.title}</h1>
					<p>{new Date(props.film.release_date).getFullYear()}</p>
				</div>
					<Fave isFave={props.isFave} onFaveToggle ={() => props.onFaveToggle(props.film) } /> 
				</div>
		)
	}





export default FilmRow;