import styled, { keyframes } from "styled-components";

export const StartPage = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-self: center;
    height: 50%;
    width: 60%;
    @media (max-width: 640px) {
        width: 100%;
    }
`;

export const Menu = styled.div`
    width: 100%;
    background: white;
    border-radius: 3rem;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
    @media (max-width: 640px) {
        border-radius: 0;
        box-shadow: 0 0;
    }
`;

export const settingInputs = styled.div`
    margin: 50px 0;
    display: flex;    
    width: 100%;
`;

const quizerIntro = keyframes`
    0% {
        transform: scale(0, 0) rotate(0deg);
    }
    60% {
        transform: scale(1.25, 1.25) rotate(360deg) skew(-15deg);
    }
    100% {
        transform: scale(1.15, 1.25) rotate(355deg) skew(-10deg);
    }
`;

export const Title = styled.h1`
    margin: 20px 0;
    font-size: 6rem;
    animation: ${quizerIntro} 0.4s 0.5s ease-out forwards;
    background: none;
    color: #125271;
    transform: scale(0, 0);
`;

export const SubTitle = styled.div`
    color: #B3D8E9;
    color: #5B99B7;
`;
