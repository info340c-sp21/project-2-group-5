import React, { useState } from 'react';
import firebase, { firestore } from 'firebase';
import { Pie } from 'react-chartjs-2';
import './CalculatorChart.css';
import 'firebase/database';

export default CalculatorChart;

function CalculatorChart(props) {

    const [formData, setFormData] = useState(null)

    return(
        <div className="flex-calculator">
            <InputForm dataCallback={setFormData} user={props.user}/>
            <RenderChart data={formData} user={props.user}/>
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
        this.hasSubmitted = false;
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (event) => {
        event.preventDefault();
        this.hasSubmitted = true;
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

    saveButton = () => {
        if (!this.props.user || !this.hasSubmitted) {
            return (
                <button className="lockedButton calSubmit">Save Results</button>
            );
        } else {
            return (
                <button className="unlockedButton calSubmit" onClick={this.saveResults}>Save Results</button>
            );
        }
    }

    saveResults = (event) => {
        event.preventDefault();
        let data = processData(this.state);
        let newEntry = {
            time: new Date().toDateString(),
            vehicle: data[0],
            home: data[1],
            recycle: data[2]
        }
        firebase.database().ref(`calculator/${this.props.user.uid}`).push(newEntry);
    }

    render() {
        let button = this.saveButton();

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
                <div>
                    <button className='calSubmit' onClick={this.handleClick}>Get Result</button>
                    {button}
                </div>
            </div>
        );
    }
}

function RenderChart(props) {
    const [historyData, setHistoryData] = useState(null);
    let historyButton = null;
    let history = null;

    const getHistory = () => {
        firebase.database().ref(`calculator/${props.user.uid}`).once('value')
            .then((snapshot) => {
                console.log('test');
                console.log(snapshot.val());
                setHistoryData(snapshot.val());
        });
        console.log(historyData);
    }

    // Style history button here
    if (!props.user) {
        historyButton = <p>Register to save your history!</p>
    } else {
        historyButton = <button className="unlockedButton calSubmit" onClick={getHistory}>See History</button>
    }

    if (historyData) {
        let historyItemList = Object.keys(historyData).map((key) => {
            let item = {...historyData[key]};
            return (
                <HistoryItem key={key} data={item} />
            );
        });

        history = (
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Vehicle</th>
                        <th>Home</th>
                        <th>Recycle</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {historyItemList}
                </tbody>
            </table>
        );
    }


    if(props.data == null) {
        // Render Empty Chart, first load
        let nullData = {
            datasets: [{
                data: [1],
                backgroundColor: [
                'rgba(123, 239, 178, 1)'
                ]
            }],
            labels: [
                '']
        };
        return(
            <div className="flex-calculator-chart">
                <h2>Don't forget to hit get results!</h2>
                <Pie data={nullData} />
                {historyButton}
                {history}
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
            <h3>As a table</h3>
            <table>
                <thead>
                    <tr>
                        <th>Vehicle</th>
                        <th>Home</th>
                        <th>Recycle</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{Math.round(values[0])}</td>
                        <td>{Math.round(values[1])}</td>
                        <td>{Math.round(values[2])}</td>
                        <td>{Math.round(values[0] + values[1] + values[2])}</td>
                    </tr>
                </tbody>
            </table>
            {historyButton}
            {history}
        </div>
    );
}

function HistoryItem(props) {
    let itemDate = new Date(props.data.time);
    let dateString = (itemDate.getMonth() + 1) + "/" + itemDate.getDate() + "/" + itemDate.getFullYear();
    return (
        <tr>
            <td>{dateString}</td>
            <td>{Math.round(props.data.vehicle)}</td>
            <td>{Math.round(props.data.home)}</td>
            <td>{Math.round(props.data.recycle)}</td>
            <td>{Math.round(props.data.vehicle + props.data.home + props.data.recycle)}</td>
        </tr>
    )
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