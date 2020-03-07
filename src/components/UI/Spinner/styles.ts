import styled, { keyframes } from "styled-components";

const lds_dual_ring = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  display: flex;
  width: 64px;
  height: 64px;
  margin: 36px auto;
  
  :after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #125271;
    border-color: #125271 transparent #125271 transparent;
    animation: ${lds_dual_ring} 1.2s linear infinite;
  }
`;