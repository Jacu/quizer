import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ArrowLinkProps {
    disabled: boolean,
};

export const ArrowLink = styled(Link)<ArrowLinkProps>`
    color: ${props => props.disabled ? "rgba(80,80,80,0.2)" : "inherit"};
    font-size: 4rem;
    flex: 1;
    cursor: ${props => props.disabled ? "not-allowed" : "pointer" };
`;