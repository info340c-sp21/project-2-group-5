import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import './CalculatorChart.css';

export default CalculatorChart;

function CalculatorChart(props) {

    const [formData, setFormData] = useState(null)

    return(
        <div className="flex-calculator">
            <InputForm dataCallback={setFormData}/>
            <RenderChart data={formData}/>
        </div>
    );
}


class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            miles: "0",
            mpg: "0",
            gas: "0",
            electric: "0",
            aluminum:  false,
            plastic:  false,
            glass: false,
            newspaper:  false,
            magazines: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (event) => {
        event.preventDefault();
        this.props.dataCallback(this.state);
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <div className="flex-calculator-form">
                <div>
                    <h2>Vehicle Emissions</h2>
                    <label for="miles">Miles Per Week</label><br/>
                    <input type="number" id="miles" name="miles" role="input" value={this.state.miles} onChange={this.handleChange}/><br/>
                    <label for="mpg">Average Miles Per Gallon</label><br/>
                    <input type="number" id="mpg" name="mpg" role="input" value={this.state.mpg} onChange={this.handleChange}/><br/>
                </div>
                <div>
                    <h2>Home Emissions</h2>
                    <label for="gas">$ Spent on Natural Gas</label><br/>
                    <input type="number" id="gas" name="gas" role="input" value={this.state.gas} onChange={this.handleChange}/><br/>
                    <label for="electric">$ Spent on Electricty</label><br/>
                    <input type="number" id="electric" name="electric" role="input" value={this.state.electric} onChange={this.handleChange}/><br/>
                </div>
                <div>
                    <h2>Recycling Emissions</h2>
                    <input type="checkbox" id="aluminum" name="aluminum" role="input" value={this.state.aluminum} onChange={this.handleChange}/>
                    <label for="aluminum">Aluminum Steel</label><br/>
                    <input type="checkbox" id="plastic" name="plastic" role="input" value={this.state.plastic} onChange={this.handleChange}/>
                    <label for="plastic">Plastic</label><br/>
                    <input type="checkbox" id="glass" name="glass" role="input" value={this.state.glass} onChange={this.handleChange}/>
                    <label for="glass">Glass</label><br/>
                    <input type="checkbox" id="newspaper" name="newspaper" role="input" value={this.state.newspaper} onChange={this.handleChange}/>
                    <label for="newspaper">Newspaper</label><br/>
                    <input type="checkbox" id="magazines" name="magazines" role="input" value={this.state.magazines} onChange={this.handleChange}/>
                    <label for="magazines">Magazines</label><br/>
                </div>
                <button onClick={this.handleClick}>Render Chart</button>
            </div>
        );
    }
}

function RenderChart(props) {
    if(props.data == null) {
        // Render Empty Chart, first load
        let nullData = {
            datasets: [{
                data: [1],
                backgroundColor: [
                'rgba(105, 105, 105, 0.7)'
                ]
            }],
            labels: [
                '']
        };
        return(
            <div className="flex-calculator-chart">
                <h2>Hit Render Chart!</h2>
                <Pie data={nullData} />
            </div>
        );
    }

    let values = processData(props.data);
    let data = {
        datasets: [{
            data: values,
            backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)'
            ]
        }],
        labels: [
            'Vehicle',
            'Home',
            'Recycle']
    };

    // render full
    return(
        <div className="flex-calculator-chart">
            <h2>Your Emissions Breakdown</h2>
            <Pie data={data} />
        </div>
    );
}

function processData(data) {
    // Value Integrity Check
    let parsed = {};
    parsed['miles'] = isNaN(data['miles']) ? 0 : Number(data['miles']);
    parsed['mpg'] = isNaN(data['mpg']) ? 0 : Number(data['mpg']);
    parsed['gas'] = isNaN(data['gas']) ? 0 : Number(data['gas']);
    parsed['electric'] = isNaN(data['electric']) ? 0 : Number(data['electric']);
    // Calculate emissions
    let veh = vehicleEmissions(parsed['miles'], parsed['mpg']);
    let home = homeEmissions(parsed['gas'], parsed['electric']);
    let rec = recycleReductions(data['aluminum'], data['plastic'], data['glass'], data['newspaper'], data['magazines']);

    // Return Data Array
    return [veh, home, (rec)];
}

function vehicleEmissions (miles, mpg) {
    if (mpg == 0) {
        return 0;
    }
    let weeks = 52;
    // CO2 per Gal
    let carbonRate = 19.9;
    return (miles / mpg) * weeks * carbonRate;
}

function homeEmissions (gas, electric) {
    let gasRate = 134.36;
    let electricRate = 85.55;
    return (gas * gasRate) + (electric * electricRate);
}

function recycleReductions (alum, plastic, glass, newspaper, magazine) {
    let reduction = 289;
    if (alum) { reduction -= 89; }
    if (plastic) { reduction -= 35; }
    if (glass) { reduction -= 25; }
    if (newspaper) { reduction -= 113; }
    if (magazine) { reduction -= 27; }
    return reduction;
}