import React from 'react';
import * as styled from './styles';
import Slider from '~/components/UI/Slider/Slider';

interface ISliderInput {
    label: string,
    min: number,
    max: number,
    value: string,
    onChange: (newValue: string) => void,
}

const SliderInput: React.FC<ISliderInput> = (props) => {
    return (
        <styled.SliderInput>
            <styled.Label>{props.label}</styled.Label>
            <styled.SliderContainer>
                <styled.ValueLabel>{props.value}</styled.ValueLabel>
                <styled.Slider>
                    <Slider {...props} />
                </styled.Slider>
            </styled.SliderContainer>
        </styled.SliderInput>
    )
};

export default SliderInput;