import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledNavigation = styled(motion.nav)`
  display: flex;
  justify-content: space-between;

  /* .dark & {
    color: #333;
  } */

  > a:hover {
    color: #ffc730;
  }
  @media only screen and (max-width: 916px) {
    display: none;
  }
`;
