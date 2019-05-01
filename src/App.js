import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { UserRepository } from './api/userRepository';
import {FitnessTab} from './containers/fitnessTab';
import {DietTab} from './containers/dietTab';
import {HomeFeed} from './containers/homeFeed';
import { Nav, Navbar, NavItem, Tab, Tabs } from "react-bootstrap";
import "./App.css";
import Routes from "./routes";
import { LinkContainer } from "react-router-bootstrap";


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false,
      userId: 1
    };
  }
  userRepository = new UserRepository();
  
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
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>

        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Peachy Fitness</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
                {this.state.isAuthenticated
                  ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
                  : <Fragment>
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
                      <LinkContainer to="/signup">
                        <NavItem>Signup</NavItem>
                      </LinkContainer>
                      <LinkContainer to="/login">
                        <NavItem>Login</NavItem>
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