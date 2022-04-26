import React from "react";
import { StyledNavigation } from "../../atoms/Navigation/StyledNavigation";
// import { Link } from "gatsby";
import { StyledLink } from "../../atoms/Link/StyledLink";
import { useRef, useEffect } from "react";
import { animationMoveY } from "../../../assets/animations/gsapAnimations";

const Navigation = React.forwardRef((props, ref) => {
  const navRef = useRef(null);

  const scrollInto = (ref) => {
    console.log(ref.current);
    ref.current.scrollIntoView({ behavior: "smooth" });
    // scrollTo(`.${ref.current.className.split(" ")[0]}`);
  };
  // useEffect(() => {
  //   console.log(ref[0].current);
  // }, []);

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
      <button
        onClick={() => scrollInto(ref[0])}
        hasdeclaredfontsize="14px"
        hasdeclaredfontweight="600"
        hasdeclaredmargin="0 40px 0 0"
        hasdeclaredfontcolor="#fff"
        hasdeclaredtexttransform="uppercase"
        to="/"
      >
        Realizacje
      </button>
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
});

export default Navigation;
