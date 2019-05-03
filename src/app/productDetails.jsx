import React, { Component } from 'react';
import Product from '../models/product';
import ProductReview from '../models/productReview';
import Ratings from './rating';
import ReviewForm from './reviewForm';
import ReviewList from './reviewList';

class ProductDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: 0
        };
        this.addReview = this.addReview.bind(this);
    }

    products = [
        new Product(
        1,
        "Jif Peanut Butter, 40 ounce",
        "7g of Protein per serving with no preservatives, artifical flavors or colors.", 
        7.99,
        "http://johnlawrimore.com/smu/101.png",
        [])
    ]

    getReviews() {
        return (this.reviews);
    }

    addReview(reviews) {
        this.products[this.state.product].reviews.push(reviews);
    }

    render() {

        return (
            <>

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Tasty Snacks</a></li>
                        <li class="breadcrumb-item active" aria-current="page">{this.products[this.state.product].name}</li>
                    </ol>
                </nav>


                <div class="jumbotron">

                    <div class="container">
                        <div class="row">
                            <div class="col-xs-offset-2 col-xs-8">
                                <div className="jumboImage">
                                    <img src={this.products[this.state.product].imageURL}></img>
                                </div>
                            </div>

                            <div class="col-xs-2">
                                <h1 className="jumboName">{this.products[this.state.product].name}</h1>
                                <p className="badge badge-primary badge-lg">{this.products[this.state.product].price}</p>
                                <p className="jumboDesciption">{this.products[this.state.product].description}</p>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="reviews">
                    <ReviewList reviews={this.products[this.state.product].reviews} />
                    {
                        !this.products[this.state.product].reviews.length
                        &&
                        <div className="alert alert-primary">
                            Be the first to leave a review of {this.products[this.state.product].name}
                        </div>
                    }

                    <ReviewForm addReview={this.addReview} />
                </div>

            </>
        );
    }
}

export default ProductDetails;