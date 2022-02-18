import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
// import styled from 'styled-components';

import Character from './components/Character.js';
import { data } from './mocks/handlers'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [person, setPerson] = useState(data); 
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(resp => {
      console.log(resp.data);
      setPerson(resp.data);
    })
    .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character character={person} />
    </div>
  );
}

export default App;
