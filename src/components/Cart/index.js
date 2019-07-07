import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { removeProduct, updateCart } from "../../actions/cart";
import InCartProduct from "./InCartProduct/InCartProduct";
import { formatPrice } from "../../util/formatPrice";

class Cart extends Component {
    static propTypes = {
        cartProducts: PropTypes.array.isRequired,
        addedProduct: PropTypes.object,
        removedProduct: PropTypes.object,
        removeProduct: PropTypes.func,
        updateCart: PropTypes.func.isRequired
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.addedProduct !== this.props.addedProduct) {
            this.addProduct(nextProps.addedProduct);
        }

        if (nextProps.removedProduct !== this.props.removedProduct) {
            this.removeProduct(nextProps.removedProduct);
        }
    }

    addProduct = product => {
        const { cartProducts, updateCart } = this.props;
        let productAlreadyInCart = false;

        cartProducts.forEach(cp => {
            if (cp.name === product.name) {
                productAlreadyInCart = true;
                cp.quantity++;
                cp.productTotal = formatPrice(cp.quantity * cp.price);
            }
        });

        if (!productAlreadyInCart) {
            if (product.quantity === undefined) {
                cartProducts.push({
                    ...product,
                    quantity: 1,
                    productTotal: product.price
                });
            }
        }
        updateCart(cartProducts);
    };

    removeProduct = product => {
        const { cartProducts, updateCart } = this.props;
        const index = cartProducts.findIndex(p => p.name === product.name);
        if (index >= 0) {
            cartProducts.splice(index, 1);
        }
        updateCart(cartProducts);
    };

    calculateTotalPrice = productsArray => {
        let total = 0.0;
        productsArray.forEach(p => {
            total = parseFloat(total) + parseFloat(p.productTotal);
        });
        return total;
    };

    render() {
        const { cartProducts, removeProduct } = this.props;

        const products = cartProducts.map((p, index) => {
            return (
                <InCartProduct
                    product={p}
                    removeProduct={removeProduct}
                    key={index}
                />
            );
        });

        return (
            <div>
                <div className="inCartProductList">
                    {products}
                    {!products.length && (
                        <p>
                            Add some products to the cart <br />
                            <br />
                        </p>
                    )}
                </div>
                <br />

                <div>
                    <div>
                        <b>Overall Total</b>
                        <hr />
                    </div>
                    <div>
                        {
                            <p>{`$${formatPrice(
                                this.calculateTotalPrice(
                                    this.props.cartProducts,
                                    "productTotal"
                                )
                            )}`}</p>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cartProducts: state.cart.products,
    addedProduct: state.cart.addedProduct,
    removedProduct: state.cart.removedProduct,
    total: state.cart.total
});

export default connect(
    mapStateToProps,
    { removeProduct, updateCart }
)(Cart);
