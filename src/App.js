import React, { Component } from "react";
import ProductsList from "./components/ProductsList/index";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchProducts } from "./actions/products";
import Cart from "./components/Cart/index";
import "./App.css";

class App extends Component {
    static propTypes = {
        fetchProducts: PropTypes.func.isRequired,
        products: PropTypes.array.isRequired
    };

    render() {
        const { products } = this.props;

        return (
            <div className="App">
                <div id="productsList">
                    <div id="column1">
                        <h1>Products</h1>
                        <ProductsList products={products} />
                    </div>
                    <div id="column2">
                        <h1>Cart</h1>
                        <Cart />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.products
});

export default connect(
    mapStateToProps,
    { fetchProducts }
)(App);
