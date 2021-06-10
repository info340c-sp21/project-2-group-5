import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Landing from '../landing';

function Home(props) {
  return (
    <div>
      <Landing user={props.user}/>
      <Cards />
    </div>
  );
}

export default Home;