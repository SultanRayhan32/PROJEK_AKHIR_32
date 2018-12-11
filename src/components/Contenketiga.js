import React , { Component } from 'react';

class Componentketiga extends Component {
    render () {
        return(
            <div>
                <div>
                   <center><h1>Selamat Datang ,  {this.props.namainput}</h1></center>
                </div>
            </div>
        )
    }
}

export default Componentketiga;