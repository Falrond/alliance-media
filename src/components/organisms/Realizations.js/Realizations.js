import React, { useRef, useEffect, forwardRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { StyledRealizationWrapper } from "../../atoms/Realizations/StyledRealizationsWrapper";
import { StyledRelizationSection } from "../../atoms/Realizations/StyledRealizationSection";
import SlickSlider from "../SlickSlider/SlickSlider";
import { StyledText } from "../../atoms/Text/StyledText";
import { scrollAnimation2 } from "../../../assets/animations/gsapAnimations";
import { scrollAnimation3 } from "../../../assets/animations/gsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const Realizations = forwardRef((props, ref) => {
  const headerSliderSection = useRef(null);
  const section = useRef(null);
  const sliderWrapper = useRef(null);

  useEffect(() => {
    const animateHeader = headerSliderSection.current;
    const sectionRef = ref.current;
    const animateWrapper = sliderWrapper.current;

    scrollAnimation2(animateHeader, sectionRef, "20%", "bottom");
    scrollAnimation3(animateWrapper, sectionRef, "20%", "bottom");
  }, []);

  return (
    <StyledRelizationSection ref={ref} className="dark">
      <StyledRealizationWrapper ref={sliderWrapper}>
        <StyledText
          ref={headerSliderSection}
          as="h2"
          hasdeclaredfontsize="44px"
          hasdeclaredfontweight="700"
          hasdeclaredtextalign="left"
          hasdeclaredfontcolor="#eeeeee"
          hasdeclaredmargin="100px 0 80px 30px"
        >
          Przykładowe realizacje
        </StyledText>
        <SlickSlider />
      </StyledRealizationWrapper>
    </StyledRelizationSection>
  );
});

export default Realizations;
