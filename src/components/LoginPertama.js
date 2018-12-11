import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import  Cookies  from 'universal-cookie'
import { onUserLogin } from '../actions'

const cookies = new Cookies();

class LoginPertama extends Component {

    componentWillReceiveProps(newProps) {
        if(newProps.username !== '') {
            cookies.set('Ferguso', newProps.username, { path: '/' })
        }
    }
   

    onBtnLoginClick = () => {
        var username = this.refs.username.refs.tbUsername.value;
        var password = this.refs.password.refs.tbPassword.value;
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
            return <h2>Loading...</h2>
        }
        return <Button color="success" onClick={this.onBtnLoginClick}>Login</Button>
    }

    render() {
        if(this.props.username === ""){
            return(
                <div>
                    <center><h4>Ini Login Pertama</h4></center>
                    <div className={"col-3"} style={{margin : '0 auto', paddingTop : "50px"}}>
                        <Form className="col-xs-3">
                            <FormGroup>
                            <Label for="exampleEmail">Username</Label>
                            <Input type="email" name="username" ref="username" innerRef="tbUsername" id="exampleEmail" placeholder="with a placeholder" />
                            </FormGroup>
                            <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" ref="password" innerRef="tbPassword" id="examplePassword" placeholder="password placeholder" />
                            </FormGroup>
                            {this.renderError()}
                            {this.renderButton()}
                        </Form>
                    </div>
                </div>
            )
        }
        return  <Redirect to="/List" />
        
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