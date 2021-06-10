import React from 'react';
import './CalculatorHeader.css';

export default CalculatorHeader;

function CalculatorHeader(props) {
    let headerText = 'Carbon Footprint Calculator';
    let instructionText = 'Fill out the form below to automatically generate your carbon emissions from the main sources! Emissions are given in pounds of CO2 released.';
    let additionalText = 'You can also save your results and get past results by signing up for an account!';

    return (
        <div>
            <h1>{headerText}</h1>
            <p className="instruction">{instructionText}</p>
            <p className="additional">{additionalText}</p>
        </div>
    );
}