import React, { Component } from 'react';
import { WorkoutPlan } from './../models/workoutPlan';

export class fitnessForm extends React.Component {
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
                    <header> <h1>Create your workout plan!</h1></header>
                    <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Workout Name</Form.Label>
                        <Form.Control type="name" placeholder="name" 
                        value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Workout Type</Form.Label>
                        <Form.Control type="type" placeholder="type" 
                        value={this.state.type} onChange={e => this.setState({ name: e.target.value })} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Amount of calories burned</Form.Label>
                        <Form.Control type="calories" placeholder="calories" 
                        value={this.state.calories} onChange={e => this.setState({ name: e.target.value })} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>How long?</Form.Label>
                        <Form.Control type="setTime" placeholder="time" 
                        value={this.state.setTime} onChange={e => this.setState({ name: e.target.value })} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control as="textarea" rows="3"value={this.state.Comment} onChange={e => this.setState({ name: e.target.value })} />
                    </Form.Group>
                    <Button onClick={e => this.onSubmit()}
                            variant="primary">
                        Submit
                    </Button>
                    </Form>;
                </>
            );
        }
    }
    
    export default fitnessForm;