import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PRIMARY_THEME } from "~/utils/colors";

export const NavBar = styled.div`
    color: ${PRIMARY_THEME.BASE};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    text-align: left;
    background: #F2F2F2;
    width: 100%;
    bottom: 0;
    padding: 0 15px;
    left: 0;
`;

export const Icon = styled(FontAwesomeIcon)`
    font-size: 2rem;
    margin: 15px;
    cursor: pointer;
`;

export const QuestionCounter = styled.div`
`;

export const ButtonContainer = styled.div`
`;