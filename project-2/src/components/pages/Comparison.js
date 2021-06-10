//The page of the Comparison goes here

import React, {useState, useEffect} from 'react';
import '../../App.css';
import './Comparison.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, ChartLabel} from 'react-vis';
import Emissions from '../../data/owid-co2-data'
import { Multiselect } from 'multiselect-react-dropdown';

function Comparison() {
    const [countries, setCountries] = useState(['United States']);
    const handleSelect=(e)=>{
        let temp = e.map(item => {
            return (item.name);
        })
        console.log(e);
        console.log(temp);
        setCountries(temp);
    }

    return (
      <div className="page">
        <div id="bannerimage"></div>
        <h1>Compare Emissions with Other Countries</h1>
        <div className='description'>
            <p>To compare the CO2 emissions per capita per year based on country, select the countries on the right side.</p>
        </div>
        <div className='chart-container'>
            <div id='comparison-chart' className="flex-graph">
                <div id='chart-title'>
                    Average CO2 Emissions Per Capita
                </div>
                <Chart countries={countries}/>
            </div>
            <div className="flex-dropdown">
                <div id='dropdown'>
                    <p>Select countries to compare:</p>
                    <Multiselect options={GetCountries()} 
                    onSelect={handleSelect} onRemove={handleSelect} displayValue="name"/>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Comparison;

function Chart(props) {
    
    // need to display multiple lineseries
    let lines = props.countries.map((country) => {
            return (<LineSeries data={ChartLine(country)} />);
        });

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let width = 0;
    let height = 0;
    if (windowDimensions.width < 600) {
        width = windowDimensions.width * 0.9;
        height = width/1.6;
    }else if (windowDimensions.width < 1000) {
        width = windowDimensions.width * 0.75;
        height = width/1.6;
    } else {
        width = windowDimensions.width * 0.6;
        height = 600;
    }

    return (
        <XYPlot width={width} height={height}>
            <HorizontalGridLines />
            <ChartLabel
                text="Year"
                xPercent={0.5}
                yPercent={0.92}
                />
            <ChartLabel
                text="CO2 emissions per capita (tons)"
                xPercent={0.01}
                yPercent={0.5}
                style={{transform: 'rotate(-90)'}}
                />
            {lines}
            {Lines(<Selected />)}
            <XAxis />
            <YAxis />
        </XYPlot>
    )
}

function ChartLine(country) {
    // this is an array
    let data = Emissions[country].data;
    let coordinates = []
    data.forEach((e) => {
        let coordinate = []
        coordinate.x = e.year
        coordinate.y = e.co2_per_capita
        coordinates.push(coordinate)
    })
    return (
        coordinates
    )
}

function GetCountries() {
    let countries = []
        Object.keys(Emissions).forEach((e) => {
            let country = {}
            country.name = e
            countries.push(country)
        })

    return (
        countries
    )
}

function Selected(selectedList, selectedItem) {
    console.log(selectedList)
    let list = []
    let name = selectedItem.name
    list.push(name)
    
    return (
        list
    )
}

function Lines() {
    <LineSeries data={ChartLine('Norway')} />
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
