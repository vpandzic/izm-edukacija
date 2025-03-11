import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Valute = () => {

    const [currencyMap, setCurrency] = useState({});
    const [amount, setAmount] = useState(1);
    const [currencyType, setCurrencyType] = useState("USD")
    useEffect(() => {
        fetch('https://api.frankfurter.dev/v1/latest?base=' + currencyType)
            .then(response => response.json())
            .then(data => setCurrency(data))
    }, [currencyType]);
    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    }
    const handleTypeChange = (e) => {
        setCurrencyType(e.target.value);
    }

    if (!currencyMap.rates) return <p>Loading...</p>
    return (
        <div className="container blog">
            <h1>Exchange rates</h1>
            <select id="currencyType" value={currencyType} onChange={handleTypeChange}>
                {Object.keys(currencyMap.rates).concat(currencyMap.base).sort().map(curr => (
                    <option key={curr} value={curr}>
                        {curr}
                    </option>
                ))}
            </select>
            <input type="number" value={amount} onChange={handleAmountChange} />
            {Object.keys(currencyMap.rates).map(curr => (
                <p key={curr}>{curr} : {amount * currencyMap.rates[curr]}</p>
            ))}
        </div>
    );
};

export default Valute;
