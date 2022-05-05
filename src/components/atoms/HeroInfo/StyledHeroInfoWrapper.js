import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHeroInfoWrapper = styled(motion.div)`
  position: absolute;
  top: 450px;
  left: 0;
  width: 840px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 50px;
  &:hover {
  }

  @media only screen and (max-width: 916px) {
    /* top: 240px; */
    padding: 20px;
    width: 100%;
    h1 {
      font-size: 35px;
    }
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 400px) {
    top: 240px;
  }
`;
