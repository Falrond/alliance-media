import styled from "styled-components";

export const SocialIconsWrapper = styled.div`
  color: #fff;
  margin-right: 20px;
  font-family: "Montserrat";
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 170px;

  svg {
    & {
      color: #fff;
      /* opacity: 0.7; */
    }
  }

  .dark & {
    svg {
      & {
        color: #fff;
      }
    }
  }

  .light & {
    svg {
      & {
        color: #222;
      }
    }
  }

  svg {
    &:hover {
      color: #ffc730;
    }
  }

  @media only screen and (max-width: 916px) {
    display: none;
  }
`;
