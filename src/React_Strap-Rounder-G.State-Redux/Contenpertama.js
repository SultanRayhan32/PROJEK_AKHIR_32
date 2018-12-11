import React , { Component } from 'react';
import { connect } from 'react-redux';

class Contenpertama1 extends Component {
    render() {
        return(
            <div>
                
                <h1>Ini Conten Pertama</h1>
                <h4>{this.props.rosinante123}</h4>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {rosinante123 : state.rosinante}
}

export default connect(mapStateToProps)(Contenpertama1);