import React, { Component } from 'react';


class Fave extends Component {
    constructor(props){
        super(props)
        this.state = {
            isFave:false 
        }
        this.handleClick = this.handleClick.bind(this) 
    }
    handleClick(e){
        this.setState({
            isFave: !this.state.isFave
        })
        e.stopPropagation(); 
        console.log("clicking favorites")
    } 

    render(){
        let className = "film-row-fave "
        let addRemove = ""
        if(this.state.isFave){ 
            addRemove = "remove_from_queue" 
    } else { 
            addRemove = "add_to_queue"}

        return(
        <div onClick={this.handleClick} className = {"film-row-fave " + " " + addRemove} >

            <p className="material-icons"> {addRemove}  </p>        

        </div>
        )
    }
}


export default Fave;



