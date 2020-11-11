import React, { useEffect, useState } from "react";

const nameUrl = `https://restcountries.eu/rest/v2/name/eesti`;

function AboutCountry() {

    const [countryName, setCountryName] = useState([]);
    // const [random, setRandom] = useState(0);
    const [next, setNext] = useState(true);

    const nextBtn = () => {
        setNext(!next)
    }
    const getName = async () => {
        try {
            const response = await fetch(nameUrl);
            const country = await response.json();
            let eachCountry = Math.floor(Math.random() * country.length);
            let randomCountry = country[eachCountry].name;
            console.log(randomCountry);
            setCountryName(country);
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getName();
    }, [])


    return (
        <div className="wrapper">

            {countryName.map((country) => {
                return (
                    <h3 key={country.name}>{`${country.capital} is the capital of:`} </h3>
                )
            })}
            {/* <h3>{`${countryName.capital} is the capital of : `}</h3> */}
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