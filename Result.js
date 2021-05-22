import React, { useState } from "react";
import { Link } from "react-router-dom";

function Result({ correctAnswer, getRandomCountry }) {
  return (
    <>
      <div className="result ">
        <div>
          <h2>Results</h2>
          <h4>
            You got <span className="score">{correctAnswer}</span> correct
            answers
          </h4>
          <Link to="/">
            <button className="resultBtn" onClick={getRandomCountry}>
              Try again
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Result;
