import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSideBarButton = styled(motion.button)`
  display: none;
  background-color: #0e0e0e;
  position: fixed;
  top: 20px;
  right: 25px;
  z-index: 3;
  border: none;
  outline: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  &:hover {
    outline: none;
  }
  @media only screen and (max-width: 916px) {
    display: flex;
  }
`;
