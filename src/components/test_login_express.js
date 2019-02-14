import React , { Component } from 'react';
import axios from 'axios';
import { onUserLogin2 } from '../actions';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class test_login_express extends Component {
    state = { LoginUsers : [] }

    componentDidMount(){
        axios.get('http://localhost:2019/users')
        .then((res)=>{
            this.setState({LoginUsers : res.data})
            console.log(res.data[0].nama)
        })
    }

    onBtnLoginClick = () =>{
        var nama = this.refs.nama.refs.tbUsername.value;
        var password = this.refs.password.refs.tbPassword.value;
        console.log(password);
        this.props.onUserLogin2({nama , password})
    }

    renderButton = () =>{
        if(this.props.loading) {
            return <h2>Loading...</h2>
        }
        return <button type="submit" className="btn btn-primary" onClick={this.onBtnLoginClick}>Submit</button>
    }

    renderError = () =>{
        if(this.props.error.length > 0)
        {
            return  <p className="alert alert-danger">{this.props.error}</p>
        }
    }

    RenderUsers =() =>{
        var usersjsx = this.state.LoginUsers.map((res)=>{
            return (
                <h1>
                    {res.nama}
                </h1>
            )
        })
        return usersjsx;
    }

    LoopingNormal = () =>{
        axios.get('http://localhost:2019/users')
        .then((res)=>{
           return (
               <h1>
                  anjir
               </h1>
           )
        })
    }
    render(){
        return(
            <div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                {this.RenderUsers()}
                <div className={"col-3"} style={{margin : '0 auto', paddingTop : "50px"}}>
                        <Form className="col-xs-3">
                            <FormGroup>
                            <Label for="exampleEmail">Username</Label>
                            <Input type="email" name="username" ref="nama" innerRef="tbUsername" id="exampleEmail" placeholder="with a placeholder" />
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
}

const mapStateToProps = (state) =>{
    return{ 
         username : state.auth.username , 
        error : state.auth.error, 
        loading : state.auth.loading,
        
        };
}

export default  connect(mapStateToProps, {onUserLogin2} ) (test_login_express);