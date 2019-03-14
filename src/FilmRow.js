	import React, { Component } from 'react';
	import FilmPoster from "./FilmPoster"; 
	import Fave from "./Fave"


class FilmRow extends Component {

		render(){
			return(
					<div className="film-row" onClick={() => this.props.onDetailsClick(this.props.film)}>
					<FilmPoster poster={this.props.film.poster_path}> </FilmPoster>
					<div className="film-summary">

						<h1>{this.props.film.title}</h1>
						<p>{new Date(this.props.film.release_date).getFullYear()}</p>
					</div>
						<Fave isFave={this.props.isFave} onFaveToggle ={() => this.props.onFaveToggle(this.props.film) } /> 
					</div>
					
			)
			
		}
		
	}





export default FilmRow;