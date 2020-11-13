import React, { useEffect, useState } from "react";
import Result from "./Result"
import { Link, Route, Switch } from "react-router-dom";

const all_url = `https://restcountries.eu/rest/v2/name/madagascar`;
const choiceA = `https://restcountries.eu/rest/v2/name/eesti`;
const choiceB = `https://restcountries.eu/rest/v2/name/bolivia`;
const choiceC = `https://restcountries.eu/rest/v2/name/name`;
const choiceD = `https://restcountries.eu/rest/v2/name/angola`


function AboutCountry() {

    const [countryName, setCountryName] = useState([]);
    const [randomCountryName, setRandomCountryName] = useState({});
    const [next, setNext] = useState(true);
    const [firstChoice, setFirstChoice] = useState([]);
    const [secondChoice, setSecondChoice] = useState([]);
    const [thirdChoice, setThirdChoice] = useState([]);
    const [fourthChoice, setFourthChoice] = useState([]);




    const questions = [
        "is the capital of:",
        "Which countries this flag belong to"
    ]

    const countries = [
        "Afghanistan",
        "Bahamas",
        "Cabo Verde",
        "Denmark",
        "Ecuador",
        "Fiji",
        "Gabon",
        "Haiti",
        "Iceland",
        "Jamaica",
    ]

    const changingQuestion = () => {
        const randomQuestions = questions[Math.floor(Math.random() * questions.length)];
        console.log(randomQuestions)

    }

    const nextBtn = () => {
        setNext(!next)
    }
    const getName = async () => {
        try {
            const response = await fetch(all_url);
            const country = await response.json();

            let eachCountry = Math.floor(Math.random() * country.length);
            let randomCountryName = country[eachCountry].capital;
            console.log(randomCountryName);
            setCountryName(country);
            return setRandomCountryName({randomCountryName})
        } catch (e) {
            console.error(e)
        }
    }

    const getNameA = async () => {
        try {
            const response = await fetch(choiceA);
            const country = await response.json();
            let eachCountry = Math.floor(Math.random() * country.length);
            let randomCountry = country[eachCountry].capital;
            console.log(randomCountry);
            setRandomCountryName(randomCountry)
            setFirstChoice(country);
        } catch (e) {
            console.error(e)
        }
    }

    const getNameB = async () => {
        try {
            const response = await fetch(choiceB);
            const country = await response.json();
            let eachCountry = Math.floor(Math.random() * country.length);
            let randomCountry = country[eachCountry].capital;
            console.log(randomCountry);
            setRandomCountryName(randomCountry)
            setSecondChoice(country);
        } catch (e) {
            console.error(e)
        }
    }

    const getNameC = async () => {
        try {
            const response = await fetch(choiceC);
            const country = await response.json();
            let eachCountry = Math.floor(Math.random() * country.length);
            let randomCountry = country[eachCountry].capital;
            console.log(randomCountry);
            setRandomCountryName(randomCountry)
            setThirdChoice(country);
        } catch (e) {
            console.error(e)
        }
    }

    const getNameD = async () => {
        try {
            const response = await fetch(choiceD);
            const country = await response.json();
            let eachCountry = Math.floor(Math.random() * country.length);
            let randomCountry = country[eachCountry].capital;
            console.log(randomCountry);
            setRandomCountryName(randomCountry)
            setFourthChoice(country);
        } catch (e) {
            console.error(e)
        }
    }


    useEffect(() => {
        getName()
        changingQuestion()
        getNameA()
        getNameB()
        getNameC()
        getNameD()
    }, [])


    return (
        <>
            <div className="wrapper">
                {countryName.map((country) => {
                    return (
                        <h3 key={country.name}>
                            {questions[Math.floor(Math.random() * questions.length)]}
                        </h3>
                    )
                })}
                <div onClick={nextBtn}>
                    {firstChoice.map((country) => {
                        return (
                            <button key={country.name} ><span>A</span>{countries[Math.floor(Math.random() * countries.length)]}</button>
                        )
                    })}

                    {secondChoice.map((country) => {
                        return (
                            <button key={country.name} ><span>B</span>{countries[Math.floor(Math.random() * countries.length)]}</button>
                        )
                    })}

                    {thirdChoice.map((country) => {
                        return (
                            <button key={country.name} ><span>C</span>{countries[Math.floor(Math.random() * countries.length)]}</button>
                        )
                    })}

                    {fourthChoice.map((country) => {
                        return (
                            <button key={country.name} ><span>D</span>{countries[Math.floor(Math.random() * countries.length)]}</button>
                        )
                    })}
                    {/* <button><span>B</span>Malaysia</button>
                    <button><span>C</span>Sweden</button>
                    <button><span>D</span>Austria</button> */}
                </div>
                <div className="btnWrapper">
                    {!next &&
                        <Link to="/result">
                            <button onClick={() => getName()} className="nextBtn">Next</button>
                        </Link>
                    }
                </div>
            </div>
            <Switch>
                <Route path="/result">
                    <Result />
                </Route>
            </Switch>
        </>
    )
}

export default AboutCountry