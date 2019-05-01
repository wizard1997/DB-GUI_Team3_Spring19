import React, { Component } from 'react';
import { Food } from '../models/food';


export class DietForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            type: 0,
            calories: '',
            details: ''
        }
    }

    onSubmit() {
        this.props.onFoodAdded(new Food(this.state.name, this.state.type, this.state.calories, new Date(), this.state.details));
        this.setState({
            name: '',
            type: 0,
            calories: '',
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
                    <div class = "form-row">
                    
                    <div class = "col">
                    <div className="form-group">
                        <label htmlFor="name">Food</label>
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
                            <option>Grain</option>
                            <option>Fruit</option>
                            <option>Vegetable</option>
                            <option>Meat</option>
                            <option>Sweets</option>
                            <option>Junk Food</option>
                            </select>
                    </div>
                    </div>
                    </div>
                    <div class = "form-row">
                    <div class = "col">
                    <div className="form-group">
                        <label htmlFor="calories">calories</label>
                        <input type="text"
                            id="calories"
                            name="calories"
                            className="form-control"
                            value={this.state.calories}
                            onChange={e => this.setState({ calories: e.target.value })} />
                    </div>
                    </div>

                   
                    </div>

                    <div className="form-group">
                        <label htmlFor="details">details</label>
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
}

export default DietForm;

