import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import Headerpertama from './components/Headerpertama';
import LoginPertama from './components/LoginPertama';
import HomePage from './components/HomePage';
import Register from './components/Register';
import { Route  } from 'react-router-dom';
import Contenpertama from './components/Contenpertama';
import {  withRouter } from 'react-router-dom';
import Contenkedua from './components/ContenKedua';
import Registerpertama from './components/Registerpertama.jsx';
import PopokList from './components/PopokList';
import Cookies from 'universal-cookie';
import { keepLogin , cookieChecked , Cookie_cart } from './actions/index';
import ManageProduk from './components/ManageProduk';
import FilterProduk from './components/FilterProduk';
import ProdukDetail from './components/ProdukDetail';
import CartMovie from './components/CartMovie';
import KeranjangBelanja from './components/KeranjangBelanja';
import LihatCart from './components/LihatCart';
import CheckOut from './components/CheckOut';
// import Header from './Projek/Header';
// import Navbar from './Projek/Navbar';
// import './Projek/style/vendor/animsition/css/animsition.css';
// import Footerpertama from './components/Footerpertama';
// import './support/css1/bootstrap.css'

const cookies = new Cookies();

class App extends Component {
  state = {  content : 'Ini Content' }

  // componentWillReceiveProps(newProps) {
  //   if(newProps.username !== '') {
  //       cookie.set('Ferguso', newProps.username,  { path: '/' })
  //  }
  // }

  componentDidMount() {
    const cookienya = cookies.get('Ferguso');
    if(cookienya !== undefined) {
        this.props.keepLogin(cookienya);
    }
    else {
      this.props.cookieChecked()
    }
    const cookiemu = cookies.get('Sanji');
    if(cookiemu !== undefined) {
      this.props.Cookie_cart(cookiemu);
    }
  }

  

  render() {
    if(this.props.cookie){
      return(
        <div className={"container-fluid"}>
             <Headerpertama navBrand={"Home"}   />
          <div> 
            <Route path="/Login" component={LoginPertama}/>
            <Route  exact path="/" component={HomePage} />
            <Route path="/Register" component={Registerpertama} />
            <Route path="/google" component={Contenpertama} />
            <Route path="/List" component={PopokList} />
            <Route path="/manage" component={ManageProduk} />
            <Route path="/Filter" component={FilterProduk} />
            <Route path="/Detail" component={ProdukDetail} />
            <Route path="/Cart" component={LihatCart} />
            <Route path="/Keranjang" component={KeranjangBelanja} />
            <Route path="/CHECK-OUT" component={CheckOut} />
          </div> 
           {/* <Header /> */}
          {/* <Navbar /> */}
        </div>
      
    );
    }
    return (
      <div>
        <center>
          <h1>Loading...</h1>
        </center>
      </div>
    )
    var { content , akhir , apa , inputnama } = this.state;
    
  }
}

const mapStateToProps = (state) => {
  return { cookie : state.auth.cookie }
}

export default withRouter(connect(mapStateToProps , {keepLogin , cookieChecked}) (App))
