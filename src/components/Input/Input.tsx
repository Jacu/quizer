import React from 'react';
import * as styled from './styles';

interface InputProps {
    label: string,
    name: string,
    options: [],
    onChange: (setting: string, value: string) => void,
}

const Input: React.FC<InputProps> = props => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement> ) => {
        props.onChange(props.name, event.target.value)
    };

    return (
    <styled.Input>
        <styled.Label>{props.label}</styled.Label>
        <styled.Select onChange={handleChange}>
            {props.options.map(option =>
                <styled.Option
                    key={option}
                    value={option}>
                    {option}
                </styled.Option>)}
        </styled.Select>
    </styled.Input>
)}


export default Input;