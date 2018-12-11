import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { onUserLogin } from '../actions'

class LoginPertama extends Component {

    onBtnLoginClick = () => {
        var username = this.refs.username.refs.tbUsername.value;
        this.props.onUserLogin(username)
    }

    render() {
        return(
            <div>
               <h1>Ini Login Pertama</h1>
               <Form className="col-xs-3">
                    <FormGroup>
                    <Label for="exampleEmail">Username</Label>
                    <Input type="email" name="username" ref="username" innerRef="tbUsername" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <Button color="success" onClick={this.onBtnLoginClick}>Login</Button>
                </Form>
            </div>
        )
    }
}


export default connect(null, { onUserLogin })(LoginPertama);