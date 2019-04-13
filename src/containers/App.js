import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem, Tab } from "react-bootstrap";
import "./App.css";
import Routes from "../routes.js";
import { LinkContainer } from "react-router-bootstrap";


class App extends Component {
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
            <LinkContainer to="/signup">
              <NavItem>Signup</NavItem>
            </LinkContainer>
            <LinkContainer to="/login">
              <NavItem>Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes childProps={childProps} />
      
      <Tabs defaultActiveKey="home" id="user-tabs">
      
      <Tab eventKey="home" title="Home">
      <HomeScreen></HomeScreen>
      </Tab>

     <Tab eventKey="personal" title="Personal">
     <PersonalTab></PersonalTab>
      </Tab>

      <Tab eventKey="fitness " title="Fitness ">
      <FitnessForm></FitnessForm>
      </Tab>

      <Tab eventKey="account" title="Account">
      <AccountDetails></AccountDetails>
      </Tab>

      </Tabs>
      </div>
  );
}
}

export default App;
