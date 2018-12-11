import React , { Component } from 'react';
import { connect } from 'react-redux';
class Contenkedua extends Component{
    render() {
        return(
            <div>
                <h2>{this.props.tes}</h2>
                <h3>sgsfgfsfsoeoe</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {tes : state.rosinante}
}
export default connect(mapStateToProps)(Contenkedua);