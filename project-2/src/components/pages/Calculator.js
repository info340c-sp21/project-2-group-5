import React from 'react';
import './Calculator.css';
import Instructions from '../CalculatorHeader.js';
import Calculator from '../CalculatorChart.js';

export default CalculatorPage;

function CalculatorPage(props) {
    return(
        <div className="instructions">
            <Instructions />
            <Calculator user={props.user}/>
        </div>
    );
}