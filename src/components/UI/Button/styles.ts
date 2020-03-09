import styled from "styled-components";

export const Button = styled.div`
    color: inherit;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    background: white;
    padding: 20px 50px;    
    border-radius: 25px;
    font-weight: bold;
    font-size: 2rem;
    box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.25);
    transition: transform 0.25s;
    margin: 2rem;
    :hover {
        transform: scale(1.2,1.2);    
    }
`;