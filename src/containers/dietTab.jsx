import React, { Component } from 'react';
import { DietForm } from './dietForm';
import { Food } from '../models/food';
import { Users } from '../models/users';


export class DietTab extends React.Component {

    state = {
        userName: '',
        profilePic: '',
        diet: [],
        dietGoals: []
    };

    onFoodAdded(Food) {
        this.setState(state => {
            state.diet.push(Food);
            return state;
        })
    }

    nav_link() {
        return (
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Diet</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{this.state.userName}</li>
                </ol>
            </nav>
        )
    }
/*
    jumbo() {
        return (
            <div class="jumbotron">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-offset-2 col-xs-8">
                            <div>
                                <img src={"http://johnlawrimore.com/smu/" + this.state.imageName} />
                            </div>
                        </div>
                    </div>
                </div>

                <ReviewList reviews={this.state.reviews} />
                <ReviewForm addReview={review => this.addReview(review)} />
            </div>
        )
    }
*/
    render() {
        return (
            <>
                <DietForm onFoodAdded={x => this.onFoodAdded(x)} />
            </>
        );
    }


}

export default DietTab;

