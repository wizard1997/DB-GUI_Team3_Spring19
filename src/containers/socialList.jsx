import React from 'react';

export const SocialList = (props) => (
    <div>
        <header>
            <h1>My Feed </h1>
            {!props.spotters.length && <div className= "alert alert-primary">
                    Add some Spotters to follow!
                </div>
            }
        </header>
        {
            props.spotters.map((s,i) =>{
                return (
                    
                <div key = {i} class="card" >
                <div class="card-header">
                {s.userName}
                </div>
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text">{s.workoutplans.name}</p>
                    <p class="card-text">{s.workoutplans.date}</p>
                </div>
                </div> 
                )
            }
            )
        }
    </div>
);

export default SocialList;