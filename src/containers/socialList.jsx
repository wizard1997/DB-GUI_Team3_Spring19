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
                {
                s.workoutplans.map((w,i) =>{
                    return(
                <div key = {i} class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text">{w.name}</p>
                    <p class="card-text">{w.type}</p>
                    <p class="card-text">{w.calories}</p>
                    <p class="card-text">{w.setTime}</p>
                    <p class="card-text">{w.date}</p>
                </div>
                    )
                }
                )
                }
                </div> 
                )
            }
            )
        }
    </div>
);

export default SocialList;