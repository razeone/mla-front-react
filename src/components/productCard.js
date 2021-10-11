import React from 'react';

const ProductCard = (product, key) => {
    let prod = product.product;
    return (
    <div className="card">
        <div className="card-body" id={key}>
            <div className="card-image"><img alt="product-thumbnail" src={prod.thumbnail}></img></div>
            <div className="card-title"><strong>{prod.title}</strong></div>
            <div className="card-subtitle"><strong>Price:</strong> {prod.price} {prod.currency_id}</div>
            <p className="card-text">
                <strong>Available in stock: </strong>{prod.available_quantity}
                <strong> Condition: </strong>{prod.condition}
            </p>
        </div>
    </div>
    )
}

export default ProductCard