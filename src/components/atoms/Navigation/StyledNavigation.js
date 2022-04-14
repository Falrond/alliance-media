import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledNavigation = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  /* margin-right: 40px; */
  > a:hover {
    color: #ffc730;
  }
  @media only screen and (max-width: 916px) {
    display: none;
  }
`;
