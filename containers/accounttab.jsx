import React, { Component } from 'react';
import { Users } from '../models/users';
import { Account } from './account';


export class AccountTab extends React.Component {
    
    state = {
        id: '',
        name: '',
        email: '',
        password: '',
        profilePic: [],
        age: 0,
        height: 0,
        weight: 0, 
        workoutplans: [],
        fitnessGoals: [],
        spotters: []
    };

    onAccountChanged(state){
        this.setState(state =>{
            state.push(state);
            return state;
        })
    }

    render() {
        return (
            <>
                <Account onPlanAdded ={x=> this.onAccountChanged(x)}/>
            </>
        );
    }


}

export default AccountTab;