import React from "react";

export const AccountInfo = (props) => (
    <>
        <header>
            <h2>Account Information</h2>
        </header>

        <div className="card" >
            <div className="card-header">
                
            </div>
            {
                props.users.map((a, i) =>
                    <div className="card-body">
                        <p className="card-title">User ID: {a.user_id}</p>
                        <p className="card-text">Username: {props.users[0].username}</p>
                        <p className="card-text">Email: {props.users[0].email}</p>
                        <p className="card-text">First Name: {props.users[0].f_name}</p>
                        <p className="card-text">Last Name: {props.users[0].l_name}</p>
                        <p className="card-text">Password: {props.users[0].pass}</p>
                        <p className="card-text">Phone #: {props.users[0].phone}</p>
                        <p className="card-text">Height: {props.users[0].height}</p>
                        <p className="card-text">Weight: {props.users[0].weight}</p>
                    </div>
                )
            }
        </div>
    </>
);

export default AccountInfo;
