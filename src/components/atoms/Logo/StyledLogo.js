import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledLogo = styled(motion.div)`
  height: 80px;
  margin-left: 20px;
  a {
    text-decoration: none;
  }
  img {
    height: 100%;
    color: blue;
  }
  svg {
    height: 100%;
  }
  .dark & {
    svg {
      & {
        fill: #fff;
      }
    }
  }

  .light & {
    svg {
      & {
        fill: #222;
      }
    }
  }
`;
