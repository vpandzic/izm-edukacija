import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Country.css";

const Country = () => {
    const { name } = useParams();
    const [country, setCountry] = useState(null)
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/alpha/' + name)
            .then(response => response.json())
            .then(data => setCountry(data[0]))
    }, [name]);


    if (!country) return <p>Loading...</p>

    return (
        <div>
            <p><strong>Common name: </strong>{country.name.common}</p>
            <p><strong>Official name: </strong>{country.name.official}</p>
            <p><strong>Capital: </strong>{country.capital?.[0]}</p>
            <p><strong>Alternate spellings: </strong></p>
            <ul>{country.altSpellings.map(iter =>
            (
                <li>{iter}</li>
            ))}
            </ul>
            <p><strong>Region: </strong>{country.region}</p>
            <p><strong>Subregion: </strong>{country.subregion}</p>
            <p><strong>Languages: </strong></p>
            <ul>
                {Object.keys(country.languages).map(iter => (
                    <li>{iter} - {country.languages[iter]}</li>
                ))}
            </ul>
            <p><strong>Currencies: </strong></p>
            <ul>
                {Object.keys(country.currencies).map(iter => (
                    <li><strong>{iter}</strong>
                        {Object.keys(country.currencies[iter]).map(iter2 => (
                            <p>{iter2} - {country.currencies[iter][iter2]}</p>
                        ))}
                    </li>
                ))}
            </ul>
            <p><strong>Maps: </strong></p>
            <ul>
                {console.log(Object.keys(country.maps))}
                {Object.keys(country.maps).map(iter => (
                    <li><strong>{iter}</strong>
                        {country.maps[iter]}
                    </li>
                ))}
            </ul>
            <p><strong>Translations: </strong></p>
            <ul>
                {Object.keys(country.translations).map(iter => (
                    <li><strong>{iter}</strong>
                        {Object.keys(country.translations[iter]).map(iter2 => (
                            <p>{iter2} - {country.translations[iter][iter2]}</p>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Country;
