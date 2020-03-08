import styled from 'styled-components';

interface ArrowLinkProps {
    disable: boolean,
};

export const Arrow = styled.div<ArrowLinkProps>`
    color: ${props => props.disable ? "rgba(80,80,80,0.2)" : "inherit"};
    font-size: 4rem;
    flex: 1;
    cursor: ${props => props.disable ? "not-allowed" : "pointer" };
`;