import styled from 'styled-components';
import ReactSelect from 'react-select';

export const CategoryInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.div`
    text-align: end;
    flex: 1;
`;

export const SelectContainer = styled.div`
    display: flex;
    justify-content: center;
    flex: 4;
`;

export const Select = styled(ReactSelect)`
    &.reactSelect {
        width: 100%;
        max-width: 250px;
    }
`;