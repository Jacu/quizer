import React from 'react';
import * as styled from './styles';
import Slider from '~/components/UI/Slider';
import { IInput } from '../';

const SliderInput: React.FC<IInput<number>> = ({ label, selected, options, onChange }) => {
    return (
        <styled.SliderInput>
            <styled.Label>{label}</styled.Label>
            <styled.SliderContainer>
                <styled.ValueLabel>{selected}</styled.ValueLabel>
                <styled.Slider>
                    <Slider value={selected} min={options[0] || 0} max={options[1] || 1} onChange={onChange} />
                </styled.Slider>
            </styled.SliderContainer>
        </styled.SliderInput>
    )
};

export default SliderInput;