import React from "react";
import { StyledFooterSection } from "../../atoms/Footer/StyledFooterSection";
import { StyledFooterWrapper } from "../../atoms/Footer/StyledFooterWrapper";
import { StyledFooterContactUs } from "../../atoms/Footer/StyledFooterContactUs";
import { StyledFooterSocials } from "../../atoms/Footer/StyledFooterSocials";
import { StyledText } from "../../atoms/Text/StyledText";

export default function Footer() {
  return (
    <StyledFooterSection>
      <StyledFooterWrapper>
        <StyledFooterContactUs>
          <StyledText
            hasdeclaredtextalign="center"
            hasdeclaredfontsize="24px"
            hasdeclaredlineheight="1.6"
            hasdeclaredpadding="12px 1.6rem"
            hasdeclaredfontweight="700"
          >
            Skontaktuj się z nami
          </StyledText>
          <StyledText
            hasdeclaredtextalign="center"
            hasdeclaredfontsize="16px"
            hasdeclaredfontweight="500"
            hasdeclaredlineheight="1.6"
            hasdeclaredpadding="0.5rem 1.6rem"
            hasdeclaredletterspacing="0.3px"
          >
            Alliance Technology Polska Sp. z o. o.,
          </StyledText>
          <StyledText
            hasdeclaredtextalign="center"
            hasdeclaredfontsize="16px"
            hasdeclaredfontweight="500"
            hasdeclaredlineheight="1.6"
            hasdeclaredpadding="0.5rem 1.6rem"
            hasdeclaredletterspacing="0.3px"
          >
            ul. J. H. Dąbrowskiego 29, 60-840 Poznań
          </StyledText>
          <StyledText
            hasdeclaredtextalign="center"
            hasdeclaredfontsize="16px"
            hasdeclaredfontweight="500"
            hasdeclaredlineheight="1.6"
            hasdeclaredpadding="0.5rem 1.6rem"
            hasdeclaredletterspacing="0.3px"
          >
            tel. (+48) 61 852 43 65
          </StyledText>
          <StyledText
            hasdeclaredtextalign="center"
            hasdeclaredfontsize="16px"
            hasdeclaredfontweight="500"
            hasdeclaredlineheight="1.6"
            hasdeclaredpadding="0.5rem 1.6rem"
            hasdeclaredletterspacing="0.3px"
          >
            info@alliancemedia.pl
          </StyledText>
        </StyledFooterContactUs>
        <StyledFooterSocials>Logo links i fejsbuk</StyledFooterSocials>
      </StyledFooterWrapper>
    </StyledFooterSection>
  );
}
