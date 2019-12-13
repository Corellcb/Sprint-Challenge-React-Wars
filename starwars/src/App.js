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

const CharacterCards = styled.h2`
  padding: 2% 0;
`

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: auto;
`

const Buttons = styled.button`
  width: 40%;
  padding: 2% 5%;
  margin: 2% auto 10%;
  border-radius: 10px;
  box-shadow: inset 0px 0px 10px;
`

let page = 1;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${counter}`)
      .then(response => {
        setPeople(response.data.results);
        console.log(response);
      })
      .catch(response => {
        console.log(response);
      })
  }, [counter])

  function next() {
    page++;
    setCounter(page);
  }

  function previous() {
    if(page <= 1) {
      page = 1;
      alert('No Previous Page!')
    } else {
      page--;
      setCounter(page);
    }
  }

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterCards>Character Cards</CharacterCards>
      <CharDiv>
        {people.map((e, index) => {
          return (
            <CharCard key={index} name={e.name} height={e.height} mass={e.mass} gender={e.gender} />
          )
        })}
      </CharDiv>
      <ButtonDiv>
        <Buttons onClick={() => previous()}>Previous</Buttons>
        <Buttons onClick={() => next()}>Next</Buttons>
      </ButtonDiv>
    </div>
  );
}

export default App;
