import React from "react";
import "./Spinner.css"; // Import the CSS file containing loading spinner styles

const Spinner = () => {
    return (
        <div id="container">
            <div id="loading-bubble">
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
           
           
        </div>
    );
};

export default Spinner;
