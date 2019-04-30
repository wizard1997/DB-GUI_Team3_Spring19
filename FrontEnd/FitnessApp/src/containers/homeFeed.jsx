import {SocialList } from './socialList';

export class HomeFeed extends React.Component {
    
   render(){
<div>

<SocialList trainers = {this.state.trainers} />
</div>
} 
}

export default HomeFeed;