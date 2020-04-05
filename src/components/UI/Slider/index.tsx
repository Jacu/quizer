import React from 'react';
import * as styled from './styles';

interface ISlider {
    value: string,
    min: number,
    max: number,
    onChange: (value: string) => void,
}

const Slider: React.FC<ISlider> = (props) => {
    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.target.value);
    }
    return (
        <styled.Slider min={props.min} max={props.max} value={props.value} onChange={handleSliderChange}/>
    );
}

export default Slider;