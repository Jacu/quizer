import styled from 'styled-components';
import { GRAY, PRIMARY_THEME } from "~/utils/colors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ISelectable {
    selected: boolean,
}

export const Tile = styled.div<ISelectable>`
    width: 82px;
    height: 82px;
    border-width: ${props => props.selected ? '2px' : '1px'};
    border-style: solid;
    border-color: ${props => props.selected ? PRIMARY_THEME.BASE : GRAY.BASE};
    border-radius: 6px;
    margin: 5px;
    font-size: '1rem';
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    :hover {
        box-shadow: 0px 0px 4px 0px #ababab;
    }
    color: ${props => props.selected ? PRIMARY_THEME.BASE : GRAY.BASE};
    
`;

export const Label = styled.div`
    white-space: nowrap;
`;

export const Icon = styled(FontAwesomeIcon)<ISelectable>`
    color: inherit;
    font-size: 2rem;
    :hover {
        color: inherit;
    }
    
`;