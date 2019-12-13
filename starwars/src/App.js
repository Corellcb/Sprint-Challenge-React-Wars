import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import CharCard from "./components/CharCard";
import styled from "styled-components";

const CharDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        setPeople(response.data.results);
        console.log(response.data.results);
      })
      .catch(response => {
        console.log(response);
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharDiv>
        {people.map((e, index) => {
          return (
            <CharCard key={index} name={e.name} height={e.height} mass={e.mass} gender={e.gender} />
          )
        })}
      </CharDiv>
    </div>
  );
}

export default App;
