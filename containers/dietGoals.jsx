import React, { Component } from 'react';
import Food from '../models/food';
import FoodPlan from '../models/foodPlan';

export class DietGoals extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fpID: 0,
            name: '',
            dailyCalories: 0,
            details: ''
        }
    }

    onSubmit() {
        this.props.onPlanAdded(new FoodPlan(this.state.fpID, this.state.name, this.state.dailyCalories, this.state.details));
        this.setState({
            fpID: 0,
            name: '',
            dailyCalories: 0,
            details: ''
        });
    }

    render() {
        return (
            <>
                <div className="card">
                    <div className="card-header"><h1>Create your diet plan!</h1></div>
                    <div className="card-body">
                        <form method="post" onSubmit={this.onPlanAdded}>
                            <div class="form-row">

                                <div class="col">
                                    <div className="form-group">
                                        <label htmlFor="name">Title</label>
                                        <input type="text"
                                            id="name"
                                            name="name"
                                            className="form-control"
                                            value={this.state.name}
                                            onChange={e => this.setState({ name: e.target.value })} />
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col">
                                    <div className="form-group">
                                        <label htmlFor="dailyCalories">Daily Calories</label>
                                        <input type="text"
                                            id="dailyCalories"
                                            name="dailyCalories"
                                            className="form-control"
                                            value={this.state.dailyCalories}
                                            onChange={e => this.setState({ dailyCalories: e.target.value })} />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="details">Details</label>
                                <textarea rows="3"
                                    id="details"
                                    name="details"
                                    className="form-control"
                                    value={this.state.details}
                                    onChange={e => this.setState({ details: e.target.value })} />
                            </div>

                        </form>
                        <div>
                            <button onClick={e => this.onSubmit()}
                                className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
} export default DietGoals;