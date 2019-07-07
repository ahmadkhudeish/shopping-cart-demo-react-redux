import React from "react";

import ProductItem from "./ProductItem/ProductItem";

const ProductList = ({ products }) => {
    return products.map((p, index) => {
        return <ProductItem product={p} key={index} />;
    });
};

export default ProductList;
