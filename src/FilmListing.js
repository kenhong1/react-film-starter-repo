import React, { Component } from 'react';
import TMDB from './TMDB';
import { all } from 'q';
import FilmRow from './FilmRow'; 

class FilmListing extends Component{
    render(){
    const allFilms = this.props.films.map((film, index) => <FilmRow film={film} key={index}/> ) 
        return(
                <div className="film-list">
                <h1 className="section-title"> Films </h1>
                <h1> {allFilms} </h1>
                </div>
        )
    }
}

export default FilmListing;