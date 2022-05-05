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
  const title1 = data.allDatoCmsHerosection.nodes[0].title1;
  const title2 = data.allDatoCmsHerosection.nodes[0].title2;
  gsap.registerPlugin(ScrollTrigger);
  const [show, setShow] = useState(false);
  const image = getImage(data.file.childImageSharp);
  const imagefromCMS = getImage(data.allDatoCmsHerosection.nodes[0].heroImg);
  console.log(imagefromCMS);
  const aboutUs = useRef(null);
  const realizations = useRef(null);
  const servicesRef = useRef(null);
  const contact = useRef(null);
  const whatWeOffer = useRef(null);

  const container = useRef(null);
  const scrollContainer = useRef(null);

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
          <GatsbyImage image={imagefromCMS} alt="heroImage" />
        </StyledHeroImageWrapper>
        <HeroInfo props={{ title1, title2 }} />
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
    allDatoCmsHerosection {
      nodes {
        title1
        title2
        heroDesc
        heroImg {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`;

export default IndexPage;
