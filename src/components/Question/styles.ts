import styled from "styled-components";

export const QuestionComponent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
`;

export const QuestionHeader = styled.div`
   display: flex;
`;

export const Question = styled.h3`
    display: flex;
    margin: 15px 0;
`;

export const CategoryLabel = styled.p` 
    font-style: italic;
    display: flex;
`;

export const AnswersContainer = styled.div`
    display: flex;
    flex-direction: column;
`;