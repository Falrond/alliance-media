import React from "react";
import { MdComputer } from "@react-icons/all-files/md/MdComputer";
import { IoIosColorPalette } from "@react-icons/all-files/io/IoIosColorPalette";
import { RiArticleLine } from "@react-icons/all-files/ri/RiArticleLine";
import { StyledWhatWeOfferSection } from "../../atoms/WhatWeOffer/StyledWhatWeOfferSection";
import { StyledWhatWeOfferWrapper } from "../../atoms/WhatWeOffer/StyledWhatWeOfferWrapper";
import { StyledBoxWrapper } from "../../atoms/WhatWeOffer/StyledBoxWrapper";
import { StyledBox } from "../../atoms/WhatWeOffer/StyledBox";
import { StyledText } from "../../atoms/Text/StyledText";

export default function WhatWeOffer() {
  return (
    <StyledWhatWeOfferSection>
      <StyledWhatWeOfferWrapper>
        <StyledText
          as="h1"
          hasdeclaredfontsize="44px"
          hasdeclaredfontweight="700"
          hasdeclaredtextalign="center"
          // hasdeclaredmargin="32px 0 16px"
        >
          Czym się zajmujemy?
        </StyledText>
        {/* <StyledText>
          Alliance Media Polska S.A. to poznańska agencja interaktywna.
        </StyledText> */}
        <StyledBoxWrapper>
          <StyledBox>
            <MdComputer size={50} />
            <StyledText
              hasdeclaredtextalign="center"
              hasdeclaredfontsize="24px"
              hasdeclaredlineheight="1.6"
              hasdeclaredpadding="12px 1.6rem"
              hasdeclaredfontweight="700"
            >
              Strony internetowe i aplikacje mobilne
            </StyledText>
            <StyledText
              hasdeclaredtextalign="center"
              hasdeclaredfontsize="16px"
              hasdeclaredfontweight="500"
              hasdeclaredlineheight="1.6"
              hasdeclaredpadding="0 1.6rem"
              hasdeclaredletterspacing="0.3px"
            >
              Projektowanie graficzne i implementacja responsywnych stron www i
              aplikacji mobilnych
            </StyledText>
          </StyledBox>
          <StyledBox>
            <IoIosColorPalette size={50} />
            <StyledText
              hasdeclaredtextalign="center"
              hasdeclaredfontsize="24px"
              hasdeclaredlineheight="1.6"
              hasdeclaredpadding="12px 1.6rem"
              hasdeclaredfontweight="700"
            >
              Identyfikacja wizualna
            </StyledText>
            <StyledText
              hasdeclaredtextalign="center"
              hasdeclaredfontsize="16px"
              hasdeclaredfontweight="500"
              hasdeclaredlineheight="1.6"
              hasdeclaredpadding="0 1.6rem"
              hasdeclaredletterspacing="0.3px"
            >
              Projektowanie graficzne logo, wizytówek, papieru firmowego,
              materiałów promocyjnych, reklam, ulotek, plakatów, folderów,
              prezentacji multimedialnych etc.
            </StyledText>
          </StyledBox>
          <StyledBox>
            <RiArticleLine size={50} />
            <StyledText
              hasdeclaredtextalign="center"
              hasdeclaredfontsize="24px"
              hasdeclaredlineheight="1.6"
              hasdeclaredpadding="12px 1.6rem"
              hasdeclaredfontweight="700"
            >
              Copywriting
            </StyledText>
            <StyledText
              hasdeclaredtextalign="center"
              hasdeclaredfontsize="16px"
              hasdeclaredfontweight="500"
              hasdeclaredlineheight="1.6"
              hasdeclaredpadding="0 1.6rem"
              hasdeclaredletterspacing="0.3px"
            >
              Tworzenie treści reklamowych, sloganów, scenariuszy reklam,
              artykułów tematycznych, contentu na strony internetowe, do broszur
              reklamowych, etc.
            </StyledText>
          </StyledBox>
        </StyledBoxWrapper>
      </StyledWhatWeOfferWrapper>
    </StyledWhatWeOfferSection>
  );
}
