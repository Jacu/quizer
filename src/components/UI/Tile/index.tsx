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

const Tile: React.FC<ITile> = ({ selected, header, onClick, icon}) => {
    return (
        <styled.Tile selected={selected} onClick={onClick}>
            <styled.Icon selected={selected} icon={icon || faQuestion} />
            <styled.Label>{header}</styled.Label>
        </styled.Tile>
    );
}

export default Tile;