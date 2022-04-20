import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSideBarWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > a:hover {
    color: #ffc730;
  }
`;
