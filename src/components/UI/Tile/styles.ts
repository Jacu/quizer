import styled from 'styled-components';
import { gray, correct, primaryTheme } from "~/utils/Colors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

enum IFontSize {Small, Medium, Big};

interface Tile {
    selected: boolean,
    fontSize: IFontSize,
}

interface Selectable {
    selected: boolean,
}

const fontSizes = {
    [IFontSize.Small]: '0.75rem',
    [IFontSize.Medium]: '1rem',
    [IFontSize.Big]: '1.75rem',
}

export const Tile = styled.div<Tile>`
    width: 82px;
    height: 82px;
    border-width: ${props => props.selected ? '2px' : '1px'};
    border-style: solid;
    border-color: ${props => props.selected ? primaryTheme.base : gray.base};
    border-radius: 6px;
    margin: 5px;
    font-size: ${props => fontSizes[props.fontSize]};
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    :hover {
        box-shadow: 0px 0px 4px 0px #ababab;
    }
    color: ${props => props.selected ? primaryTheme.base : gray.base};
    box-shadow: ${props => props.selected ? '0px 0px 4px 0px #ababab' : null};
`;

export const Label = styled.div`
    white-space: nowrap;
`;

export const Icon = styled(FontAwesomeIcon)<Selectable>`
    color: inherit;
    font-size: 2rem;
    :hover {
        color: inherit;
    }
    
`;