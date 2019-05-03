import React from "react";

export const DietList = (props) => (
    <div>
        <header>
            <h2>Food History ({props.diet.length})</h2>
            {!props.diet.length && <div className="alert alert-primary">
                You haven't added any foods yet
                    </div>
            }
        </header>
        <table className="table table-striped table-condensed">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Calories</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {props.diet.map((a, i) => (
                    <tr key={i}>
                        <td>{a.name}</td>
                        <td>{a.type}</td>
                        <td>{a.calories}</td>
                        <td>{a.details}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div >

);
export default DietList;
