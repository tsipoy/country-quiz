import React, { useState } from "react";
import { Link } from "react-router-dom";

function Result() {
    return (
        <>
        <h1>Country quiz</h1>
        <div className="result ">
            <div>
                <h2>Results</h2>
                <h4>You got <span className="score">0</span> correct answers</h4> 
                <Link to="/">
                    <button className="resultBtn">Try again</button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Result 