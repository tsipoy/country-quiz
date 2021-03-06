import React from "react";
import { Link } from "react-router-dom";

import adventureImage from "./undraw_adventure_4hum.svg";

export default function AboutCountry({
  randomCountry,
  questions,
  randomOption,
  getAnswer,
  isClicked,
  getRandomCountry,
  isDisabled,
  isOpened,
}) {
  const sortedArray = randomOption.sort(function (a, b) {
    return a?.name.localeCompare(b?.name);
  })
  return (
    <div>
      <img src={adventureImage} alt="adventure" className="adventureImage" />
      {randomCountry && (
        <div className="wrapper">
          {questions % 2 === 0 ? (
            <div>
              <img src={randomCountry.flag} alt={randomCountry?.name}className="flag"/>
              <h2 className="questions">
                Which country does this flag belong to?
              </h2>
            </div>
          ) : (
            <h2 className="questions">
              {randomCountry.capital} is the capital of?
            </h2>
          )}
          <form>
            {randomOption &&
              sortedArray.map((country) => {
                return (
                  <button
                    className="name"
                    key={country?.name}
                    value={country?.name}
                    id={country?.name}
                    onClick={getAnswer}
                    disabled={isDisabled}
                  >
                    {country?.name}
                  </button>
                );
              })}
          </form>
          {isOpened && (
            <div className="nextBtn-wrapper">
              {isClicked ? (
                <button
                  type="button"
                  onClick={getRandomCountry}
                  className="nextBtn"
                >
                  Next
                </button>
              ) : (
                <Link to="/result">
                  <button className="nextBtn">Next</button>
                </Link>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
