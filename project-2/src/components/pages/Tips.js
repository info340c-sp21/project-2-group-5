//The page of the tips goes here
import React, {useState} from 'react';
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

let goal = [{

}];
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

    return(
        <div>
        <h1>Goals</h1>
        <ListOfGoals goals={data}/>
        <br/>
        <h1>Tips</h1>
        <ListOfTips tips={data} handleClick={handleGoalClick}/>   
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
        <ul>
           {tips} 
        </ul>
    )
}

function Goal(props) {
    return(
        <li>{props.tip}</li>
    );
}
function ListOfGoals(props) {
    let goals = props.goals.map(tip => {
        if(tip.goal == true){
           return <Goal tip={tip.text}/> 
        }   
    })
    return(
        <ul>
           {goals} 
        </ul>
    );
}

function Checkbox(props) {
    return(
        <>
        <input type="checkbox" onClick={props.handleClick}/>
        </>   
    );
}

export default TipsPage;