import React, { Component } from 'react';
import './index.css';
import FilmListing from "./FilmListing"; 
import FilmDetails from "./FilmDetails"; 
import TMDB from './TMDB';

class App extends Component {
  constructor(props){ 
    super(props)
    this.state= {
        films: TMDB.films, 
        current: {} 
    }
    this.handleDetailsClick=this.handleDetailsClick.bind(this)
}

handleDetailsClick(film){
  console.log("Fetching details for this", film)
  const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
  fetch(url)
  .then(response=>response.json())
  .then(json => { 
    this.setState({current: json})
  })
}


  render() {
    return(
        <div className="film-library">
          <FilmListing onDetailsClick={this.handleDetailsClick} films={this.state.films} />
          <FilmDetails film={this.state.current} />
        </div>
    )
  }
}

export default App;
