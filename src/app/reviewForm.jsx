import React, { Component } from 'react';
import ProductReview from '../models/productReview';
import Rating from './rating';

export class ReviewForm extends Component {
    state = {
        userName: '',
        rating: '',
        comment: ''
    }

    onSubmit(e) {

        e.preventDefault();

        if (!this.isFormValid()) {
            this.setState({ error: "All fields are required." });
            return;
        }

        let { reviews } = this.state;

        this.props.addReview(reviews);

        this.setState({
            review: { ...this.state, username: "", rating: "", comment: "" }
        })

    }

    isFormValid() {
        return this.state.name !== "" && this.state.message !== "";
    }

    render() {
        return (
            <>
                <div className="card">
                    <div className="card-header"><h3>Add Review</h3></div>
                        <div className="card-body">
                            <form method="post" onSubmit={this.onSubmit}>
                                <div className="form-group col-md-2">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text"
                                        id="name"
                                        name="name"
                                        className="form-control"
                                        value={this.state.userName}
                                        onChange={e => this.setState({ userName: e.target.value })} />
                                </div>

                                <div className="form-group col-md-2">
                                    <label htmlFor="rating">Rating</label>
                                    <select className="form-control" id="rating" name="rating" onChange={e => this.setState({ rating: e.target.value })}>
                                        <option></option>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    <Rating value={this.state.Rating}/>
                                </div>
                    
                                <div className="form-group">
                                    <label htmlFor="rating">Comment</label>
                                        <textarea
                                            onChange={e => this.setState({ comment: e.target.value })}
                                            value={this.state.comment}
                                            className="form-control"
                                            name="comment"
                                            rows="5"
                                        />
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

export default ReviewForm;