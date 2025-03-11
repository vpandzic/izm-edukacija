import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(localCart);
    }, []);

    const totalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            const price = item.price || 0; // Ensure price is a number
            const quantity = item.quantity || 0; // Ensure quantity is a number
            total += price * quantity;
        });
        return total.toFixed(2); // Ensures proper formatting
    };
    
    const removeItem = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    }

    return (
        <>
            <h1>CartPage</h1>
            <div className="py-5 text-center">
                <img className="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h2>Checkout form</h2>
                <p className="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
            </div>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Single Price</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                {cart.map((item) => (
                    <tr key={item.id}>
                        <td><img src={item.thumbnail} alt={item.title} width="44" /></td>
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td>{item.price > 0 ? item.price * item.quantity : ""}</td>
                        <td><button onClick={() => removeItem(item.id)}>X</button></td>
                    </tr>
                ))}                    
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="4">Total price:</td>
                        <td><span>{cart.length > 0 ? totalPrice() : "0.00"}</span> {/* Avoids NaN */}</td>
                    </tr>
                </tfoot>
            </table>
            <Link to="/checkout" className="btn btn-success">Checkout</Link>
        </>
    );
};

export default CartPage;
