import styled from "styled-components";
import { PRIMARY_THEME } from "~/utils/colors";

interface IButtonStyle {
    size: number,
    uppercase?: boolean,
    bold?: boolean,
}

export const Button = styled.div<IButtonStyle>`
    color: white;
    text-decoration: none;
    text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
    cursor: pointer;
    background: ${PRIMARY_THEME.BASE};
    padding: 15px 25px;
    font-size: ${props => `${props.size}rem`};
    font-weight: ${props => props.bold ? 'bold' : 'normal' };
    margin: 2rem;
    :hover {
        background: ${PRIMARY_THEME.DARK};
    }
`;