import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StyledWhoWeAreSection } from "../../atoms/WhoWeAre/StyledWhoWeAreSection";
import { StyledWhoWeAreWrapper } from "../../atoms/WhoWeAre/StyledWhoWeAreWrapper";
import { StyledWhoWeAreBox } from "../../atoms/WhoWeAre/StyledWhoWeAreBox";
import { StyledWhoWeAreImageWrapper } from "../../atoms/WhoWeAre/StyledWhoWeAreImageWrapper";
import { StyledText } from "../../atoms/Text/StyledText";
import { StaticImage } from "gatsby-plugin-image";

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const section = useRef(null);

  const scrollAnimation = (
    element,
    triggerElement,
    triggerPos,
    viewportPos
  ) => {
    gsap.fromTo(
      element,
      { x: "-=400", opacity: 0, rotate: 90 },
      {
        x: 0,
        rotate: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: triggerElement,
          start: `${triggerPos} ${viewportPos}`, // when the top of the trigger hits the top of the viewport
          end: "+=200", // end after scrolling 500px beyond the start
          scrub: 1.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
      }
    );
  };

  useEffect(() => {
    const animateBox1 = box1.current;
    const animateBox2 = box2.current;
    const sectionRef = section.current;

    scrollAnimation(animateBox1, sectionRef, "80%", "bottom");
    scrollAnimation(animateBox2, sectionRef, "40%", "bottom");
  }, []);
  return (
    <StyledWhoWeAreSection ref={section}>
      <StyledWhoWeAreWrapper>
        <StyledWhoWeAreBox ref={box1}>
          <StyledWhoWeAreImageWrapper>
            <StaticImage
              src="../../../assets/images/oferta_bg.png"
              alt="sectionImage"
            />
          </StyledWhoWeAreImageWrapper>
        </StyledWhoWeAreBox>
        <StyledWhoWeAreBox ref={box2}>
          <StyledText
            as="h2"
            hasdeclaredfontsize="44px"
            hasdeclaredfontweight="700"
            hasdeclaredtextalign="left"

            // hasdeclaredmargin="32px 0 16px"
          >
            Poznajmy się!
          </StyledText>
          <StyledText
            hasdeclaredfontweight="600"
            hasdeclaredlineheight="1.6"
            hasdeclaredpadding="1.6rem 0"
            hasdeclaredletterspacing="0.3px"
            hasdeclaredfontsize="20px"
          >
            Alliance Media Polska S.A. to poznańska agencja interaktywna.
          </StyledText>

          <StyledText
            hasdeclaredfontweight="500"
            hasdeclaredlineheight="1.6"
            hasdeclaredletterspacing="0.3px"
            hasdeclaredfontsize="18px"
          >
            Oferujemy szereg usług związanych z reklamą oraz identyfikacją
            wizualną Twojej firmy od stworzenia profesjonalnej strony
            internetowej, prezentacji multimedialnych, layoutów reklam,
            projektów wizytówek czy papieru firmowego, po działania z zakresu
            ATL i BTL oraz zaplanowanie i przeprowadzenie kampanii promocyjnej w
            wybranych przez Klienta mediach.
          </StyledText>
        </StyledWhoWeAreBox>
      </StyledWhoWeAreWrapper>
    </StyledWhoWeAreSection>
  );
}
