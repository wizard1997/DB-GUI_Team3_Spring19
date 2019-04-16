import React from 'react';

export const SoicalList = (props) => (
    <div>
        <header>
            <h1>My Feed </h1>
            {!props.reviews.length && <div className= "alert alert-primary">
                    Be the first to add a review!
                </div>
            }
        </header>
        {
            props.spotters.map((r,i) =>{
                return (
                    
                <div key = {i} class="card" >
                <div class="card-header">
                {r.trainerName}
                </div>
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text">{r.workoutplans.name}</p>
                    <p class="card-text">{r.workoutplans.date}</p>
                </div>
                </div> 
                )
            }
            )
        }
    </div>
);

export default ReviewList;