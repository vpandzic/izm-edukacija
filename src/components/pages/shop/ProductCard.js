import React from "react";
import { Link } from "react-router-dom";
import './Shop.css';


const ProductCard = ({ product }) => {

    const addToCart = () => {
        
        let cart = JSON.parse(localStorage.getItem('cart')) || ['']
        const productInCart = cart.find((item) => item.id === product.id);
        if(productInCart) {
            productInCart.quantity += 1
        }
        else {
            cart.push({
                id: product.id,
                thumbnail: product.thumbnail,
                title: product.title,
                price: product.price,
                quantity: 1
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(cart);
    
    }
    return (
        <div class="productCard card" key={product.id}>
            <div class="product-image">
                <Link to={'/shop/' + product.id}><img src={product.thumbnail} className="card-img" alt={product.title} /></Link>
                <Link to={'/shop/' + product.id}><h4 className="card-title">{product.title}</h4></Link>

                <p className="card-text">{product.description}</p>

                <button className="btn btn-success" onClick={addToCart}>{product.price}</button>
            </div>
        </div>
    )
}

export default ProductCard;