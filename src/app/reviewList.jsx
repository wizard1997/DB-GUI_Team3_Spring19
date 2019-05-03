import React from "react";
import ProductReview from "../models/productReview";
import Rating from "./rating";

export const ReviewList = (props) => (
    <div>
        <h2>Product Reviews ({props.reviews.length})</h2>
        <table className="table table-striped table-condensed">
            <thead>
                <tr>
                    <th>Rating</th>
                    <th>Username</th>
                    <th>Date</th>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody>
                {props.reviews.map((a, i) => (
                    <tr key={i}>
                        <td><Rating>{a.rating}</Rating></td>
                        <td>{a.userName}</td>
                        <td>{a.date}</td>
                        <td>{a.comment}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default ReviewList;
