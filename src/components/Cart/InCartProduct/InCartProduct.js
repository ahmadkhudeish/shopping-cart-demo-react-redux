import React, { Component } from "react";
import PropTypes from "prop-types";

import { formatPrice } from "../../../util/formatPrice";
import { Button } from "semantic-ui-react";
class InCartProduct extends Component {
    static propTypes = {
        product: PropTypes.object.isRequired,
        removeProduct: PropTypes.func.isRequired
    };

    render() {
        const { product, removeProduct } = this.props;

        return (
            <div className="inCartProduct">
                <div>
                    <p>
                        <b>Name:</b> {product.name}
                    </p>
                </div>
                <div>
                    <b>Quantity:</b> {product.quantity}
                </div>
                <div>
                    <p>
                        <b>Price: </b>
                        {`$${formatPrice(product.price)}`}
                    </p>
                </div>
                <p>
                    <b>Product Total:</b> {product.productTotal}
                </p>
                <Button
                    className="removeProduct"
                    onClick={() => removeProduct(product)}
                >
                    Remove
                </Button>
            </div>
        );
    }
}

export default InCartProduct;
