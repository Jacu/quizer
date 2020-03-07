import styled, { keyframes } from 'styled-components';

export const Summary = styled.div`
    position: absolute;
    display: flex;
    height: 100vh;
    width: 80%;
    align-items: center; 
    flex-direction: column;
    justify-content: center;
`;

export const Container = styled.div`
    padding: 1rem;
    border-radius: 3rem; 
    background: white;
    box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.25);
`;

const showoff = keyframes`
    0%{
        transform: scale(0,0);
    }
    100%{
        transform: scale(1,1)
    }
`;

export const Percentage = styled.h1`
    font-size: 6rem;
    margin: 0;
    padding: 0;
    animation: ${showoff} 0.5s cubic-bezier(0, 0, 0.35, 2.41) forwards;
`;

export const Score = styled.h2`
    margin-bottom: 1rem;
`

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: row;
`;