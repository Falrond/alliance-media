import React from "react";
import { StyledButton } from "../../../atoms/Button/StyledButton";
import { StyledHeroInfoWrapper } from "../../../atoms/HeroInfo/StyledHeroInfoWrapper";
import { StyledText } from "../../../atoms/Text/StyledText";
import { StyledButtonsWrapper } from "../../../atoms/HeroInfo/StyledButtonsWrapper";

export default function HeroInfo({ props }) {
  const { title1, title2 } = props;

  return (
    <StyledHeroInfoWrapper
      initial={{ y: -900 }}
      animate={{ y: 0 }}
      transition={{
        delay: 0.5,
        duration: 1.2,
        type: "spring",
        // stiffness: 260,
        damping: 10,
      }}
    >
      <StyledText
        as="h1"
        hasdeclaredfontcolor="#fff"
        hasdeclaredtexttransform="uppercase"
        hasdeclaredfontweight="600"
        hasdeclaredfontsize="55px"
      >
        {title1}
      </StyledText>
      <StyledText
        as="h2"
        hasdeclaredfontcolor="#fff"
        hasdeclaredtexttransform="uppercase"
        hasdeclaredfontsize="45px"
        hasdeclaredmargin="0 0 30px 0"
      >
        {title2}
      </StyledText>
      <StyledText
        hasdeclaredfontcolor="#fff"
        hasdeclaredfontsize="18px"
        hasdeclaredmargin="0 0 30px 0"
        hasdeclaredlineheight="1.5"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </StyledText>
      <StyledButtonsWrapper>
        <StyledButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Dowiedz się więcej
        </StyledButton>
        <StyledButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Kontakt
        </StyledButton>
      </StyledButtonsWrapper>
    </StyledHeroInfoWrapper>
  );
}
