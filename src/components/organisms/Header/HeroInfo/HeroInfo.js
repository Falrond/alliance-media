import React from "react";
import { StyledButton } from "../../../atoms/Button/StyledButton";
import { StyledHeroInfoWrapper } from "../../../atoms/HeroInfo/StyledHeroInfoWrapper";
import { StyledText } from "../../../atoms/Text/StyledText";
import { StyledButtonsWrapper } from "../../../atoms/HeroInfo/StyledButtonsWrapper";

export default function HeroInfo() {
  return (
    <StyledHeroInfoWrapper
      initial={{ y: -900 }}
      animate={{ y: 0 }}
      transition={{
        delay: 1.1,
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
        Pomożemy Ci zaistnieć
      </StyledText>
      <StyledText
        as="h2"
        hasdeclaredfontcolor="#fff"
        hasdeclaredtexttransform="uppercase"
        hasdeclaredfontsize="45px"
        hasdeclaredmargin="0 0 30px 0"
      >
        Zbudujemy Twoją markę
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
