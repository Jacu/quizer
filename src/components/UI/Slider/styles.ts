import styled from 'styled-components';
import { PRIMARY_THEME } from '~/utils/colors';

interface ISlider {
    min: number,
    max: number,
}

export const Slider = styled.input.attrs<ISlider>(props => ({
    type: "range",
    min: props.min,
    max: props.max,
    step: 5,
}))`
    -webkit-appearance: none;
    width: 100%;
    height: 8px;
    background: lightgrey;
    outline: none;
    border-radius: 16px;
    cursor: pointer;

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background: ${PRIMARY_THEME.BASE};
        border-radius: 50%;
    }
`;