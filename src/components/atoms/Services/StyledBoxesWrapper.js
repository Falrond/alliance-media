import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledBoxesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 916px) {
    flex-direction: column;
  }
`;
