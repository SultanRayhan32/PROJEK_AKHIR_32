import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import Headerpertama from './components/Headerpertama';
import LoginPertama from './components/LoginPertama';
import HomePage from './components/HomePage';
import { Route  } from 'react-router-dom';
import {  withRouter } from 'react-router-dom';
import Registerpertama from './components/Registerpertama.jsx';
// import PopokList from './components/PopokList';
import Cookies from 'universal-cookie';
import { keepLogin , cookieChecked , Cookie_cart } from './actions/index';
// import ManageProduk from './components/ManageProduk';
// import ProdukDetail from './components/ProdukDetail';
// import LihatCart from './components/LihatCart';
import CheckOut from './components/CheckOut';
import LihatCart2 from './components/LihatCart2';
import test_login_express from './components/test_login_express';
import ListProduk from './components/ListProduk';
// import Loginformtes from './components/Loginformtes';
import Tesregisteremail from './components/Tesregisteremail';
import Manageproduk2 from './components/Manageproduk2';
import ListProdukdetail32 from './components/ListProdukdetail32';
import Cart32 from './components/Cart32';
import AdminAddProduk from './components/AdminAddProduk';
import AdminKonfirmasi from './components/AdminKonfirmasi';
import Histori32 from './components/Histori32';
import AdminManageUser from './components/AdminManageUser';
import PaginationReactStrap from './components/PaginationReactStrap';
import testdoangkok from './components/TesRenderProdukPagin'
import './support/Loader.css';
import './components/support/paging.css'
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
            {/* <Route path="/List" component={PopokList} /> */}
            {/* <Route path="/manage" component={ManageProduk} /> */}
            {/* <Route path="/Filter" component={FilterProduk} /> */}
            {/* <Route path="/Detail" component={ProdukDetail} /> */}
            {/* <Route path="/Cart" component={LihatCart} /> */}
            <Route path="/CHECK-OUT" component={CheckOut} />
            <Route path="/CartList" component={LihatCart2} />
            <Route path="/tesUser" component={test_login_express} />
            <Route path="/listproduk32" component={ListProduk} />
            {/* <Route path="/logintes" component={Loginformtes} /> */}
            <Route path="/emailregister" component={Tesregisteremail} />
            <Route path="/detail32" component={ListProdukdetail32} />
            <Route path="/cart32" component={Cart32} />
            <Route path="/AdminProduk" component={AdminAddProduk} />
            <Route path="/konfimasi"  component={AdminKonfirmasi}/>
            <Route path="/Histori"  component={Histori32}/>
            <Route path="/manageUser" component={AdminManageUser} />
            <Route path="/Paging" component={PaginationReactStrap} />
            <Route path="/tesanjir" component={testdoangkok} />
          </div> 
           {/* <Header /> */}
          {/* <Navbar /> */}
          
        </div>
      
    );
    }
    return (
      <div>
        <div class="loader">Loading...</div>
      </div>
    )
    var { content , akhir , apa , inputnama } = this.state;
    
  }
}

const mapStateToProps = (state) => {
  return { cookie : state.auth.cookie }
}

export default withRouter(connect(mapStateToProps , {keepLogin , cookieChecked}) (App))
