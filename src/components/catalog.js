import React from 'react';
import ProductCard from "./productCard"

const Catalog = ({ products }) => {

    return (
        <div className="row">
            {Object.keys(products).map((item, product) => (
                <ProductCard key={item} product={products[product]} />
            ))}
        </div>
    )
}

export default Catalog