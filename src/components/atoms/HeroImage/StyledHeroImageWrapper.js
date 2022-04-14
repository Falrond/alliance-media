import styled from "styled-components";

export const StyledHeroImageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* filter: brightness(80%); */
    img {
      -webkit-animation: zoomin 20s linear;
      animation: zoomin 20s linear;
      animation-fill-mode: forwards;

      @keyframes zoomin {
        0% {
          -webkit-transform: scale(1);
          transform: scale(1);
        }
        100% {
          -webkit-transform: scale(1.25);
          transform: scale(1.25);
        }
      }
    }
  }
`;
