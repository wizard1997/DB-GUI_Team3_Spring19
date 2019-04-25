import React, { Component } from 'react';
import {FitnessForm} from './fitnessForm';
import {WorkoutPlan} from '../models/workoutPlan';
import {Users} from '../models/users';


export class FitnessTab extends React.Component {


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
 

    onPlanAdded(WorkoutPlan){
        this.setState(state =>{
            state.workoutplans.push(WorkoutPlan);
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