import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { FitnessGoal } from './../models/fitnessGoal';

export class FitnessGoalsForm extends React.Component {
    constructor(props){
           super(props)
           this.state = {
             name: '',
             type: '',
             percent: '',
             deadline: '',
             comment: ''
           }
         }

    
        onSubmit() {
            this.props.onGoalAdded(new FitnessGoal(this.state.name, this.state.type, this.state.percent, this.state.deadline, this.state.comment, new Date(), 0));
            this.setState({
                name: '',
                type: '',
                percent: '',
                deadline: '',
                comment: ''
            });
        }
    
        render() {
            return (
                

<>
            <div className="card">
               <div className="card-header"><h1>Create your fitness goals!</h1></div>
                   <div className="card-body">
                <form method="post" onSubmit={this.onPlanAdded}>
                    <div class = "form-row">
                    
                    <div class = "col">
                    <div className="form-group">
                        <label htmlFor="name">Tasks</label>
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
                            <option>Weight loss</option>
                            <option>Miles run</option>
                            <option>lifting goal</option>
                            </select>
                    </div>
                    </div>
                    </div>
                    <div class = "col">
                    <div className="form-group">
                        <label htmlFor="percent">Set value</label>
                        <input type="text"
                            id="percent"
                            name="percent"
                            className="form-control"
                            value={this.state.percent}
                            onChange={e => this.setState({ percent: e.target.value })} />
                    </div>
                    </div>

                    <div class = "col">
                    <div className="form-group">
                        <label htmlFor="deadline">Set deadline</label>
                        <input type="text"
                            id="deadline"
                            name="deadline"
                            className="form-control"
                            value={this.state.deadline}
                            onChange={e => this.setState({ deadline: e.target.value })} />
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
    
    export default FitnessGoalsForm;