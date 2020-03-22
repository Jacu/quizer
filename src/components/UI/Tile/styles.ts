import styled from 'styled-components';
import { gray, correct } from "~/utils/Colors";

enum IFontSize {Small, Medium, Big};

interface Tile {
    selected: boolean,
    fontSize: IFontSize,
}

const fontSizes = {
    [IFontSize.Small]: '0.75rem',
    [IFontSize.Medium]: '1rem',
    [IFontSize.Big]: '1.75rem',
}

export const Tile = styled.div<Tile>`
    width: 50px;
    height: 50px;
    border-width: ${props => props.selected ? '2px' : '1px'};
    border-style: solid;
    border-color: ${props => props.selected ? correct.base : gray.base};
    margin: 5px;
    font-size: ${props => fontSizes[props.fontSize]};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
`;