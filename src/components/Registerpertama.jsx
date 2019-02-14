import React , { Component } from 'react';
import { connect } from 'react-redux';
import { TesRegister } from '../actions';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom'
import './css/Login_v13/css/main.css';
import './css/Login_v13/css/util.css';
// import './css//Login_v13/fonts/font-awesome-4.7.0/css/font-awesome.css';
import './css//Login_v13/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
// import './css//Login_v13/fonts/iconic/css/material-design-iconic-font.css';
import './css//Login_v13/fonts/iconic/css/material-design-iconic-font.min.css';
import './css//Login_v13/fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
import './css/Login_v13/vendor/animate/animate.css';
import './css/Login_v13/vendor/animsition/css/animsition.min.css';
import './css/Login_v13/vendor/select2/select2.min.css';
import './css/Login_v13/vendor/daterangepicker/daterangepicker.css';
import './css/Login_v13/vendor/css-hamburgers/hamburgers.min.css';
// import Cookies from 'universal-cookie';
// import image2 from '../components/bg-01.jpg';

const cookies = new Cookies;

class Registerpertama extends Component {

    componentWillReceiveProps(newProps) {
      if(newProps.username !== ''){
        cookies.set('Ferguso', newProps.username,  { path: '/' })
      }

    }

    renderError = () =>{
      if(this.props.error.length > 0)
      {
          return  <p className="alert alert-danger">{this.props.error}</p>
      }
  }

    renderButton = () =>{
      if(this.props.loading) {
          return <h2>Loading...</h2>
      }
      return <button className="login100-form-btn" onClick={this.onBtnRegisterClick}>Sign Up</button>
  }

    onBtnRegisterClick = () => {
      var username = this.refs.name.value;
      var email = this.refs.email.value;
      var password = this.refs.password.value;
      
      // this.props.onUserRegister({
      //   nama : username, 
      //   email : email , 
      //   password : password ,
      //   role : 'user'
      //   })
      this.props.TesRegister({
        nama : username, 
        email : email , 
        password : password 
        })
    }
    render() {
      if(this.props.username === ''){
        return(
          <div style={{backgroundColor: '#999999'}}>
      <div className="limiter">
          <div className="container-login100">
          <div  className="login100-more" style={{backgroundImage: 'url("https://freedesignfile.com/upload/2016/12/Library-Young-girl-embracing-books-HD-picture.jpg")'}} />
          <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-59">
                Lets Join Us
              </span>
              <div className="wrap-input100 validate-input" data-validate="Name is required">
                <span className="label-input100">Full Name</span>
                <input className="input100" type="text" name="name" placeholder="Name..." ref="name" />
                <span className="focus-input100" />
              </div>
              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <span className="label-input100">Email</span>
                <input className="input100" type="text" name="email" placeholder="Email addess..." ref="email" />
                <span className="focus-input100" />
              </div>
              {/* <div className="wrap-input100 validate-input" data-validate="Username is required">
                <span className="label-input100">Username</span>
                <input className="input100" type="text" name="username" placeholder="Username..." />
                <span className="focus-input100" />
              </div> */}
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <span className="label-input100">Password</span>
                <input className="input100" type="text" name="pass" placeholder="*************" ref="password" />
                <span className="focus-input100" />
              </div>
              {/* <div className="wrap-input100 validate-input" data-validate="Repeat Password is required">
                <span className="label-input100">Phone Number</span>
                <input className="input100" type="number" name="Phone-Number" placeholder="*************" ref="phone" />
                <span className="focus-input100" />
              </div> */}
              <div className="flex-m w-full p-b-33">
                {/* <div className="contact100-form-checkbox">
                  <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                  <label className="label-checkbox100" htmlFor="ckb1">
                    <span className="txt1">
                      I agree to the
                      <a href="#" className="txt2 hov1">
                        Terms of User
                      </a>
                    </span>
                  </label>
                </div> */}
              </div>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                <div>
                  {this.renderError()}
                </div>
                  <div className="login100-form-bgbtn" />
                  {this.renderButton()}
                </div>
                <a href="/Login" className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30">
                  Sign in
                  <i className="fa fa-long-arrow-right m-l-5" />
                </a>
              </div>
            </form>
          </div>
        </div>
    </div>
  </div>
      )
      }
    else{
      return <Redirect  to='/' />
    }
        
      
    }
  }  
        
  
const mapStateToProps = (state) => {

    return {username : state.auth.username , loading : state.auth.loading , error : state.auth.error};
}




export default connect(mapStateToProps, {    TesRegister   } )(Registerpertama);