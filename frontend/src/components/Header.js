import React from "react";
import styled from 'styled-components';

const StyledHeader = styled.header`
    background: #f4f7f6; /* Light grey background */
    color: #333; /* Dark grey text */
    text-align: center;
    padding: 20px 0;
`;

const Title = styled.h1`
    color: #1a5dab; /* Blue color for the title */
    font-family: 'Arial', sans-serif;
    font-size: 2.5rem;
    margin: 0;
`;

const Subtitle = styled.p`
    color: #1a5dab; /* Blue color for the subtitle */
    font-family: 'Arial', sans-serif;
    margin: 5px 0;
`;

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