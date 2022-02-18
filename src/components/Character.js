import React from 'react';
import styled from 'styled-components';


const StyledName = styled.h2 `
    &: hover {
        color: white;
        text-shadow: none;
    }
`

const StyledP = styled.p `
    &: hover {
        color: black;
        text-shadow: none;
    }
`



const Character = (props) => {
    return (
        <>
            {props.character.map(char => {
                return (
                    <div>
                        <StyledName>Name: {char.name}</StyledName>
                        <StyledP>Birth Year: {char.birth_year}</StyledP>
                        <StyledP>Height: {char.height}</StyledP>
                        <StyledP>Mass: {char.mass}</StyledP>
                    </div>
                )
            })}
        </>
    )
}

export default Character;