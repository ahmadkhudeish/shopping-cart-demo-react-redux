import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { formatPrice } from "../../../util/formatPrice";
import { addProduct } from "../../../actions/cart";

const ProductItem = ({ product, addProduct }) => {
    return (
        <div className="product">
            <p className="productName">{product.name}</p>
            <div className="productPrice">
                <b>${formatPrice(product.price)}</b>
            </div>
            <div
                className="addToCartButton"
                onClick={() => addProduct(product)}
            >
                Add to cart
            </div>
        </div>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
    addProduct: PropTypes.func.isRequired
};

export default connect(
    null,
    { addProduct }
)(ProductItem);
