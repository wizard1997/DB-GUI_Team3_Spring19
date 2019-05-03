import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { WorkoutPlan } from '../models/workoutPlan';

export class WorkoutForm extends React.Component {
    constructor(props){
           super(props)
           this.state = {
             name: '',
             type: '',
             calories: '',
             setTime: '',
             comment: ''
           }
         }

    
        onSubmit() {
            this.props.onPlanAdded(new WorkoutPlan(this.state.name, this.state.type, this.state.calories, this.state.setTime, this.state.comment, new Date()));
            this.setState({
                name: '',
                type: '',
                calories: '',
                setTime: '',
                comment: ''
            });
        }
    
        render() {
            return (
                

<>
                <div className="card">
               <div className="card-header"><h1>Create your Workout Plan!</h1></div>
                   <div className="card-body">
                <form method="post" onSubmit={this.onPlanAdded}>
                    <div class = "form-row">
                    
                    <div class = "col">
                    <div className="form-group">
                        <label htmlFor="name">Workout name</label>
                        <input type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })} />
                    </div>
                    </div>

                    <div class = "col">
                    <div className="form-group mx-sm-3 mb-2">
                        <label htmlFor="type">Type</label>
                        <select id="Type"
                            name="type"
                            className="form-control"
                            value={this.state.type}
                            onChange={e => this.setState({ type: e.target.value })} >
                            <option></option>
                            <option>Cardiovascular</option>
                            <option>Anaerobic</option>
                            <option>Flexibility</option>
                            <option>Muscular strenght</option>
                            <option>Muscular endurance</option>
                            </select>
                    </div>
                    </div>
                    </div>
                    <div class = "form-row">
                    <div class = "col">
                    <div className="form-group">
                        <label htmlFor="calories">Calories</label>
                        <input type="text"
                            id="calories"
                            name="calories"
                            className="form-control"
                            value={this.state.calories}
                            onChange={e => this.setState({ calories: e.target.value })} />
                    </div>
                    </div>

                    <div class = "col">
                    <div className="form-group">
                        <label htmlFor="setTime">How long?</label>
                        <input type="text"
                            id="setTime"
                            name="setTime"
                            className="form-control"
                            value={this.state.setTime}
                            onChange={e => this.setState({ setTime: e.target.value })} />
                    </div>
                    </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="comment">Comment</label>
                        <textarea rows="3"
                            id="comment"
                            name="comment"
                            className="form-control"
                            value={this.state.comment}
                            onChange={e => this.setState({ comment: e.target.value })} />
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
    }
    
    export default WorkoutForm;