import styled from "styled-components";



export const Quiz = styled.div<{finished: boolean}>`
    align-self: center;
    width: 80%;
    max-width: 700px;
    height: 100%;
    display: flex;
    justify-content: ${props => props.finished ? 'start' : 'center'};
    align-items: center;
    flex-direction: column;
`;