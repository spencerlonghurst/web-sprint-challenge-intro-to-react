import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character.js';
// import styled from 'styled-components';


export default function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [person, setPerson] = useState([]); 
  const [currentPerson, setCurrentPerson] = useState('1');
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      console.log(res.data);
      setPerson(res.data);
    })
    .catch(err => {
      console.error(err)
    });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        person.map((fr) => {
          return <Character
                    character={fr}

                    />
        })
      }
      
    </div>
  );
}
