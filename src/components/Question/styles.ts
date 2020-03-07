import styled from "styled-components";

export const Question = styled.div`
    position: relative;
    height: 40vh;
    background: white;
    border-radius: 50px;
    box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.25);
    flex: 6;
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
`;

export const QuestionHeader = styled.h1`
   padding: 1.5rem;
`;

export const CategoryLabel = styled.h3`
    font-size: 1rem;
    padding: 0.5rem;
    padding-bottom: 2rem;   
    font-style: italic; 
`;

export const AnswersContainer = styled.div`
    display: flex;
`;

export const Score = styled.div`
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem;
`;