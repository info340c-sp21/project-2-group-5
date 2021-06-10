import React from 'react';
import './Concepts.css';

function Concepts() {
    return(
        <div>
            <div id="bannerimage3"></div>
            <Info />
        </div>
    );
}

function Info() {
    return (
        <div id="concept-container">
            <div id="mission">
                <h2>
                    Our Mission
                </h2>
                <p>
                    We only get one Earth.
                </p>
                <p>
                    Using Grenville, we hope to educate and inform more individuals about the impacts of their carbon footprint, and realize that they can start to make small changes in their lives to lessen the levels of emissions around them. By encouraging small changes in behavior, as well is being able to calculate your current emissions, Grenville provides people with a user-friendly option to share with other people as well. 
                </p>
                <p>
                    Every individual has done a part in contributing to climate change, and again it will take everyone to prevent it. No matter how big or small your reduction in carbon footprint is, if everyone can change just a bit, it will make a difference.
                </p>
            </div>
            <div id="importance">
                <h2>
                    How important is reducing your carbon footprint?
                </h2>
                <p>
                    The United Nations estimates that 2030 will be the year that climate change begins to be irreversible.
                </p>
                <p>
                    This means that right now, carbon emissions are at an extremely dangerous level. Our climate will continue go through drastic changes in temperature, increased spread of wildfires, the melting of ice in our North and South Poles, among many other impacts if we continue down this path. Even though one person's emissions ,ay be negligible in comparision to the rest of the word, it all starts with you. Every small action makes a huge impact.
                </p>
            </div>
            <div id="wrap-up">
                <h2>
                    What you can do to help
                </h2>
                <p>
                    Share your resources with friends and family! Stick to your goals and encourage others to join in on saving our Earth.
                </p>
            </div>
        </div>
    )
}

export default Concepts;