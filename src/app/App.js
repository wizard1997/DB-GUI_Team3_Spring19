import React, { Component } from "react";
import  ProductDetails from "./productDetails";
import  Rating  from "./rating";
import  ReviewForm  from "./reviewForm";
import  ReviewList  from "./reviewList";
import  Product  from "../models/product";
import  ProductReview  from "../models/productReview";

class App extends Component {
    render() {
        return (
            <>
                <ProductDetails></ProductDetails>
            </>
        );
    }
}

export default App;
