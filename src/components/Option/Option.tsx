import React from 'react';
import * as styled from './styles'
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

interface Option {
    icon: IconDefinition,
    link: string,
    label: string,
    onClick? : () => void,
}

const Option: React.FC<Option> = ({icon, link, label, onClick}) => {
    return (
        <styled.Option to={link} onClick={onClick} >
            <styled.Icon icon={icon} />
            <h3> {label} </h3>
        </styled.Option>
    )
}

export default Option;