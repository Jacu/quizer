import React from 'react';
import * as styled from './styles';
import { Category } from "~/store/reducers/startPage";
import { IInput } from '../';
import { ValueType } from "react-select";

type OptionType = { label: string; value: number };

const DropdownInput: React.FC<IInput<Category>> = (props) => {
    const optionsFormatted = props.options.map(category => ({ value: category.id, label: category.name }));
    const value = optionsFormatted.filter(category => category.value === props.selected.id).pop();
    const handleChange = (newCategory: ValueType<OptionType>) => {
        const id = (newCategory as OptionType).value;
        const name = (newCategory as OptionType).label;
        props.onChange({ id, name });
    }

    return (
        <styled.DropdownInput>
            <styled.Label>{props.label}</styled.Label>
            <styled.SelectContainer>
                <styled.Select classNamePrefix="rSelect" className="reactSelect" value={value} options={optionsFormatted} onChange={handleChange} />
            </styled.SelectContainer>
        </styled.DropdownInput>
    )
}

export default DropdownInput;