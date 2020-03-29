import React from 'react';
import * as styled from './styles';
import { Category } from "~/store/reducers/startPage";
import { IInput } from '../';

const CategoryInput: React.FC<IInput<Category>> = (props) => {
    const optionsFormatted = props.options.map( category => ({value: category.id, label: category.name}));
    const value = optionsFormatted.filter( category => category.value === props.selected.id).pop();
    const handleChange = (newCategory) => {
        props.onChange({id: +newCategory, name: newCategory.label});
    }
    
    return (
        <styled.CategoryInput>
            <styled.Label>{props.label}</styled.Label>
            <styled.SelectContainer>
                <styled.Select classNamePrefix="rSelect" className="reactSelect" value={value} options={optionsFormatted} onChange={handleChange}/>
            </styled.SelectContainer>
        </styled.CategoryInput>
    )
}

export default CategoryInput;