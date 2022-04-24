import React from "react";
import { StyledRealizationWrapper } from "../../atoms/Realizations/StyledRealizationsWrapper";
import { StyledRelizationSection } from "../../atoms/Realizations/StyledRealizationSection";
import SlickSlider from "../SlickSlider/SlickSlider";
import { StyledText } from "../../atoms/Text/StyledText";

export default function Realizations() {
  return (
    <StyledRelizationSection>
      <StyledRealizationWrapper>
        <StyledText
          as="h2"
          hasdeclaredfontsize="44px"
          hasdeclaredfontweight="700"
          hasdeclaredtextalign="center"
          hasdeclaredfontcolor="#eeeeee"
          hasdeclaredmargin="0 0 80px 0"
        >
          Przykładowe realizacje
        </StyledText>
        <SlickSlider />
      </StyledRealizationWrapper>
    </StyledRelizationSection>
  );
}
