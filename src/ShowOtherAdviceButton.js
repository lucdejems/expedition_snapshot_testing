import React, { Component } from 'react';
import './App.css';


class ShowOtherAdviceButton extends Component {

    render() {
        return (
            <button
                onClick={this.props.load}
            >
                Show other advice
            </button>
        );
    }
}


export default ShowOtherAdviceButton;
