import styled from "styled-components";

interface IQuizStyle {
    finished: boolean, 
    ref: React.MutableRefObject<HTMLDivElement | null>,
}

export const Quiz = styled.div<IQuizStyle>`
    align-self: center;
    width: 80%;
    max-width: 700px;
    height: 100%;
    display: flex;
    justify-content: ${props => props.finished ? 'start' : 'center'};
    align-items: center;
    flex-direction: column;
    :focus {
        outline: none;
    }
`;

export const ButtonContainer = styled.div`
    padding-bottom: 60px;
`;