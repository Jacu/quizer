import styled, { keyframes } from "styled-components";
import { Link } from 'react-router-dom';

export const StartPage = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-self: center;
    height: 50%;
    width: 100%;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const Button = styled(Link)`
    color: inherit;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    background: white;
    padding: 20px 50px;    
    border-radius: 25px;
    font-weight: bold;
    font-size: 2rem;
    box-shadow: 1px 1px 0px 3px rgba(0, 0, 0, 0.5);
    transition: transform 0.25s;
    margin: 2rem;
    :hover {
        transform: scale(1.2,1.2);    
    }
`;