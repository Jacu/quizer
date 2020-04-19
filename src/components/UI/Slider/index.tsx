import React from 'react';
import * as styled from './styles';

interface ISlider {
    value: number,
    min: number,
    max: number,
    onChange: (value: number) => void,
}

const Slider: React.FC<ISlider> = ({value, min, max, onChange}) => {
    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(+e.target.value);
    }
    return (
        <styled.Slider min={min} max={max} value={value} onChange={handleSliderChange}/>
    );
}

export default Slider;