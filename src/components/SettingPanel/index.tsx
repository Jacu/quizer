import React from 'react';
import * as styled from './styles';
import Input from "~/components/Menu/Input/Input";
import SliderInput from '~/components/Menu/SliderInput';
import { ISetting, Category } from "~/store/reducers/startPage";
import CategoryInput from '../Menu/CategoryInput';

interface ISettingPanel {
    amount: ISetting<string>,
    category: ISetting<Category>,
    difficulty: ISetting<string>,
    type: ISetting<string>,
    onAmountChange: (newAmount: string) => void,
    onCategoryChange: (newAmount: Category) => void,
    onDifficultyChange: (newAmount: string) => void,
    onTypeChange: (newAmount: string) => void,
}

const SettingPanel: React.FC<ISettingPanel> = (props) => {
    const {amount, category, difficulty, type} = props;
    const {onAmountChange, onCategoryChange, onDifficultyChange, onTypeChange } = props;

    return (
        <styled.settingPanel>
            <SliderInput label="Question count" min={5} max={25} value={amount.selected} onChange={onAmountChange} />
            <CategoryInput label="Cateogry" options={category.values} value={category.selected} onChange={onCategoryChange} />
            <Input
                label="Type"
                values={type.values}
                selected={type.selected}
                onSelect={() => {}} />
            <Input
                label="Dificulity"
                values={difficulty.values}
                selected={difficulty.selected}
                onSelect={() => {}} />
        </styled.settingPanel>
    )
}

export default SettingPanel;