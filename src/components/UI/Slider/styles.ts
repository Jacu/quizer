import styled from 'styled-components';
import * as colors from '~/utils/Colors';

interface ISlider {
    min: number,
    max: number,
}

export const Slider = styled.input.attrs<ISlider>(props => {
    return {
    type: "range",
    min: props.min,
    max: props.max,
    step: 5,
    }
})`
    -webkit-appearance: none;
    width: 100%;
    height: 8px;
    background: lightgrey;
    outline: none;
    border-radius: 16px;

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background: ${colors.primaryTheme.base};
        border-radius: 50%;
        cursor: pointer;
    }
`;