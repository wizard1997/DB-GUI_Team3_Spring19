import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {FitnessTab} from './containers/fitnessTab';
import {HomeFeed} from './containers/homeFeed';
import { Nav, Navbar, NavItem, Tab, Tabs } from "react-bootstrap";
import "./App.css";
import Routes from "./routes";
import { LinkContainer } from "react-router-bootstrap";


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false
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
                {this.state.isAuthenticated
                  ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
                  : <Fragment>
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
        
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
  <HomeFeed/>
  </Tab>
  <Tab eventKey="fitness" title="Fitness">
  <FitnessTab />
  </Tab>
  <Tab eventKey="personal" title="Personal">
    <div><h1>Peachy</h1></div>
  </Tab>
  <Tab eventKey="account" title="Account">
    <div><h1>Peachy</h1></div>
  </Tab>
</Tabs>

        
        <Routes childProps={childProps} />
        </div>
    );
  }
  
}

export default App;