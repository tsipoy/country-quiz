import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AboutCountry({
  randomCountry,
  questions,
  randomOption,
  answerBg,
  getAnswer,
  isClicked,
  getRandomCountry,
}) {
  return (
    <div>
      {randomCountry && (
        <div className="wrapper">
          {questions % 2 === 0 ? (
            <div>
              <img src={randomCountry.flag} alt={randomCountry?.name} />
              <h2>Which country does this flag belong to?</h2>
            </div>
          ) : (
            <h2>{randomCountry.capital} is the capital of?</h2>
          )}
          <form>
            {randomOption &&
              randomOption.map((country) => {
                return (
                  <button
                    key={country?.name}
                    value={country?.name}
                    id={country?.name}
                    onClick={getAnswer}
                  >
                    {country?.name}
                  </button>
                );
              })}
          </form>
          <div>
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
        </div>
      )}
    </div>
  );
}
