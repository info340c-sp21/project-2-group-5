import React from 'react';
import './CalculatorHeader.css';

export default CalculatorHeader;

function CalculatorHeader(props) {
    let headerText = 'Carbon Footprint Calculator';
    let instructionText = 'Fill out the form below to automatically generate your carbon emissions';

    return (
        <div>
            <h1>{headerText}</h1>
            <p>{instructionText}</p>
        </div>
    );
}