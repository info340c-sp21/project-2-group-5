import React from 'react';
import './Cards.css';
import Card from './Card';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Card
              src='images/running.jpg'
              text='Carbon Footprint Calculator'
              path='/calculator'
            />
            <Card
              src='images/tips.jpg'
              text='Pro Tips for Healthy Life Styles'
              path='/pro-tips'
            />
          </ul>
          <ul className='cards__items'>
            <Card
              src='images/compare.jpg'
              text='Carbon Footprint Comparison'
              path='/compare'
            />
            <Card
              src='images/nature.jpg'
              text='Content TBD'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;