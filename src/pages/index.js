import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
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
import Carousel from "../components/organisms/Carousel/Carousel";
import SlickSlider from "../components/organisms/SlickSlider/SlickSlider";
import Realizations from "../components/organisms/Realizations.js/Realizations";
import Services from "../components/organisms/Services/Services";
import Footer from "../components/organisms/Footer/Footer";

const IndexPage = ({ data }) => {
  gsap.registerPlugin(ScrollTrigger);
  const [show, setShow] = useState(false);
  const image = getImage(data.file.childImageSharp);
  const servicesRef = useRef(null);
  const aboutUs = useRef(null);

  const container = useRef(null);

  const scrollAnimate = () => {
    gsap.to(servicesRef.current, {
      duration: 2,
    });
  };

  useEffect(() => {
    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
      scroller: container.current,
    });

    gsap.to(".jeden h1", {
      scrollTrigger: {
        trigger: ".jeden",
        scroller: container.current,
        markers: true,
        scrub: true,
      },
      duration: 2,
    });
  }, []);

  return (
    <StyledIndexMain ref={container}>
      <Header ref={[servicesRef]} />
      <SideBarButton show={show} setShow={setShow} />
      <SideBar props={{ show, setShow }} ref={[servicesRef]} />
      <StyledHeroImageWrapper>
        <GatsbyImage image={image} alt="heroImage" />
      </StyledHeroImageWrapper>
      <HeroInfo />
      <section className="jeden">
        <h1 className="1">1</h1>
        <WhoWeAre />
      </section>
      <WhatWeOffer />
      <Realizations />
      <section className="dwa">
        <h1 className="2">2</h1>
        <Services ref={servicesRef} />
      </section>
      <Footer ref={[servicesRef]} />
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
