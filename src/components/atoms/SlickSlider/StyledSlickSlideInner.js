import styled from "styled-components";

export const StyledSlickSlideInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  @media only screen and (max-width: 916px) {
    /* border-right: 1px solid #ffc730; */
   flex-direction: column;
   p{
     font-size: 12px;
   }
    }
  }
`;
