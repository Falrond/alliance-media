import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSideBar = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: -200;
  bottom: 0;
  opacity: 0;
  background-color: #0e0e0e;
  width: 300px;
  z-index: 2;
  box-shadow: 21px 2px 48px -1px rgba(0, 0, 0, 0.9);
  display: none;

  @media only screen and (max-width: 916px) {
    display: flex;
  }
`;
