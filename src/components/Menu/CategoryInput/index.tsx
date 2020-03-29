import React from 'react';
import * as styled from './styles';
import { Category } from "~/store/reducers/startPage";
import Select from 'react-select';

interface OptionType {
    value: number,
    label: string,
}

interface CategoryInput {
    label: string,
    value: Category,
    options: Category[],
    onChange: (newCategory: Category) => void,
}

const CategoryInput: React.FC<CategoryInput> = (props) => {
    const optionsFormatted = props.options.map( category => ({value: category.id, label: category.name}));
    const value = optionsFormatted.filter( category => category.value === props.value.id).pop();
    const handleChange = (newCategory) => {
        props.onChange({id: +newCategory, name: newCategory.label});
    }
    
    return (
        <styled.CategoryInput>
            <styled.Label>{props.label}</styled.Label>
            <styled.SelectContainer>
                <styled.Select className="reactSelect" value={value} options={optionsFormatted} onChange={handleChange}/>
            </styled.SelectContainer>
        </styled.CategoryInput>
    )
}

export default CategoryInput;