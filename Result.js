import React from "react";
import { Link } from "react-router-dom";

function Result() {
    return (
        <div className="result ">
            <div>
                <h2>Results</h2>
                <h4>You got 0 correct answers</h4> 
            </div>
            <Link to="/">
                <p>Try again</p>
            </Link>
        </div>
    )
}

export default Result 