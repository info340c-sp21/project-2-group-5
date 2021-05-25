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
    const [click, setClick] = useState(true);
    const handleClick = () => {
        setClick(!click);       
    }

    const [goals, setGoal] = useState(goal);
    let handleGoalClick = (goal) => {
        let goals = data.map(tip => {
            if (tip.text == goal) {
                let goalToBeAdded = {
                    "category": tip.category,
                    "text": tip.text,
                }
                return goalToBeAdded;
            }
        });
        setGoal(goals);
    };

    return(
        <div>
        <ListOfTips tips={data} handleClick={handleGoalClick}/>   
        <br/>
        <ListOfGoals goals={goals}/>
        </div>
         
    );
}

function Tip(props) {
    return(
        <li className={props.category} onClick={() => props.handleClick(props.tip)}>{props.tip}</li>
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
        <li>{props.goal}</li>
    );
}
function ListOfGoals(props) {
    let goals = props.goals.map(goal => {
        return <Goal goal={goal.text}/>
    })
    return(
        <ul>
           {goals} 
        </ul>
    );
}

function AddButton(props) {
    return(
        <>
        <button className={props.boolean ? 'show' : 'none'} onClick={props.handleClick}>Add to goals</button>
        <button className={props.boolean ? 'none' : 'show'} onClick={props.handleClick}>Remove from goals</button>
        </>   
    );
}

export default TipsPage;