import React , { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class Register extends Component {
    render() {
        return(
            <div>
                <center><h4>Silahkan Mendaftar Dahulu</h4></center>
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

export default Register;