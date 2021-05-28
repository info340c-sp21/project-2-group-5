import React from 'react';
import './Cards.css';
import Card from './Card';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div className='cards__twin'>
          <ul className='cards__items'>
            <Card
              src='images/running.jpg'
              text='Carbon Footprint Calculator'
              path='/calculator'
            />
            </ul>
            <ul className='cards__items'>
            <Card
              src='images/tips.jpg'
              text='Pro Tips for Healthy Life Styles'
              path='/pro-tips'
            />
          </ul>
          </div>
          <div className='cards__twin'>
          <ul className='cards__items'>
            <Card
              src='images/compare.jpg'
              text='Carbon Footprint Comparison'
              path='/comparison'
            />
          </ul>
          <ul className='cards__items'>
            <Card
              src='images/nature.jpg'
              text='Carbon Footprint Content TBD'
              path='/'
            />
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;