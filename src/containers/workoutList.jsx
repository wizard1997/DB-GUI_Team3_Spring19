import React from 'react';

export const WorkoutList = (props) => (
    <div>
        <header>
            <h1>My Fitness plans! </h1>
            {!props.plans.length && <div className= "alert alert-primary">
                    Create some plans!
                </div>
            }
        </header>
        {
            props.plans.map((p,i) =>{
                return (
                    
                <div key = {i} className="card" >
                <div className="card-header">
                {p.name}
                </div>
                
                <div className="card-body">
                    <h5 className="card-title">{p.type}</h5>
                    <p className="card-text">{p.calories}</p>
                    <p className="card-text">{p.setTime}</p>
   
                </div>
                
                </div> 
                )
            }
            )
        }
    </div>
);

export default WorkoutList;