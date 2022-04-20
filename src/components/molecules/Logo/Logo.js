import React from "react";
import { Link } from "gatsby";
import { StyledLogo } from "../../atoms/Logo/StyledLogo";

import logo from "../../../assets/images/kontra.svg";

export default function Logo() {
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
        <img src={logo} alt="logo"></img>
      </Link>
    </StyledLogo>
  );
}
