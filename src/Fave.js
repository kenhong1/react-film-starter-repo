import React, { Component } from 'react';


class Fave extends Component {
    constructor(props){
        super(props)
        this.state={
            isFave:false 
        }
        this.handleClick = this.handleClick.bind(this) 
    }
    handleClick = (e) =>{
        this.setState({
            isFave: !this.state.isFave
        })
        e.stopPropagation(); 
        console.log("clicking favorites")
    } 
                                
    render(){
        return(
            <div className={`film-row-fave ${this.state.isFave === false ?"add_to_queue" :"remove_from_queue"}`}  onClick={this.handleClick}>
            
            <p className="material-icons" > {this.state.isFave === false ?"add_to_queue" :"remove_from_queue"}  </p>
                
            </div>
        )
        
    }
}



export default Fave;