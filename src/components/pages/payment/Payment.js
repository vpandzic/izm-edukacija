import React, { useEffect, useState } from "react";

const Payment = () => {
    const [categories, setCategories] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const REACT_APP_URL = process.env.REACT_APP_URL;

    useEffect(() => {
        // Check if the user is logged in
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            fetch(REACT_APP_URL + 'wp-json/wp/v2/posts?categories=232')
                .then(response => response.json())
                .then(data => setCategories(data))
                .catch(error => console.error('Error fetching categories:', error));
        }
    }, [REACT_APP_URL]);

    const handlePayment = (category) => {
        setSelectedCategory(category);
    };

    const handleDonation = () => {
        console.log("Processing donation");
    };

    const handleSubmitPayment = (event) => {
        event.preventDefault();
        console.log("Submitting payment for:", selectedCategory);
        setSelectedCategory(null);
    };

    return (
        <div className="container payment">
            <h1>{isLoggedIn ? "Placanje usluga" : "Donacija"}</h1>
            {isLoggedIn ? (
                <div>
                    <div>
                        <p>Odaberite koju uslugu zelite platiti:</p>
                        <ul className="list-group">
                            {categories.map(category => (
                                <li key={category.id} className="list-group-item">
                                    <button onClick={() => handlePayment(category)} className="btn btn-primary">
                                        {category.title.rendered}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            ) : (
                <div>
                    <p>Vasa velikodusna podrska omogucava nam kontinuirano pruzanje vrhunskih dentalnih usluga!</p>
                    <button onClick={handleDonation} className="btn btn-success">
                        Doniraj
                    </button>
                </div>
            )}
            {selectedCategory ? (
                <div>
                    <h2>Placate za: {selectedCategory.title.rendered}</h2>
                    <form onSubmit={handleSubmitPayment}>
                        <div className="form-group">
                            <label htmlFor="cardNumber">Broj Kartice</label>
                            <input type="text" className="form-control" id="cardNumber" placeholder="Enter card number" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="expiryDate">Datum Isteka</label>
                            <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cvv">CVV</label>
                            <input type="text" className="form-control" id="cvv" placeholder="CVV" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Plati!</button>
                    </form>
                </div>
            ) : ("")}
        </div>
    );
};

export default Payment;
