import React from 'react';
import * as styled from './styles';

enum ITileSize {Small, Medium, Big};
export enum IFontSize {Small, Medium, Big};

interface ITile {
    header: string,
    selected: boolean,
    onSelect: () => void,
    icon?: any,
    size?: ITileSize, // TODO
    fontSize?: IFontSize,
}


const Tile: React.FC<ITile> = (props) => {
    return (
        <styled.Tile fontSize={props.fontSize != null ? props.fontSize : IFontSize.Medium} selected={props.selected} onClick={props.onSelect}>
            {props.header}
        </styled.Tile>
    );
}

export default Tile;