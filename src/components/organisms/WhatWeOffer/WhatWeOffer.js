import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdComputer } from "@react-icons/all-files/md/MdComputer";
import { IoIosColorPalette } from "@react-icons/all-files/io/IoIosColorPalette";
import { RiArticleLine } from "@react-icons/all-files/ri/RiArticleLine";
import { StyledWhatWeOfferSection } from "../../atoms/WhatWeOffer/StyledWhatWeOfferSection";
import { StyledWhatWeOfferWrapper } from "../../atoms/WhatWeOffer/StyledWhatWeOfferWrapper";
import { StyledBoxWrapper } from "../../atoms/WhatWeOffer/StyledBoxWrapper";
import { StyledBox } from "../../atoms/WhatWeOffer/StyledBox";
import { StyledText } from "../../atoms/Text/StyledText";
import { scrollAnimation } from "../../../assets/animations/gsapAnimations";

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeOffer() {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const section = useRef(null);
  const sectionHeader = useRef(null);

  // const scrollAnimation = (
  //   element,
  //   triggerElement,
  //   triggerPos,
  //   viewportPos
  // ) => {
  //   gsap.fromTo(
  //     element,
  //     { y: "-=200", opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: triggerElement,
  //         start: `${triggerPos} ${viewportPos}`, // when the top of the trigger hits the top of the viewport
  //         end: "+=200", // end after scrolling 500px beyond the start
  //         scrub: 1.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  //       },
  //     }
  //   );
  // };

  useEffect(() => {
    const animateBox1 = box1.current;
    const animateBox2 = box2.current;
    const animateBox3 = box3.current;
    const sectionRef = section.current;
    const sectionHeaderRef = sectionHeader.current;

    scrollAnimation(animateBox1, sectionRef, "40%", "bottom");
    scrollAnimation(animateBox2, sectionRef, "55%", "bottom");
    scrollAnimation(animateBox3, sectionRef, "70%", "bottom");
    scrollAnimation(sectionHeaderRef, sectionRef, "top", "90%");
  }, []);
  return (
    <StyledWhatWeOfferSection ref={section}>
      <StyledWhatWeOfferWrapper>
        <StyledText
          ref={sectionHeader}
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
          <StyledBox ref={box1}>
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
          <StyledBox ref={box2}>
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
          <StyledBox ref={box3}>
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
