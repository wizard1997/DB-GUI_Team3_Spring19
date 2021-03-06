import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Users } from './../models/users';

export class Account extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.currentUser.id,
            name: props.currentUser.name,
            email: props.currentUser.email,
            password: props.currentUser.password,
            profilePic: [],
            age: props.currentUser.age,
            height: props.currentUser.height,
            weight: props.currentUser.weight,
            workoutplans: [],
            fitnessGoals: [],
            spotters: [],
        }
    }
    onCancel() {
        alert("canceled")
    }

    onSubmit() {
        this.props.onAccountModified(new Users(this.state.name, this.state.email, this.state.password, this.state.age, this.state.height, this.state.weight));
        this.setState({
            id: '',
            name: '',
            email: '',
            password: '',
            profilePic: [],
            age: 0,
            height: 0,
            weight: 0,
            workoutplans: [],
            fitnessGoals: [],
            spotters: []
        });
    }

    render() {
        return (
            <>
                <div className="card">
                    <div className="card-header"><h1>Create Account</h1></div>
                    <div className="card-body">
                        <form method="post" onSubmit={this.onAccountModified}>
                            <div class="col">
                                <div className="form-group">
                                    <label htmlFor="setTime">Name</label>
                                    <input type="text"
                                        id="setTime"
                                        name="setTime"
                                        className="form-control"
                                        value={this.state.setTime}
                                        onChange={e => this.setState({ name: e.target.value })} />
                                </div>
                            </div>
                            <div class="col">
                                <div className="form-group">
                                    <label htmlFor="setTime">Email</label>
                                    <input type="text"
                                        id="setTime"
                                        name="setTime"
                                        className="form-control"
                                        value={this.state.setTime}
                                        onChange={e => this.setState({ email: e.target.value })} />
                                </div>
                            </div>
                            <div class="col">
                                <div className="form-group">
                                    <label htmlFor="setTime">Password</label>
                                    <input type="text"
                                        id="setTime"
                                        name="setTime"
                                        className="form-control"
                                        value={this.state.setTime}
                                        onChange={e => this.setState({ password: e.target.value })} />
                                </div>
                            </div>
                            <div class="col">
                                <div className="form-group">
                                    <label htmlFor="setTime">Age</label>
                                    <input type="text"
                                        id="setTime"
                                        name="setTime"
                                        className="form-control"
                                        value={this.state.setTime}
                                        onChange={e => this.setState({ age: e.target.value })} />
                                </div>
                            </div>
                            <div class="col">
                                <div className="form-group">
                                    <label htmlFor="setTime">Height</label>
                                    <input type="text"
                                        id="setTime"
                                        name="setTime"
                                        className="form-control"
                                        value={this.state.setTime}
                                        onChange={e => this.setState({ height: e.target.value })} />
                                </div>
                            </div>
                            <div class="col">
                                <div className="form-group">
                                    <label htmlFor="setTime">Weight</label>
                                    <input type="text"
                                        id="setTime"
                                        name="setTime"
                                        className="form-control"
                                        value={this.state.setTime}
                                        onChange={e => this.setState({ weight: e.target.value })} />
                                </div>
                            </div>

                        </form>
                        <div>
                            <button onClick={e => this.onSubmit()}
                                className="btn btn-primary">
                                Save
                            </button>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Account;