import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import AboutCountry from "./AboutCountry";
import Result from "./Result";

const allCountryUrl = "https://restcountries.eu/rest/v2/all";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [randomCountry, setRandomCountry] = useState({});
  const [randomOption, setRandomOption] = useState([]);
  const [questions, setQwestions] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [answerBg, setAnswerBg] = useState({ backgroundColor: "white" });

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
    setRandomCountry(randomFirstOption);
  }

  useEffect(() => {
    getRandomCountry();
  }, [allCountries]);

  function getAnswer(e) {
    e.preventDefault();
    const rightAnswer = randomCountry.name;
    const guess = e.target.value;
    console.log(guess);
    document.getElementById(rightAnswer).style.backgroundColor = "#81c784";
    if (rightAnswer === guess) {
      setCorrectAnswer(correctAnswer + 1);
      setIsClicked(true);
      setAllCountries(allCountries);
    } else {
      e.target.classList.add("wrongAnswer")
      setIsClicked(false);
    }
    setTimeout(() => {
      setQwestions(questions + 1);
    }, 10000);
  }

  return (
    <div>
      <h1>Country Quiz</h1>

      <Switch>
        <Route exact path="/">
          <AboutCountry 
            randomCountry={randomCountry} 
            questions={questions}
            randomOption={randomOption}
            answerBg={answerBg}
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
