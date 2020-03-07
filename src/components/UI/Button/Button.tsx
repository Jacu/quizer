import React from 'react';
import * as styled from './styles';

interface ButtonProps {
    link: string,
    label: string,
    onClick: () => void,
};

const Button: React.FC<ButtonProps> = props => {
    return (
        <styled.Button
            children={props.label}
            to={props.link}
            onClick={props.onClick} />
    )
}

export default Button;