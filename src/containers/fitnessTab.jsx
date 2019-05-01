import React, { Component } from 'react';
import {WorkoutForm} from './workoutForm';
import {FitnessGoalsForm} from './fitnessGoalsForm';
import {FitnessGoalsList} from './fitnessGoalsList';
import {UserRepository} from '../api/userRepository';
import {WorkoutList} from './workoutList';
import {WorkoutPlan} from '../models/workoutPlan';
import { Tab, Tabs } from "react-bootstrap";
import {Users} from '../models/users';


export class FitnessTab extends React.Component {
  userRepository = new UserRepository;
    
        state = {
            id: 0,
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
            <div>

<Tabs defaultActiveKey="workoutplan" id="Fitness Tab">

  <Tab eventKey="workoutplan" title="Workout Plan">
  <WorkoutList plans ={this.state.workoutplans}/>
  <WorkoutForm onPlanAdded ={x=> this.onPlanAdded(x)}/>
  </Tab>

  <Tab eventKey="goals" title="Fitness Goals">
  <FitnessGoalsList goals= {this.state.fitnessGoals}/>
  <FitnessGoalsForm onGoalAdded ={x=> this.onGoalAdded(x)}/>
  </Tab>

</Tabs>
</div>
            </>
        );
    }
    componentDidMount() {
        let userId = + this.props.match.params.userId;
        if (userId) {
            this.userRepository.getAllWorkoutplan(userId)
                .then(user => this.setState(user));
        }
    }
}

export default FitnessTab;