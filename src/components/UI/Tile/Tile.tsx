import React from 'react';
import * as styled from './styles';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

enum ITileSize {Small, Medium, Big};
export enum IFontSize {Small, Medium, Big};

interface ITile {
    header: string,
    selected: boolean,
    onClick: () => void,
    icon?: any,
    size?: ITileSize, // TODO
    fontSize?: IFontSize,
}


const Tile: React.FC<ITile> = (props) => {
    return (
        <styled.Tile fontSize={props.fontSize != null ? props.fontSize : IFontSize.Medium} selected={props.selected} onClick={props.onClick}>
            <styled.Icon selected={props.selected} icon={props.icon || faQuestion} />
            <styled.Label>{props.header}</styled.Label>
        </styled.Tile>
    );
}

export default Tile;