import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledCarouselImg = styled(motion.div)`
  min-height: 30rem;
  border-radius: 2rem;
  overflow: hidden;
  min-width: 20rem;
  margin: 0 40px;
  box-shadow: 0px 0px 26px -1px rgba(66, 68, 90, 1);
  /* padding: 40px; */

  img {
    pointer-events: none;
  }
`;
