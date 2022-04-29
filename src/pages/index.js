import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/organisms/Header/Header";
import WhoWeAre from "../components/organisms/WhoWeAre/WhoWeAre";
import WhatWeOffer from "../components/organisms/WhatWeOffer/WhatWeOffer";
import HeroInfo from "../components/organisms/Header/HeroInfo/HeroInfo";
import { StyledHeroImageWrapper } from "../components/atoms/HeroImage/StyledHeroImageWrapper";
import { StyledIndexMain } from "../components/atoms/Main/StyledIndexMain";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SideBar from "../components/molecules/SideBar/SideBar";
import SideBarButton from "../components/atoms/SideBarButton/SideBarButton";
import Realizations from "../components/organisms/Realizations.js/Realizations";
import Services from "../components/organisms/Services/Services";
import Footer from "../components/organisms/Footer/Footer";
import Scrollbar from "smooth-scrollbar";
import { ScrollContainer } from "../components/atoms/ScrollContainer/ScrollContainer";

const IndexPage = ({ data }) => {
  gsap.registerPlugin(ScrollTrigger);
  const [show, setShow] = useState(false);
  const image = getImage(data.file.childImageSharp);
  const aboutUs = useRef(null);
  const realizations = useRef(null);
  const servicesRef = useRef(null);
  const contact = useRef(null);
  const whatWeOffer = useRef(null);

  const container = useRef(null);
  const scrollContainer = useRef(null);

  // useEffect(() => {
  //   const scroller = container.current;
  //   const bodyScrollBar = Scrollbar.init(scroller, {
  //     damping: 0.1,
  //     delegateTo: document,
  //     alwaysShowTracks: true,
  //   });

  //   ScrollTrigger.scrollerProxy(scroller, {
  //     scrollTop(value) {
  //       if (arguments.length) {
  //         bodyScrollBar.scrollTop = value;
  //       }
  //       return bodyScrollBar.scrollTop;
  //     },
  //   });

  //   bodyScrollBar.addListener(ScrollTrigger.update);

  //   ScrollTrigger.defaults({ scroller: scroller });
  // }, []);
  return (
    <StyledIndexMain ref={container}>
      <Header
        ref={[aboutUs, whatWeOffer, realizations, servicesRef, contact]}
      />
      <ScrollContainer ref={scrollContainer}>
        <SideBarButton show={show} setShow={setShow} />
        <SideBar
          props={{ show, setShow }}
          ref={[aboutUs, whatWeOffer, realizations, servicesRef, contact]}
        />
        <StyledHeroImageWrapper>
          <GatsbyImage image={image} alt="heroImage" />
        </StyledHeroImageWrapper>
        <HeroInfo />
        <WhoWeAre ref={aboutUs} />
        <WhatWeOffer ref={whatWeOffer} />
        <Realizations ref={realizations} />
        <Services ref={servicesRef} />
        <Footer
          ref={{
            contact,
            ref: [aboutUs, whatWeOffer, realizations, servicesRef, contact],
          }}
        />
      </ScrollContainer>
    </StyledIndexMain>
  );
};

export const query = graphql`
  query getHeroImage {
    file(relativePath: { eq: "hero7.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100)
      }
    }
  }
`;

export default IndexPage;
