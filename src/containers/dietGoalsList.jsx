import React from "react";

export const DietGoalsList = (props) => (
    <div>
        <header>
            <h2>Diet Plans ({props.dietGoals.length})</h2>
            {!props.dietGoals.length && <div className="alert alert-primary">
                You haven't created any diet plans yet
                    </div>
            }
        </header>
        <table className="table table-striped table-condensed">
    <thead>
        <tr>
            <th>Diet Plan ID</th>
            <th>Name</th>
            <th>Daily Calories</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        {props.dietGoals.map((a, i) => (
            <tr key={i}>
                <td>{a.fpID}</td>
                <td>{a.name}</td>
                <td>{a.dailyCalories}</td>
                <td>{a.details}</td>
            </tr>
        ))}
    </tbody>
</table>
    </div >

);

/*
<table className="table table-striped table-condensed">
    <thead>
        <tr>
            <th>Diet Plan ID</th>
            <th>Name</th>
            <th>Daily Calories</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        {props.dietGoals.map((a, i) => (
            <tr key={i}>
                <td>{a.fpID}</td>
                <td>{a.name}</td>
                <td>{a.dailyCalories}</td>
                <td>{a.details}</td>
            </tr>
        ))}
    </tbody>
</table>
 */

export default DietGoalsList;
