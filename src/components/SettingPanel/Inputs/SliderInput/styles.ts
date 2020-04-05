import styled from 'styled-components';
import { GRAY } from '~/utils/colors';

export const SliderInput = styled.div`
    display: flex;
    margin: 10px 0px;
`;

export const ValueLabel = styled.div`
    font-size: 1.5rem;
    flex: 1;
`;

export const Label = styled.div`
    width: 100%;
    flex: 1;
    text-align: end;
    font-size: 1.5rem;
    padding: 0 20px;
    border-right: 1px solid ${GRAY.BASE};
`;

export const SliderContainer = styled.div`
    width: 100%;
    flex: 4;
    display: flex;
    align-items: center;
`;

export const Slider = styled.div`
    flex: 3;
    padding-right: 50px;
`;