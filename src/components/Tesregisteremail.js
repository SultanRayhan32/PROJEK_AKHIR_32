import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { onUserRegister2 } from '../actions'

class Tesregisteremail extends Component {

    onBtnRegisterClick2 = () => {
        var nama = this.refs.username.value;
        var email = this.refs.email.value;
        var password = this.refs.password.value;
    
        this.props.onUserRegister2({ nama, email, password  });
      }

      renderError = () => {
        if(this.props.error.length > 0) {
            return <p className="alert alert-danger">{this.props.error}</p>;
        }
      }
    
      renderButton = () => {
        if(this.props.loading) {
            return <i className="fa fa-spinner fa-spin" style={{ fontSize: '54px' }}/>
        }
        return <input type="button" name="submit" id="submit" className="btn btn-rounded btn-block my-4 waves-effect z-depth-0 bg-dark" defaultValue="Register" onClick={this.onBtnRegisterClick2} />
      }

    render() {
        return (
            <center>
      <div className="col-md-4 center" style={{marginTop: "100px"}}>
        <div className="card">
          <h5 className="card-header white-text text-center py-4 bg-dark" style={{fontSize: "30px"}}>
            <strong>Register</strong>
          </h5>
           <div className="card-body px-lg-5 pt-0">
            <form className="text-center" style={{color: '#757575'}}>
              <div className="md-form">
                <input type="text" ref="username" name="Name" placeholder="Nama" className="form-control" />
              </div>
              <div className="md-form">
                <input type="email" ref="email" placeholder="Email" className="form-control" />
              </div>
              {/* <div className="md-form">
                <input type="number" ref="phone" placeholder="No. Telepon" className="form-control" />
              </div> */}
              <div className="md-form">
                <input type="password" ref="password" placeholder="Password" className="form-control" />
              </div>
              {this.renderError()}
              {this.renderButton()}
            </form>
          </div>
        </div>
      </div>
      </center>
        )
    }
}

const mapStateToProps = (state) => {

    return {username : state.auth.nama , loading : state.auth.loading , error : state.auth.error};
}

export default connect(mapStateToProps, {  onUserRegister2   } )(Tesregisteremail);