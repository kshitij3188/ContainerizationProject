import React from "react";
import styled from 'styled-components';

const StyledHeader = styled.header`
    background: #f4f7f6; /* Light grey background */
    color: #333; /* Dark grey text */
    text-align: center;
    padding: 20px 0;
`;

/////////////////////ROLLOUT/////////////////
// const Title = styled.h1`
//     color: #ffc1cc; /* Pink color for the title */
//     font-family: 'Arial', sans-serif;
//     font-size: 2.5rem;
//     margin: 0;
// `;

// const Subtitle = styled.p`
//     color: #ffc1cc; /* Pink color for the title */
//     font-family: 'Arial', sans-serif;
//     margin: 5px 0;
// `;
/////////////////////ROLLOUT/////////////////

/////////////////////CANARY/////////////////
// const Title = styled.h1`
//     color: #eb4034; /* Red color for the title (Canary)
//     font-family: 'Arial', sans-serif;
//     font-size: 2.5rem;
//     margin: 0;
// `;

// const Subtitle = styled.p`
//     color: #eb4034; /* Red color for the title (Canary)
//     font-family: 'Arial', sans-serif;
//     margin: 5px 0;
// `;
/////////////////////CANARY/////////////////


/////////////////////ORIGINAL/////////////////
const Title = styled.h1`
    color: #1a5dab; /* Blue color for the title */
    font-family: 'Arial', sans-serif;
    font-size: 2.5rem;
    margin: 0;
`;

const Subtitle = styled.p`
    color: #1a5dab; /* Blue color for the title */
    font-family: 'Arial', sans-serif;
    margin: 5px 0;
`;
/////////////////////ORIGINAL/////////////////

const Header = () => {
    return (
        <StyledHeader>
            <Title>My Bucket List Around Europe 🌍✈️</Title>
            <Subtitle>Explore my travel goals and adventures across Europe.</Subtitle>
            <Subtitle>Version 1.0 🗺️📸✨</Subtitle>
        </StyledHeader>
    );
};

export default Header;