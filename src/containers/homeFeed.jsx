import React, { Component } from 'react';
import {SocialList } from './socialList';
import {WorkoutForm} from './workoutForm';
import { Users } from '../models/users';
import { UserRepository } from '../api/userRepository';
import { AccountList } from './accountList';
import { getUser, getUsers } from '../api/userRepository';
import { Login } from './Login';
import { ChangeID } from './changeID';

export class HomeFeed extends React.Component {
    
    state = {
        user_id: 0,
        users: []
    };

   render(){
       return(
            <div>
               {/*<SocialList spotters = {this.state.spotters} />
                <WorkoutForm onPlanAdded ={x=> this.onPlanAdded(x)}/>
                
               <AccountList users={this.state.users}/>
               
               <Login users={this.state.users} />*/}

               <AccountList users={this.state.users} />
            </div>
        );
    } 

    componentDidMount() {
        getUsers()
            .then(users => this.setState({ users }));
    }
}

export default HomeFeed;