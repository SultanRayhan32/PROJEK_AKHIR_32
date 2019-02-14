import React, { Component } from 'react';
import {
    Button,
    Input,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import axios from 'axios';
import {onUserLogOut , keepLogin} from '../actions';
// import './support/css1/bootstrap.css'

const cookies = new Cookies();

class Headerpertama extends Component {
    state = { filterProduk : [] }

    componentDidMount() {
      axios.get('http://localhost:1995/Pupuk')
      .then((res)=>{
        this.setState({ filterProduk : res.data})
        
      })
    }
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      
       onLogOutSelect = () => {
        this.props.onUserLogOut();
        cookies.remove('Ferguso');
      }

      renderFilter = () => {
        
        var ListJSXProduk = this.state.filterProduk.map((res)=>{
          return (<div>
            <p>{res}</p>
          </div>)
        })
          
      
        return ListJSXProduk;
      }

      
    render() {
      if(this.props.username === '')
      {
        return(
        <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">Home</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
          <div className="navbar-nav ml-auto">            <NavItem className="nav-item">
               <Link to="/Login"><NavLink className="nav-link">Login</NavLink></Link>
              </NavItem>
              <NavItem className="nav-item">
                <Link to="/Register"><NavLink className="nav-link">Register</NavLink></Link>
              </NavItem>
              {/* <NavItem className="nav-item">
                <Link to="/List"><NavLink className="nav-link">List</NavLink></Link>
              </NavItem> */}
              <NavItem className="nav-item">
                <Link to="/manage"><NavLink className="nav-link">Manage Produk</NavLink></Link>
              </NavItem>
              </div>
          </div>
        </div>
      </nav>
                     
              
            
            </div>
        )
      }
        return(
            <div>
                
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/Cart">Lihat Cart</a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" href="/CHECK-OUT">Check Out</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/CartList">Lihat Cart (Edit)</a>
              </li>
            </ul>
          </div>
        </div>
        <UncontrolledDropdown nav inNavbar >
                <DropdownToggle nav caret className="nav-item">
                  Hello , {this.props.username} 
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/">
                    Home
                  </DropdownItem>
                  <DropdownItem href="/Cart">
                    Cart
                  </DropdownItem>
                  <DropdownItem href="/listproduk32">
                    List Produk
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.onLogOutSelect}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
      </nav>
              
          </div>
        )
    }
}

const mapStateToProps = (state) => {
      return { username : state.auth.username , error : state.auth.error  }
}


export default connect(mapStateToProps , {onUserLogOut, keepLogin }) (Headerpertama);