import styled, { keyframes } from "styled-components";
import { Link } from 'react-router-dom';
import { primaryTheme } from "~/utils/Colors";

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
    width: 100%;
    max-width: 650px;
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
    color: ${primaryTheme.base};
    transform: scale(0, 0);
`;

export const SubTitle = styled.div`
    color: ${primaryTheme.base};
`;

export const Button = styled(Link)`
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    background: ${primaryTheme.base};
    padding: 20px 50px;
    font-weight: bold;
    font-size: 2rem;
    transition: transform 0.25s;
    margin: 2rem;
    :hover {
        transform: scale(1.1,1.1);
    }
`;