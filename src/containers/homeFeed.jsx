import React, { Component } from 'react';
import {SocialList } from './socialList';

export class HomeFeed extends React.Component {
    
   render(){
       return(
<div>

<SocialList spotters = {this.state.spotters} />

</div>
);

} 
}

export default HomeFeed;