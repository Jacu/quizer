import React from 'react';
import * as styled from './styles';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface ITile {
    header: string,
    selected: boolean,
    onClick: () => void,
    icon?: IconDefinition,
}

const Tile: React.FC<ITile> = (props) => {
    return (
        <styled.Tile selected={props.selected} onClick={props.onClick}>
            <styled.Icon selected={props.selected} icon={props.icon || faQuestion} />
            <styled.Label>{props.header}</styled.Label>
        </styled.Tile>
    );
}

export default Tile;