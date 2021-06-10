//The page of the tips goes here
import React, {useState} from 'react';
import {ProgressBar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tips.css';

const data = [
  {
    "text":"Eliminate single-use plastic",
  }, {
    "text":"Cycle to work",
  }, {
    "text":"Turn off the lights",
  }, {
    "text":"Use less water",
  }, {
    "text":"Switch to renewables",
  }, {
    "text":"Insulate your home",
  }, {
    "text":"Eat fewer red meat",
  }, {
    "text":"Raise awareness",
  }, {
    "text":"Buy local food",
  }, {
    "text":"Recycle more",
  }
];

function TipsPage() {
    const [goals, setGoal] = useState(data);
    let handleGoalClick = (goal) => {
        let goals = data.map(tip => {
            if (tip.text == goal) {
                tip.goal = !tip.goal;
                tip.finished = false;
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
        <div className="page">
        <div id="bannerimage2"></div>
        <div className="container">
        <ListOfTips tips={data} handleClick={handleGoalClick}/>
        <ListOfGoals goals={data} handleClick={handleFinishedClick}/> 
        <div className="break"></div>
        <GoalProgressBar goals={data}/>  
        </div>
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
    let goalCnt = 0.0;
    let finishedCnt = 0.0;
    props.goals.map(tip => {
        if(tip.goal == true) {
            goalCnt++;
        }
        if(tip.finished == true) {
            finishedCnt++;
        }
    })
    let progress = Math.round((finishedCnt / goalCnt) * 100);
    if (goalCnt == 0) {
        return(
            <></>
        );
    }
    if (progress == 100) {
        return(
            <>
            <div className="flex-item">
            <h1>Progress</h1>
            <ProgressBar className="progressBar" now={progress} label={`${progress}%`} animated/>
            </div>
            <div className="break2"></div>
            <div className="flex-item">
            <img src="images/fire-emoji.jpg"/><img src="images/fire-emoji.jpg"/><img src="images/fire-emoji.jpg"/>
            </div>
            </>   
        );
    }
    return(
        <div className="flex-item">
        <h1>Progress</h1>
        <ProgressBar className="progressBar" now={progress} label={`${progress}%`} animated/>
        </div>
    );
}

export default TipsPage;