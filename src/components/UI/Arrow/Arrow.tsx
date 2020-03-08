import React from 'react';
import * as styled from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export enum ArrowDirection { Left, Right}

interface ArrowProps {
    direction: ArrowDirection,
    disable: boolean,
    onClick: () => void,
}

type Props = ArrowProps;

const Arrow: React.FC<Props> = ({direction, disable, onClick }) => {
    const isLeft = direction === ArrowDirection.Left;
    const icon = isLeft ? faChevronLeft : faChevronRight;
    const handleClick = () => {
        if(!disable) {
            onClick();
        }
    }

    return (
        <styled.Arrow onClick={handleClick} disable={disable}>
            <FontAwesomeIcon icon={icon}/>
        </styled.Arrow>
    );
};

export default Arrow;