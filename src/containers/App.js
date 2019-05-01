import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {FitnessTab} from './containers/fitnessTab';
import {DietTab} from './containers/dietTab';
import {HomeFeed} from './containers/homeFeed';
import { Nav, Navbar, NavItem, Tab, Tabs } from "react-bootstrap";
import "./App.css";
import Routes from "./routes";
import { LinkContainer } from "react-router-bootstrap";
import { Login } from './containers/Login';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false,
      userId:1
    };
  }
  
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }
  
  handleLogout = event => {
    this.userHasAuthenticated(false);
  }
  
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Peachy Fitness</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
                {!this.state.isAuthenticated & !this.state.userHasAuthenticated
                  ?<Fragment>
                      <LinkContainer to="/signup">
                        <NavItem>Signup</NavItem>
                      </LinkContainer>
                      <LinkContainer to="/login">
                        <NavItem onClick={()=> this.setState(this.isAuthenticated=true, this.userHasAuthenticated=true)}>Login</NavItem>
                      </LinkContainer>
                    </Fragment>
                  :
                    <Fragment>
                    <LinkContainer to="/homeFeed/:userId">
                        <NavItem>Home Feed</NavItem>
                      </LinkContainer>
                      <LinkContainer to="/fitness/:userId">
                        <NavItem>Fitness</NavItem>
                      </LinkContainer>
                      <LinkContainer to="/diet">
                        <NavItem>Diet</NavItem>
                      </LinkContainer>
                      <LinkContainer to="/account">
                        <NavItem>Account</NavItem>
                      </LinkContainer>
                      <LinkContainer to="/">
                        <NavItem onClick={this.handleLogout}>Logout</NavItem>
                      </LinkContainer>
                    </Fragment>
                  
                }
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        
        <Routes childProps={childProps} />
        </div>

        
    );
  }
  
}

export default App;