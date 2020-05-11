import styled, { keyframes } from "styled-components";
import { PRIMARY_THEME } from "~/utils/colors";

export const StartPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-self: center;
    height: 100%;
    width: 100%;
    :focus {
        outline: none;
    }
`;

export const Spinner = styled.div`
    height: 300px;
    display: flex;
    align-items: center;
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
    animation: ${quizerIntro} 0.4s 0.4s ease-out forwards;
    background: none;
    color: ${PRIMARY_THEME.BASE};
    transform: scale(0, 0);
`;

export const SubTitle = styled.div`
    color: ${PRIMARY_THEME.BASE};
`;