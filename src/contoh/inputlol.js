import React , { Component } from 'react';

class Inputlol extends Component {
    render() {
        return(
            <div>
                <input type={this.props.type} ref={this.props.innerRef } />
                <h1>{this.props.masukoe}</h1>
            </div>
        )
    }
}

export default Inputlol;