import React, { Component } from 'react';
import {FitnessForm} from './fitnessForm';
import {WorkoutPlan} from './models/workoutPlan';


export class FitnessTab extends React.Component {

 
    user = [
        new Product(
            1,
            "Jif Peanut Butter, 40 ounce",
            "7g of Protein per serving with no preservatives, artifical flavors or colors.",
            7.99,
            "http://johnlawrimore.com/smu/101.png",
            []
        )
    ];

    state = {
        userName: '',
        profilePic: '',
        description: '',
        price: 0,
        imageURL: '',
        reviews: []
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