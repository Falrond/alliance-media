import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHeader = styled(motion.header)`
  width: 100%;
  height: 90px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  transition: background-color 0.2s ease;
  &.dark {
    /* background-color: white; */
  }
  &.light {
    /* background-color: #1c1d21; */
  }
`;
