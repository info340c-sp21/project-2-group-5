//The page of the Comparison goes here

import React from 'react';
import '../../App.css';
import './Comparison.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import Emissions from '../../data/owid-co2-data'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


function Comparison() {
    return (
      <div>
        <h1>Compare emissions with other countries</h1>
        <div>
            <div id='comparison-chart'>
                <Chart />
            </div>
            <div id='dropdown'>
                <Options />
            </div>
        </div>
      </div>
    );
}

export default Comparison;

function Chart() {
    return (
        <XYPlot
        width={300}
        height={300}>
        <HorizontalGridLines />
        <LineSeries
            data={[
            {x: 1, y: 10},
            {x: 2, y: 5},
            {x: 3, y: 15}
        ]}/>
        <XAxis />
        <YAxis />
        </XYPlot>
    )
}

export class Options extends React.Component {
    render(){
        const countries = Object.keys(Emissions);
        const defaultOption = countries[0];
        return (
              <Dropdown options={countries} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
        )
    }
}


console.log(Emissions.Afghanistan);

console.log(Emissions.Afghanistan.data[0]);