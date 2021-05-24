import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
      <li className='cards__item'>
        <Link className='cards__link' to={props.path}>
          <figure className='cards__pic-wrap'>
            <img
              className='cards__img'
              alt='Feature name'
              src={props.src}
            />
          </figure>
          <div className='cards__info'>
            <p className='cards__text'>{props.text}</p>
          </div>
        </Link>
      </li>
  );
}

export default Card;