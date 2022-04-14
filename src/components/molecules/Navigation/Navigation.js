import React from "react";
import { StyledNavigation } from "../../atoms/Navigation/StyledNavigation";
// import { Link } from "gatsby";
import { StyledLink } from "../../atoms/Link/StyledLink";

export default function Navigation() {
  return (
    <StyledNavigation
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        delay: 0.7,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <StyledLink
        hasdeclaredfontsize="14px"
        hasdeclaredfontweight="600"
        hasdeclaredmargin="0 40px 0 0"
        hasdeclaredfontcolor="#fff"
        hasdeclaredtexttransform="uppercase"
        to="/"
      >
        Oferta
      </StyledLink>
      <StyledLink
        hasdeclaredfontsize="14px"
        hasdeclaredfontweight="600"
        hasdeclaredmargin="0 40px 0 0"
        hasdeclaredfontcolor="#fff"
        hasdeclaredtexttransform="uppercase"
        to="/"
      >
        Realizacje
      </StyledLink>
      <StyledLink
        hasdeclaredfontsize="14px"
        hasdeclaredfontweight="600"
        hasdeclaredmargin="0 40px 0 0"
        hasdeclaredfontcolor="#fff"
        hasdeclaredtexttransform="uppercase"
        to="/"
      >
        Kontakt
      </StyledLink>
      <StyledLink
        hasdeclaredfontsize="14px"
        hasdeclaredfontweight="600"
        hasdeclaredfontcolor="#fff"
        hasdeclaredtexttransform="uppercase"
        to="/"
      >
        Dla akcjonariuszy
      </StyledLink>
    </StyledNavigation>
  );
}
