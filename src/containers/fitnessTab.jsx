import React, { Component } from 'react';
import {FitnessForm} from './fitnessForm';
import {WorkoutPlan} from '../models/workoutPlan';
import {Users} from '../models/users';


export class FitnessTab extends React.Component {
  
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

    render() {
        return (
            <>
    <FitnessForm onPlanAdded ={x=> this.onPlanAdded(x)}/>
            </>
        );
    }


}

export default FitnessTab;