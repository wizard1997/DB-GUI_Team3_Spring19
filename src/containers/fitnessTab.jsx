import React, { Component } from 'react';
import {WorkoutForm} from './workoutForm';
import {WorkoutPlan} from '../models/workoutPlan';
import { Tab, Tabs } from "react-bootstrap";
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
      

        onGoalAdded(fitnessGoal){
            this.setState(state =>{
                state.fitnessGoals.push(fitnessGoal);
                return state;
            })
        }
 

    onPlanAdded(workoutPlan){
        this.setState(state =>{
            state.workoutplans.push(workoutPlan);
            return state;
        })
    }

    render() {
        return (
            <>
            <Tabs defaultActiveKey="workoutplan" id="uncontrolled-tab-example">
  <Tab eventKey="workoutplan" title="Workout Plan">
  <WorkoutForm onPlanAdded ={x=> this.onPlanAdded(x)}/>
  </Tab>
  <Tab eventKey="goals" title="Fitness Goals">
  <div><h1>WIP</h1></div>
  </Tab>
  </Tabs>
    
            </>
        );
    }


}

export default FitnessTab;