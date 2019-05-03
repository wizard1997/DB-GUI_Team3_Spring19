import React, { Component } from 'react';
import { DietForm } from './dietForm';
import { DietList } from './dietList';
import { DietGoals } from './dietGoals'
import { DietGoalsList } from './dietGoalsList';
import { Food } from '../models/food';
import { FoodPlan } from '../models/foodPlan';
import { Users } from '../models/users';
import { Tab, Tabs } from "react-bootstrap";

export class DietTab extends React.Component {

    state = {
        diet: [],
        dietGoals: []
    };

    onFoodAdded(Food) {
        this.setState(state => {
            state.diet.push(Food);
            return state;
        })
    }

    onPlanAdded(FoodPlan) {
        this.setState(state => {
            state.dietGoals.push(FoodPlan);
            return state;
        })
    }

    render() {
        return (
            <>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="dietGoals" title="Diet Goals">
                        <DietGoalsList dietGoals={this.state.dietGoals} />
                        <DietGoals onPlanAdded={x => this.onPlanAdded(x)} />
                    </Tab>

                    <Tab eventKey="diet" title="Track Food">
                        <DietList diet={this.state.diet} />
                        <DietForm onFoodAdded={x => this.onFoodAdded(x)} />
                    </Tab>
                </Tabs>  
            </>
        );
    }
}

export default DietTab;

