import React from "react";
import { Link } from "gatsby";
import { StyledLogo } from "../../atoms/Logo/StyledLogo";

import logo from "../../../assets/images/kontra.svg";
import { ReactComponent as Logotyp } from "../../../assets/images/kontra.svg";
import SvgComponent from "../../atoms/SvgComponent/SvgComponent";

export default function Logo({ children }) {
  return (
    <StyledLogo
      initial={{ x: -700 }}
      animate={{ x: 0 }}
      transition={{
        delay: 0.7,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <Link to="/">
        {/* <SvgComponent /> */}
        {children}
        {/* <img src={logo} alt="logo"></img> */}
      </Link>
    </StyledLogo>
  );
}
