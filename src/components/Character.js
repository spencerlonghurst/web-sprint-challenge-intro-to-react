import React from 'react';
import styled from 'styled-components';


// const StyledName = styled.h2 `
//     &: hover {
//         color: white;
//         text-shadow: none;
//     }
// `

// const StyledP = styled.p `
//     &: hover {
//         color: black;
//         text-shadow: none;
//         // border: 1px solid green;
//     }
// `



export default function Character ({ character}) {
    return (
        <div>
            <h2>Name: {character.name}</h2>
        </div>
    )
}