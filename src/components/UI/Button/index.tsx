import React from 'react';
import * as styled from './styles';

interface IButton {
    label?: string,
    size?: number,
    uppercase?: boolean,
    bold?: boolean,
    onClick: () => void,
}

const Button: React.FC<IButton> = ({label='', onClick, size=1.25, uppercase, bold}) => {
    return (
        <styled.Button
            bold={bold}
            uppercase={uppercase}
            size={size}
            children={label}
            onClick={onClick} />
    )
}

export default Button;