import React from 'react';
import * as styled from './styles';

interface ButtonProps {
    label: string,
    onClick: () => void,
};

const Button: React.FC<ButtonProps> = props => {
    return (
        <styled.Button
            children={props.label}
            onClick={props.onClick} />
    )
}

export default Button;