//The page of the tips goes here
import React, {useState} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import './Tips.css';

const data = [
  {
    "category": "a",
    "text":"Eliminate single-use plastic",
  }, {
    "category": "a",
    "text":"Cycle to work",
  }, {
    "category": "b",
    "text":"Turn off the lights",
  }, {
    "category": "a",
    "text":"Use less water",
  }, {
    "category": "a",
    "text":"Switch to renewables",
  }, {
    "category": "b",
    "text":"Use public transport",
  }
];

function TipsPage() {
    const [goals, setGoal] = useState(data);
    let handleGoalClick = (goal) => {
        let goals = data.map(tip => {
            if (tip.text == goal) {
                tip.goal = !tip.goal;
            }
            return tip;
        });
        setGoal(goals);
    };

    let handleFinishedClick = (tipName) => {
        let finish = data.map(tip => {
            if (tip.text == tipName) {
                tip.finished = !tip.finished;
            }
            return tip;
        });
        setGoal(finish);
    };

    return(
        <div className="container">
        <ListOfTips tips={data} handleClick={handleGoalClick}/>
        <ListOfGoals goals={data} handleClick={handleFinishedClick}/> 
        <div className="break"></div> 
        {/*<GoalProgressBar goals={data} /> */}       
        </div>    
    );
}

function Tip(props) {
    return(
        <li className={props.category}> 
        <Checkbox handleClick={() => props.handleClick(props.tip)}/>
        {props.tip}
        </li>
    );
}

function ListOfTips(props) {
    let tips = props.tips.map(tip => {
        return <Tip tip={tip.text} category={tip.category} handleClick={() => props.handleClick(tip.text)}/>;
    })
    return(
        <div className="flex-item">
        <h1>Tips</h1>
        <ul>
           {tips} 
        </ul>
        </div>
    )
}

function Goal(props) {
    return(
        <li className={props.finished ? "finished" : "toDo"} onClick={() => props.handleClick(props.tip)}>{props.tip}</li>
    );
}
function ListOfGoals(props) {
    let goals = props.goals.map(tip => {
        if(tip.goal == true){
           return <Goal tip={tip.text} handleClick={() => props.handleClick(tip.text)} finished={tip.finished}/> 
        }   
    })
    return(
        <div className="flex-item">
        <h1>Goals</h1>
        <ul className="goal-list">
           {goals} 
        </ul>
        </div>
    );
}

function Checkbox(props) {
    return(
        <input className="star" type="checkbox" onClick={props.handleClick}/>  
    );
}

function GoalProgressBar(props) {
    let goalCnt = 0;
    let finishedCnt = 0;
    props.goals.map(tip => {
        if(tip.goal == true) {
            goalCnt++;
        }
        if(tip.finished == true) {
            finishedCnt++;
        }
    })
    let progress = parseInt((finishedCnt / goalCnt), 10) * 100;
    return(
        <div className="flex-item">
        <h1>Progress Bar</h1>
        <ProgressBar now={progress}/>
        </div>
    );
}

export default TipsPage;