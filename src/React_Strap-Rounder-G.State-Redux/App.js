import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Headerpertama from './components/Headerpertama';
import LoginPertama from './components/LoginPertama';
import HomePage from './components/HomePage';
import Register from './components/Register';
import { Route } from 'react-router-dom';
import Contenpertama from './components/Contenpertama';
import Contenkedua from './components/ContenKedua';
// import Header from './Projek/Header';
// import Navbar from './Projek/Navbar';
// import './Projek/style/vendor/animsition/css/animsition.css';
// import Footerpertama from './components/Footerpertama';
// import './support/css1/bootstrap.css'


class App extends Component {
  state = {  tes : '' }

  

  render() {
    var { content , akhir , apa , inputnama } = this.state;
    return(
        <div className={"container"}>
             <Headerpertama navBrand={"Home"}  />
          <div> 
            <Route path="/Login" component={LoginPertama}/>
            <Route  exact path="/" component={HomePage} />
            <Route path="/Register" component={Register} />
            <Route path="/google" component={Contenpertama} />
            <Route path="/cart" component={Contenkedua} /> 
          </div> 
           {/* <Header /> */}
          {/* <Navbar /> */}
        </div>
      
    );
  }
}

export default App;
