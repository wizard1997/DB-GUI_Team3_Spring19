import React, { Component } from 'react';


export class ChangeID extends React.Component {
    state = {
        user_id: 0
    }

    onSubmit() {
        alert(this.state.user_id);
        this.props.onChangeID(this.state.user_id);
        this.setState({
            user_id: 0
        });
        alert(this.state.user_id);
    }

    render() {
        return (
            <>
                <div className="card">
                    <div className="card-header"><h1>Change ID</h1></div>
                    <div className="card-body">
                        <form method="post" onSubmit={this.onChangeID}>
                            <div class="form-row">
                                <div class="col">
                                    <div className="form-group">
                                        <label htmlFor="id">ID: </label>
                                        <input type="number"
                                            id="id"
                                            name="id"
                                            className="form-control"
                                            value={this.state.user_id}
                                            onChange={e => this.setState({ user_id: e.target.value })} />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div>
                            <button onClick={e => this.onSubmit()}
                                className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ChangeID;

