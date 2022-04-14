import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)`
  border-radius: 5px 5px 5px 5px;
  padding: 15px 40px 15px 40px;
  background-color: #ffc730;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  font-family: Montserrat;
  font-size: 15px;
  margin-right: 10px;
  cursor: pointer;
  /* &:hover {
    background-color: #cf2e2e;
  } */
`;
