import React , { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Cookie_cart } from '../actions/index'

class HomePage extends Component {
    state = { listpopok : [] }
    componentDidMount() {
        axios.get('http://localhost:1999/Pupuk')
        .then((res) => {
            console.log(res.data)
            // this.setState({ listpopok : res.data })
        })
        console.log(this.props.cart)
    }

    renderListPopok = () => {
        var listJSXPopok = this.state.listpopok.map((item) =>{
            return (
            
                <div>
                    <h1>{item.deskripsi}</h1>
                    <h3>{item.name}</h3>
                    {/* <p>{item}</p> */}
                   Dengan Harga cukup RP. <h4>{item.harga}</h4> per Kilo
                </div>
            )
        })
        return listJSXPopok;
    }
    render() {
        return(
            <div>
                <h1>Ini Home Page</h1>
                {/* {this.renderListPopok()}
                <h1>{this.props.pikachu}</h1>
                <h1>eoeoe</h1>
                <h1>{this.props.cart}</h1> */}
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{pikachu : state.pikachu, cart : state.Cart.harga}
}

export default connect(mapStateToProps,{Cookie_cart})(HomePage);