import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import  Cookies  from 'universal-cookie'
import { onUserLogin  } from '../actions'
import '../template/Login_v14/vendor/bootstrap/css/bootstrap.min.css';
import '../template/Login_v14/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../template/Login_v14/fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
import '../template/Login_v14/vendor/animate/animate.css';
import '../template/Login_v14/vendor/css-hamburgers/hamburgers.min.css';
import '../template/Login_v14/vendor/animsition/css/animsition.min.css';
import '../template/Login_v14/vendor/select2/select2.min.css';
import '../template/Login_v14/vendor/daterangepicker/daterangepicker.css';
import '../template/Login_v14/css/util.css';
import '../template/Login_v14/css/main.css';

const cookies = new Cookies();

class LoginPertama extends Component {

    componentWillReceiveProps(newProps) {
        if(newProps.username !== '') {
            cookies.set('Ferguso', newProps.username, { path: '/' })
        }
    }
   

    onBtnLoginClick = () => {
        var username = this.refs.username.value;
        var password = this.refs.password.value;
        this.props.onUserLogin({username, password})
    }

    renderError = () =>{
        if(this.props.error.length > 0)
        {
            return  <p className="alert alert-danger">{this.props.error}</p>
        }
    }

    renderButton = () =>{
        if(this.props.loading) {
            return <h2>Loading...fsggsfd</h2>
        }
        // return <Button color="success" onClick={this.onBtnLoginClick}>Login</Button>
        return <button className="login100-form-btn" onClick={this.onBtnLoginClick}>
        Login
      </button>
    }

    render() {
        if(this.props.username === ""){
            return(
                
                
            <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
            <form className="login100-form validate-form flex-sb flex-w">
              <span className="login100-form-title p-b-32">
                Account Login
              </span>
              <span className="txt1 p-b-11">
                Username
              </span>
              <div className="wrap-input100 validate-input m-b-36" >
                <input className="input100" type="text"  ref="username"  />
                <span className="focus-input100" />
              </div>
              <span className="txt1 p-b-11">
                Password
              </span>
              <div className="wrap-input100 validate-input m-b-12" >
                <span className="btn-show-pass">
                  <i className="fa fa-eye" />
                </span>
                <input className="input100" type="password"   ref="password"  />
                <span className="focus-input100" />
              </div>
              <div className="flex-sb-m w-full p-b-48">
                <div className="contact100-form-checkbox">
                  {/* <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                  <label className="label-checkbox100" htmlFor="ckb1">
                    Remember me
                  </label> */}
                </div>
                {/* <div>
                  <a href="#" className="txt3">
                    Forgot Password?
                  </a>
                </div> */}
              </div>
              <div className="container-login100-form-btn">
              {this.renderError()}
              {this.renderButton()}
                
              </div>
            </form>
          </div>
        </div>
        </div>
        
      
      
                /* //  <div className={"col-3"} style={{margin : '0 auto', paddingTop : "50px"}}>
                    //     <Form className="col-xs-3">
                    //         <FormGroup>
                    //         <Label for="exampleEmail">Username</Label>
                    //         <Input type="email" name="username" ref="username" innerRef="tbUsername" id="exampleEmail" placeholder="with a placeholder" />
                    //         </FormGroup>
                    //         <FormGroup>
                    //         <Label for="examplePassword">Password</Label>
                    //         <Input type="password" name="password" ref="password" innerRef="tbPassword" id="examplePassword" placeholder="password placeholder" />
                    //         </FormGroup>
                    //         {this.renderError()}
                    //         {this.renderButton()}
                    //     </Form>
                    // </div>  */

                
            )
        }
        return  <Redirect to="/listproduk32" />
        
    }
}
const mapStateToProps = (state) =>{
    return{ 
        username : state.auth.username , 
        error : state.auth.error, 
        loading : state.auth.loading,
        
        };
}

export default connect(mapStateToProps, { onUserLogin  })(LoginPertama);