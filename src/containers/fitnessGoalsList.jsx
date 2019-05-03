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
                    
                <div key = {i} className="card" >
                <div className="card-header">
                {g.name}
                </div>
                
                <div className="card-body">
                    <h5 className="card-title">{g.name}</h5>
                    <p className="card-text">{g.type}</p>
                    <p className="card-text">{g.deadline}</p>
                    <ProgressBar now={(g.currentPercent/g.percent)*100} label={`${(g.currentPercent/g.percent)*100}%`} />
                </div>
                
                </div> 
                )
            }
            )
        }
    </div>
);

export default FitnessGoalsList;