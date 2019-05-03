import React from 'react';
import { Link } from 'react-router-dom';

export const AccountList = (props) => (
    <div>
        <header>
            <h2>Users ({props.users.length})</h2>
            {!props.users.length && <div className="alert alert-primary">
                You haven't added any users yet
                        </div>
            }
        </header>

        <table className="table table-striped table-condensed">
            <thead>
                <tr>
                    <th>id</th>
                    <th>User Name</th>
                    <th>Age</th>
                    <th>Height</th>
                    <th>Weight</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.map((a, i) =>
                        <tr key={i}>
                            <td>{a.user_id}</td>
                            <td>{a.username}</td>
                            <td>{a.age}</td>
                            <td>{a.height}</td>
                            <td>{a.weight}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
);

export default AccountList;
