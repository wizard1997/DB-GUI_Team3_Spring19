import React, { Component } from 'react';
import {SocialList } from './socialList';

export class HomeFeed extends React.Component {
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

   render(){
       return(
<div>

<SocialList spotters = {this.state.spotters} />

</div>
);

} 

componentDidMount() {
    let userId = + this.props.match.params.userId;
    if (userId) {
        this.productRepository.getProduct(userId)
            .then(user => this.setState(user));
    }
}
}

export default HomeFeed;