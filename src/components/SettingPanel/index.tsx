import React from 'react';
import * as styled from './styles';
import { ISetting, Category } from "~/store/reducers/startPage";
import { DropdownInput, SliderInput, ButtonInput } from './Inputs';

interface ISettingPanel {
    amount: ISetting<number>,
    category: ISetting<Category>,
    difficulty: ISetting<string>,
    type: ISetting<string>,
    onQuantityChange: (newAmount: number) => void,
    onCategoryChange: (newAmount: Category) => void,
    onTypeChange: (newAmount: string) => void,
    onDifficultyChange: (newAmount: string) => void,
}

const SettingPanel: React.FC<ISettingPanel> = (props) => {
    const {amount, category, difficulty, type} = props;
    const {onQuantityChange, onCategoryChange, onDifficultyChange, onTypeChange } = props;

    return (
        <styled.SettingPanel>
            <SliderInput label="Quantity" options={[5,30]} selected={amount.selected} onChange={onQuantityChange} />
            <DropdownInput label="Category" options={category.values} selected={category.selected} onChange={onCategoryChange} />
            <ButtonInput label="Type" options={type.values} selected={type.selected} onChange={onTypeChange} />
            <ButtonInput label="Difficulty" options={difficulty.values} selected={difficulty.selected} onChange={onDifficultyChange} />
        </styled.SettingPanel>
    )
}

export default SettingPanel;