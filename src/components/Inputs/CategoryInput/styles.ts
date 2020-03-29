import styled from 'styled-components';
import ReactSelect from 'react-select';
import * as colors from '~/utils/Colors';

export const CategoryInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
`;

export const Label = styled.div`
    text-align: end;
    flex: 1;
    font-size: 1.5rem;
    padding: 0 20px;
    border-right: 1px solid ${colors.gray.base};
`;

export const SelectContainer = styled.div`
    display: flex;
    justify-content: center;
    flex: 4;
`;

export const Select = styled(ReactSelect)`
    &.reactSelect {
        width: 100%;
        max-width: 400px;
        color: ${colors.primaryTheme.base};
        & .rSelect__control--is-focused {
            border: 1px solid lightgray;
            box-shadow: none;
        }
        & .rSelect__option--is-focused {
            background: lightgray;
        }
        & .rSelect__option--is-selected {
            background: ${colors.primaryTheme.base};
        }
        & .rSelect__single-value {
            color: inherit;
        }
    }
`;