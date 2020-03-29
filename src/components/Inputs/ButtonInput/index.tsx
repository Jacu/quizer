import React from 'react';
import * as styled from './styles';
import Tile from "~/components/UI/Tile/Tile";
import { IInput } from '../';
import { getIcon } from './config';

const ButtonInput: React.FC<IInput<string>> = ({label, options, selected, onChange}) => {
    return (
        <styled.ButtonInput>
            <styled.Label>{label}</styled.Label>
            <styled.ButtonsContainer>
                {options.map( option => (
                    <Tile icon={getIcon(option)} header={option} selected={option===selected} onClick={() => onChange(option)} />
                ))}
            </styled.ButtonsContainer>
        </styled.ButtonInput>
    )
}

export default ButtonInput;