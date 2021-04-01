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
  const [isOpened, setIsOpened] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const getCountries = async () => {
    try {
      const response = await fetch(allCountryUrl);
      const data = await response.json();
      console.log(data);
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
      allCountries[Math.floor(Math.random() * allCountries.length )];
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
    setIsDisabled(false);
    setIsOpened(false)
  }

  useEffect(() => {
    getRandomCountry();
  }, [allCountries]);

  function getAnswer(e) {
    e.preventDefault();
    const rightAnswer = randomCountry.name;
    const choices = e.target.value;
    
    // document.getElementById(rightAnswer).style.backgroundColor = "#60BF88";
    // document.getElementById(rightAnswer).style.color = "#ffffff";
    document.getElementById(rightAnswer).classList.add("rightAnswer");
    document.getElementById(rightAnswer).classList.add("checkRight");

    if (rightAnswer === choices) {
      e.target.classList.add("rightAnswer");
      e.target.classList.add("checkRight");
      setCorrectAnswer(correctAnswer + 1);
      setIsClicked(true);
      setAllCountries(allCountries);
      setIsDisabled(true);
    } else {
      e.target.classList.add("wrongAnswer");
      e.target.classList.add("checkWrong");
      setIsClicked(false);
      setIsDisabled(true);
    }
    setIsOpened(true)
    setTimeout(() => {
      setQwestions(questions + 1);
    }, 60000);
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
            isDisabled={isDisabled}
            isOpened={isOpened}
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
