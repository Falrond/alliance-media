import styled from "styled-components";

export const StyledFooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  color: white;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 916px) {
    flex-direction: column;
  }
`;
