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
    height: 10px;
    background: lightgrey;
    outline: none;

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        background: ${colors.primaryTheme.base};
        border-radius: 50%;
        cursor: pointer;
    }
`;