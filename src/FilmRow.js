import React, { Component } from 'react';
import FilmPoster from "./FilmPoster"; 

class FilmRow extends Component {
    render(){
        return(
            <div className="film-row">
            <FilmPoster poster={this.props.film.poster_path}></FilmPoster>
            <div className="film-summary">
            <h1>{this.props.film.title}</h1>
            
                <p>{new Date(this.props.film.release_date).getFullYear()}</p>
            </div>
            </div>
            
        )
        
    }
}





export default FilmRow;