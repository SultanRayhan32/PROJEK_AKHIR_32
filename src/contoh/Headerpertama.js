import React, { Component } from 'react';
import {
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


   



class Headerpertama extends Component {
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
    
    render() {
      if(this.props.username === '')
      {
        return(
        <div>
                
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">{this.props.navBrand}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem>
                <NavLink>Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Register</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.google.com/">google</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
            </div>
        )
      }
        return(
            <div>
                
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">{this.props.navBrand}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Hello , {this.props.username}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              
            </Nav>
          </Collapse>
        </Navbar>
            </div>
        )
    }
}

    

export default Headerpertama;