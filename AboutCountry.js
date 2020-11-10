import React, { useEffect, useState } from "react";

const nameUrl = `https://restcountries.eu/rest/v2/name/united`;

function AboutCountry() {

    const [countryName, setCountryName] = useState([]);
    const [next, setNext] = useState(true);

    const nextBtn = () => {
        setNext(!next)
    }

    const getName = async () => {
        try {
            const response = await fetch(nameUrl);
            const country = await response.json();
            setCountryName(country);
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getName(countryName);
    }, [])

    // if(!countryName.name ) return null

    return (
        <div className="wrapper">
            {countryName.map((country) => {
                return (
                    <h3 key={country.callingCodes}>{country.name} is the capital of:</h3>
                )
            })}
            <button onClick={nextBtn}><span>A</span>Vietnam</button>
            <button onClick={nextBtn}><span>B</span>Malaysia</button>
            <button onClick={nextBtn}><span>C</span>Sweden</button>
            <button onClick={nextBtn}><span>D</span>Austria</button>
            <div className="btnWrapper">
                {!next &&
                    <button onClick={() => getName()} className="nextBtn">Next</button>
                }
            </div>

        </div>
    )
}

export default AboutCountry