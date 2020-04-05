import React from 'react';
import * as styled from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

interface IScore {
    score: number,
}

const Score: React.FC<IScore> = ({ score }) => {
    const numOfFullStars = Math.round(score / 20) === 5 && score !== 100 ? 4 : Math.round(score / 20);
    const numOfEmptyStars = 5 - numOfFullStars;
    console.log();

    return (
        <styled.Score>
            <styled.Label>{score}%</styled.Label>
            <styled.StarsContainer>
                {[...Array(numOfFullStars)].map(star => <FontAwesomeIcon icon={fasStar} />)}
                {[...Array(numOfEmptyStars)].map(star => <FontAwesomeIcon icon={farStar} />)}
            </styled.StarsContainer>
        </styled.Score>
    );
};

export default Score;