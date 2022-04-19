import styled from "styled-components";

export const StyledBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 0;

  @media only screen and (max-width: 916px) {
    flex-direction: column;
    align-items: center;
  }
`;
