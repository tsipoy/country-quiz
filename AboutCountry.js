import React, { useEffect, useState } from "react";
import Result from "./Result"
import { Link, Route, Switch } from "react-router-dom";

const all_url = `https://restcountries.eu/rest/v2/all`;
const choiceA = `https://restcountries.eu/rest/v2/name/qatar`;
const choiceB = `https://restcountries.eu/rest/v2/name/brazil`;
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
            let randomCountry = country[eachCountry].capital;
            console.log(randomCountry);
            setRandomCountryName(randomCountry)
            setCountryName(country);
        } catch (e) {
            console.error(e)
        }
    }

    const getNameA = async () => {
        try {
            const response = await fetch(choiceA);
            const country = await response.json();
            setFirstChoice(country);
        } catch (e) {
            console.error(e)
        }
    }

    const getNameB = async () => {
        try {
            const response = await fetch(choiceB);
            const country = await response.json();
            setSecondChoice(country);
        } catch (e) {
            console.error(e)
        }
    }

    const getNameC = async () => {
        try {
            const response = await fetch(choiceC);
            const country = await response.json();
            setThirdChoice(country);
        } catch (e) {
            console.error(e)
        }
    }

    const getNameD = async () => {
        try {
            const response = await fetch(choiceD);
            const country = await response.json();
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
                        <h3 key={country.name} onChange={changingQuestion}>{`${country.capital} is the capital of:`} </h3>
                    )
                })}
                <div onClick={nextBtn}>
                    {firstChoice.map((country) => {
                        return (
                            <button key={country.name} ><span>A</span>{country.name}</button>
                        )
                    })}

                    {secondChoice.map((country) => {
                        return (
                            <button key={country.name} ><span>B</span>{country.name}</button>
                        )
                    })}

                    {thirdChoice.map((country) => {
                        return (
                            <button key={country.name} ><span>A</span>{country.name}</button>
                        )
                    })}

                    {fourthChoice.map((country) => {
                        return (
                            <button key={country.name} ><span>A</span>{country.name}</button>
                        )
                    })}
                    <button><span>B</span>Malaysia</button>
                    <button><span>C</span>Sweden</button>
                    <button><span>D</span>Austria</button>
                </div>
                <div className="btnWrapper">
                    {!next &&
                        <Link to="/result">
                            <p onClick={() => getName()} className="nextBtn">Next</p>
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