import React from 'react';
import * as styled from './styles';
import Tile from "~/components/UI/Tile/Tile";
import { IFontSize } from '~/components/UI/Tile/Tile';

interface InputProps {
    label: string,
    values: string[],
    selected: string,
    onSelect: (selectedValue: string) => void,
    fontSize?: IFontSize,
}

const Input: React.FC<InputProps> = props => {
    const handleSelect = (selectedValue: string) => {
        props.onSelect(selectedValue)
    };

    return (
        <styled.Input>
            <styled.Label>{props.label}</styled.Label>
            <styled.TilesContainer>
                {props.values.map(option =>
                    <Tile fontSize={props.fontSize} selected={option === props.selected} header={option} onSelect={() => handleSelect(option)} />
                )}
            </styled.TilesContainer>
        </styled.Input>
    )
}

export default Input;