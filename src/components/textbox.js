import React, { Component } from 'react';

export class Textbox extends Component {
    constructor(props){
        super(props);
        this.state = {term: ""};
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(term){
        this.setState({term})
    }
    render(){
        return (
            <div>
                <input 
                    type="text"
                    id="term"
                    value={this.state.term}
                    placeholder = "Search bucket list items."
                    onChange={event => this.onInputChange(event.target.value)}
                    required 
                />
            </div>
        )
    }
}