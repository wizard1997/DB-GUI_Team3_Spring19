import React from 'react';
import {ProgressBar} from 'react-bootstrap';

export const FitnessGoalsList = (props) => (
    <div>
        <header>
            <h1>My Fitness Goals! </h1>
            {!props.goals.length && <div className= "alert alert-primary">
                    Create some goals!
                </div>
            }
        </header>
        {
            props.goals.map((g,i) =>{
                return (
                    
                <div key = {i} class="card" >
                <div class="card-header">
                {g.name}
                </div>
                
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text">{g.type}</p>
                    <p class="card-text">{g.deadline}</p>
                    <ProgressBar now={60} />;
                </div>
                
                </div> 
                )
            }
            )
        }
    </div>
);

export default FitnessGoalsList;