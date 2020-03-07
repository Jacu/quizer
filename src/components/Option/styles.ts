import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Option = styled(Link)`
    padding: 0 2rem;
    text-decoration: none;
    color: inherit;
    :hover {
        color:red;
    }
`;

export const Icon = styled(FontAwesomeIcon)`
    font-size: 2rem;
    margin-top: 1rem;
`;