import React, { Component } from 'react';
import {SocialList } from './socialList';
import {FitnessForm} from './fitnessForm';
import {Users} from '../models/users';

export class HomeFeed extends React.Component {
    Users = [
        new Users(
            "Benny",
            "link",
            20,
            5.9,
            175,
            [],
            [],
            []
        )
    ];

    
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

<FitnessForm onPlanAdded ={x=> this.onPlanAdded(x)}/>

</div>

);

} 


}

export default HomeFeed;