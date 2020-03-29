import React from 'react';
import * as styled from './styles';
import Input from "~/components/Menu/Input/Input";
import { IFontSize } from '~/components/UI/Tile/Tile';
import Slider from "../UI/Slider/Slider";
import SliderInput from '~/components/Menu/SliderInput';
import { ISetting } from "~/store/reducers/startPage";

interface ISettingPanel {
    amount: ISetting<string>,
    category,
    difficulty,
    type,
    onChange,
}

const SettingPanel: React.FC<ISettingPanel> = ({amount, category, difficulty, type, onChange}) => {
    const handleQuestionAmountChange = (newAmount: string) => {
        onChange("amount", newAmount);
    };

    return (
        <styled.settingPanel>
            {/* <Input
                label="Question count"
                values={amount.values}
                fontSize={IFontSize.Big}
                selected={amount.selected}
                onSelect={(value) => onChange("amount", value)} /> */}
            <SliderInput label="Question count" min={5} max={25} value={amount.selected} onChange={handleQuestionAmountChange} />
            <Input
                label="Category"
                values={category.values.map(obj => obj.name)}
                fontSize={IFontSize.Small}
                selected={category.selected}
                onSelect={(value) => onChange("category", value)} />
            <Input
                label="Type"
                values={type.values}
                selected={type.selected}
                onSelect={(value) => onChange("type", value)} />
            <Input
                label="Dificulity"
                values={difficulty.values}
                selected={difficulty.selected}
                onSelect={(value) => onChange("difficulty", value)} />
        </styled.settingPanel>
    )
}

export default SettingPanel;