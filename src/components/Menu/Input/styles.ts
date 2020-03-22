import styled from 'styled-components';

export const  Input = styled.div`
    display: flex;
    margin: 5px;
    align-items: center;
`;

export const Select = styled.select`
    flex: 2;
    cursor: pointer;
    width: 80%;
    text-align: center;
    color:inherit;
    border-radius: 5px;
    :focus{
        outline: 0;
    }
`;

export const TilesContainer = styled.div`
    flex: 4;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
`;

export const Option = styled.option`
    text-align: center;
`

export const Label = styled.div`
    text-align: end;
    flex: 1;
`