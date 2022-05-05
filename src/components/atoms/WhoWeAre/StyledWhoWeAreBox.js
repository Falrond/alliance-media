import styled from "styled-components";

export const StyledWhoWeAreBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  padding: 0 30px;
  min-height: 350px;
  margin: 20px;
  @media only screen and (max-width: 916px) {
    padding: 0px;
    h2 {
      font-size: 35px;
    }
    p {
      font-size: 16px;
    }
  }
`;
