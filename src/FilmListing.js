import React, { Component } from 'react';
import FilmRow from './FilmRow'; 


class FilmListing extends Component{
	constructor(props){
		super(props)
		this.state = {
		filter: "all",
		faves: []
		}
		this.handleFilterClick = this.handleFilterClick.bind(this) 
		this.handleFaveToggle = this.handleFaveToggle.bind(this) 
	}
	handleFilterClick(filter){
		console.log("setting filter", filter)
		this.setState({
		filter: filter
	})
	}

handleFaveToggle(film){
	console.log("toggling film", film)
	let newFaves = this.state.faves.slice()
	const filmIndex = newFaves.indexOf(film)
	if (filmIndex > -1 ){
		// film exists in favs already
		newFaves.splice(filmIndex, 1)
	} else {
		// film is not a fave yet
		newFaves.push(film)
	}
	this.setState({
		faves: newFaves
	})
}
	render(){
		let fave; 
		const filmsToDisplay = this.state.filter === "all" ? this.props.films : this.state.faves
		const allFilms = filmsToDisplay.map((film, index) => {
			if (this.state.faves.includes(film)){
				//film is a fave
				fave = true
			} else {
				//film is not a fave
				fave = false 
			}
		return <FilmRow onDetailsClick={this.props.onDetailsClick} isFave={fave} film={film} key={index} onFaveToggle={this.handleFaveToggle}/> 
		})

		return(
		<div className="film-list">
		<h1 className="section-title">FILMS</h1>
		<div className="film-list-filters">
			<div className={`film-list-filter ${this.state.filter === "all" ? "is-active" : null }`} onClick={() => this.handleFilterClick("all")}>
				ALL
				<span className="section-count">{this.props.films.length}</span>
			</div>
			<div className={`film-list-filter ${this.state.filter === "faves" ? "is-active" : null }`} onClick={() => this.handleFilterClick('faves')}>
				FAVES
			<span className="section-count">{this.state.faves.length}</span>
			</div>
		</div>
		{allFilms}
		</div>
		)
	}

}

export default FilmListing;