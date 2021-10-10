import React from 'react';
import ProductCard from "./productCard"

const Catalog = ({ products }) => {

    if(products.length > 0){
        let filteredProducts = products.filter( product => product.condition !== 'new' );
        console.log(filteredProducts)
    }
    

    return (
        <div className="row">
            {Object.keys(products).map((item, product) => (
                <ProductCard key={item} product={products[product]} />
            ))}
        </div>
    )
}

export default Catalog