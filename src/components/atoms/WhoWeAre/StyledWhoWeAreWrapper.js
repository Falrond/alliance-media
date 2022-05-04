import styled from "styled-components";

export const StyledWhoWeAreWrapper = styled.div`
  text-align: center;
  padding: 10px;
  color: #eee;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 916px) {
    flex-direction: column;
  }
`;
