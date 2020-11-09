import React, { useEffect, useState } from "react";

function AboutCountry() {
    
    const [ countryName, setCountryName ] = useState([]);
    
    const getName = async () => {
        const nameUrl = 'https://restcountries.eu/rest/v2/all';
        try {
            const response = await fetch(nameUrl);
            const country = await response.json()
            setCountryName(country);
        } catch(e) {
            console.error(e)
        }
    }

    console.log(countryName);


    useEffect(() => {
        getName()
    }, [])

    return (
        <div className="wrapper">
            <h3>{countryName.name} is the capital of</h3>
            <button><span>A</span>Vietnam</button>
            <button><span>B</span>Malaysia</button>
            <button><span>C</span>Sweden</button>
            <button><span>D</span>Austria</button>
        </div>
    )
}

export default AboutCountry