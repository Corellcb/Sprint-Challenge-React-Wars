import React from 'react';
import styled from "styled-components";

const CardDiv = styled.div`
    width: 40%;
    background: whitesmoke;
    padding: 2%;
    margin: 2% 0;
    border-radius: 10px;
    opacity: 75%;
`


export default function CharCard(prop) {
    return (
        <CardDiv>
            <h3>{prop.name}</h3>
            <p>Height: {prop.height}</p>
            <p>Mass: {prop.mass}</p>
            <p>Gender: {prop.gender}</p>
        </CardDiv>
    )
}