import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Countries.css";

const Countries = () => {

    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, []);


    if (!countries) return <p>Loading...</p>
    return (

        <div className="container">
            {countries.map((country) => (
                <p key={country.cca3}>
                    <Link to={"/country/" + country.cca3}>
                        {country.name.common}
                    </Link>
                </p>
            ))}
        </div>
    );
};

export default Countries;
