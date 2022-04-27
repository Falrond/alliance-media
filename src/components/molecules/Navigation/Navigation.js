import React from "react";
import { StyledNavigation } from "../../atoms/Navigation/StyledNavigation";
import { StyledLink } from "../../atoms/Link/StyledLink";
import { useRef, useEffect } from "react";
import { StyledNavButton } from "../../atoms/Button/StyledNavButton";

const Navigation = React.forwardRef((props, ref) => {
  const navRef = useRef(null);

  const scrollInto = (ref) => {
    console.log(ref.current);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledNavigation
      ref={navRef}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        delay: 0.7,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <StyledNavButton
        onClick={() => scrollInto(ref[0])}
        hasdeclaredfontsize="14px"
        hasdeclaredfontweight="600"
        hasdeclaredmargin="0 40px 0 0"
        hasdeclaredfontcolor="#fff"
        hasdeclaredtexttransform="uppercase"
        to="/"
      >
        O nas
      </StyledNavButton>

      <StyledNavButton
        onClick={() => scrollInto(ref[1])}
        hasdeclaredfontsize="14px"
        hasdeclaredfontweight="600"
        hasdeclaredmargin="0 40px 0 0"
        hasdeclaredfontcolor="#fff"
        hasdeclaredtexttransform="uppercase"
        to="/"
      >
        Realizacje
      </StyledNavButton>
      <StyledNavButton
        onClick={() => scrollInto(ref[2])}
        hasdeclaredfontsize="14px"
        hasdeclaredfontweight="600"
        hasdeclaredmargin="0 40px 0 0"
        hasdeclaredfontcolor="#fff"
        hasdeclaredtexttransform="uppercase"
        to="/"
      >
        Cennik
      </StyledNavButton>
      <StyledNavButton
        onClick={() => scrollInto(ref[3])}
        hasdeclaredfontsize="14px"
        hasdeclaredfontweight="600"
        hasdeclaredfontcolor="#fff"
        hasdeclaredtexttransform="uppercase"
        to="/"
      >
        Kontakt
      </StyledNavButton>
    </StyledNavigation>
  );
});

export default Navigation;
