import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1440px;
  width: 1440px;
  max-height: 1176px;
  display: flex;
  justify-content: center;
  overflowY:auto ;

  .header{
    display:flex;
    justify-content:flex-start;
    gap:20;
  }

  @media (max-width: 1024px){
    max-width: 1020px;
    min-width: 769px;
  
  }
  @media (max-width: 768px){
    max-width: 700px;
    min-width: 480px;
 
  }
  @media (max-width: 480px){
    max-width: 400px;
    min-width: 200px;
 
  }
`;
