import React, { Component } from 'react';
import {SocialList } from './socialList';
import {WorkoutForm} from './workoutForm';
import {Users} from '../models/users';

export class HomeFeed extends React.Component {
    
        state = {
            userName: '',
            profilePic: '',
            age: '',
            height: 0,
            weight: '',
            workoutplans: [],
            fitnessGoals: [],
            spotters: []
        };

        onPlanAdded(workoutPlan){
            this.setState(state =>{
                state.workoutplans.push(workoutPlan);
                return state;
            })
        }
   render(){
       return(
<div>
<SocialList spotters = {this.state.spotters} />
</div>

);

} 


}

export default HomeFeed;