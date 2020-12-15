import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import AboutCountry from "./AboutCountry";
import Result from "./Result";

import checked from "./assets/check_circle_outline-24px.svg";
import wrongChoice from './assets/highlight_off-24px.svg';

const allCountryUrl = "https://restcountries.eu/rest/v2/all";

{/* <i class="ri-close-circle-line"></i>
    <i class="ri-checkbox-circle-line"></i>
 */}

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [randomCountry, setRandomCountry] = useState({});
  const [randomOption, setRandomOption] = useState([]);
  const [questions, setQwestions] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [isClicked, setIsClicked] = useState(true);

  const getCountries = async () => {
    try {
      const response = await fetch(allCountryUrl);
      const data = await response.json();
      setAllCountries(data);
      setRandomCountry(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  function getRandomCountry() {
    const randomFirstOption =
      allCountries[Math.floor(Math.random() * allCountries.length)];
    const randomSecondOption =
      allCountries[Math.floor(Math.random() * allCountries.length)];
    const randomThirdOption =
      allCountries[Math.floor(Math.random() * allCountries.length)];
    const randomFourthOption =
      allCountries[Math.floor(Math.random() * allCountries.length)];
    const randomOptions = [
      randomFirstOption,
      randomSecondOption,
      randomThirdOption,
      randomFourthOption,
    ];
    setRandomOption(randomOptions);
    setRandomCountry(randomSecondOption);
  }

  useEffect(() => {
    getRandomCountry();
  }, [allCountries]);

  function getAnswer(e) {
    e.preventDefault();
    const rightAnswer = randomCountry.name;
    const choices = e.target.value;
    
    document.getElementById(rightAnswer).style.backgroundColor = "#60BF88";
    document.getElementById(rightAnswer).style.color = "#ffff";
    document.getElementById(rightAnswer).style.backgroundImage = "url('checked')";


    if (rightAnswer === choices) {
      setCorrectAnswer(correctAnswer + 1);
      setIsClicked(false);
      setAllCountries(allCountries);
    } else {
      e.target.classList.add("wrongAnswer")
      setIsClicked(false);
    }
    setTimeout(() => {
      setQwestions(questions + 1);
    }, 30000);
  }

  return (
    <div className="main-content">
      <h1>Country Quiz</h1>
      <Switch>
        <Route exact path="/">
          <AboutCountry 
            randomCountry={randomCountry} 
            questions={questions}
            randomOption={randomOption}
            getAnswer={getAnswer}
            isClicked={isClicked}
            getRandomCountry={getRandomCountry}
        />
        </Route>
        <Route path="/result">
          <Result 
            correctAnswer={correctAnswer}
            getRandomCountry={getRandomCountry}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
