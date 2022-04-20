import React from "react";
import { StyledSideBar } from "../../atoms/SideBar/StyledSideBar";
import { StyledSideBarWrapper } from "../../atoms/SideBar/StyledSideBarWrapper";
import { StyledLink } from "../../atoms/Link/StyledLink";
import SocialIcons from "../SocialIcons/SocialIcons";

const variants = {
  open: { opacity: 1, right: 0 },
  closed: { opacity: 0, right: "-200px" },
};

export default function SideBar({ show, setShow }) {
  console.log(show);
  return (
    <>
      <StyledSideBar
        animate={show ? "open" : "closed"}
        variants={variants}
        transition={{
          delay: 0.05,
          duration: 0.4,
          type: "spring",
          //   stiffness: 100,
          damping: 8,
        }}
      >
        <StyledSideBarWrapper>
          <StyledLink
            onClick={() => setShow((show) => !show)}
            hasdeclaredfontsize="14px"
            hasdeclaredfontweight="600"
            hasdeclaredmargin="40px 0"
            hasdeclaredfontcolor="#fff"
            hasdeclaredtexttransform="uppercase"
            to="/"
          >
            Oferta
          </StyledLink>
          <StyledLink
            onClick={() => setShow((show) => !show)}
            hasdeclaredfontsize="14px"
            hasdeclaredfontweight="600"
            hasdeclaredmargin="40px 0"
            hasdeclaredfontcolor="#fff"
            hasdeclaredtexttransform="uppercase"
            to="/"
          >
            Realizacje
          </StyledLink>
          <StyledLink
            onClick={() => setShow((show) => !show)}
            hasdeclaredfontsize="14px"
            hasdeclaredfontweight="600"
            hasdeclaredmargin="40px 0"
            hasdeclaredfontcolor="#fff"
            hasdeclaredtexttransform="uppercase"
            to="/"
          >
            Kontakt
          </StyledLink>
          <StyledLink
            onClick={() => setShow((show) => !show)}
            hasdeclaredfontsize="14px"
            hasdeclaredfontweight="600"
            hasdeclaredmargin="40px 0"
            hasdeclaredfontcolor="#fff"
            hasdeclaredtexttransform="uppercase"
            to="/"
          >
            Dla akcjonariuszy
          </StyledLink>
          <SocialIcons />
        </StyledSideBarWrapper>
      </StyledSideBar>
    </>
  );
}
