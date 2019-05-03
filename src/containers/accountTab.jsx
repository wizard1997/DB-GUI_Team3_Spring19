import React, { Component } from 'react';
import { Users } from '../models/users';
import { Account } from './account';
import { AccountInfo } from './accountInfo';
import { Tab, Tabs } from "react-bootstrap";
import { getUser } from '../api/userRepository';
import { ChangeID } from './changeID';

export class AccountTab extends React.Component {

    state = {
        user_id: 1,
        username: 'abc123',
        email: '',
        f_name: '',
        l_name: '',
        pass: '',
        phone: '',
        height: 0,
        weight: 0,
        age: 0,
        users: []
    };

    /*
    onAccountModified(user) {
        this.setState(state => {
            currentUser = user;
            return state;
        })
    }
    */

    onChangeID(user_id) {
        this.setState(state =>
        {
            this.state.user_id = user_id;
            alert(this.user_id);
            this.componentDidMount();
            return state;
        })
    }

    render() {
        return (
        <>
                {/*
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="viewAccount" title="Account Info">
                    <AccountInfo />
                </Tab>

                <Tab eventKey="editAccount" title="Edit Info">
                    <Account onPlanAdded={x => this.onAccountChanged(x)} />
                </Tab>
            </Tabs>  
            */}
                <AccountInfo users={this.state.users} />
                <ChangeID onChangeID={x => this.onChangeID(x)} />
            </>
        );
    }

    
    componentDidMount() {
        //alert("componentDidMount pt 1: " + this.state.user_id);
        getUser(this.state.user_id)
            .then(users => this.setState({ users }));
        //alert("componentDidMount pt 2: " + this.state.user_id);
    }
    
}

export default AccountTab;