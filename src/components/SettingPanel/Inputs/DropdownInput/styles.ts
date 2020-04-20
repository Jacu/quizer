import styled from 'styled-components';
import ReactSelect from 'react-select';
import { PRIMARY_THEME, GRAY } from '~/utils/colors';

export const DropdownInput = styled.div`
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
    border-right: 1px solid ${GRAY.BASE};
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
        color: ${PRIMARY_THEME.BASE};
        & .rSelect__control {
            cursor: pointer;
        }
        & .rSelect__control--is-focused {
            border: 1px solid lightgray;
            box-shadow: none;
        }
        & .rSelect__option--is-focused {
            background: lightgray;
        }
        & .rSelect__option--is-selected {
            background: ${PRIMARY_THEME.BASE};
        }
        & .rSelect__single-value {
            color: inherit;
        }
    }
`;