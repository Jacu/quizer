import React from 'react';
import * as styled from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

interface IScore {
    score: number,
}

const Score: React.FC<IScore> = ({ score }) => {
    const roundedScore = Math.max(Math.min(Math.round(score), 100), 0);
    const numOfFullStars = Math.max(Math.min(Math.round(score / 20) === 5 && roundedScore !== 100 ? 4 : Math.round(score / 20), 5), 0);
    const numOfEmptyStars = 5 - numOfFullStars;
    return (
        <styled.Score>
            <styled.Label>{roundedScore}%</styled.Label>
            <styled.StarsContainer>
                {[...Array(numOfFullStars)].map((_, i) => <FontAwesomeIcon key={i} icon={fasStar} />)}
                {[...Array(numOfEmptyStars)].map((_, i) => <FontAwesomeIcon key={i} icon={farStar} />)}
            </styled.StarsContainer>
        </styled.Score>
    );
};

export default Score;