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
  background-color: rgb(0, 0, 0, 0.5);
  transition: all 0.1s linear;
  -webkit-box-shadow: 0px 5px 40px -13px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 5px 40px -13px rgba(0, 0, 0, 1);
  box-shadow: 0px 5px 40px -13px rgba(0, 0, 0, 1);
  &.dark {
    background-color: rgb(0, 0, 0, 0.5);
  }
  &.light {
    background-color: rgb(255, 255, 255, 0.9);
  }
`;
