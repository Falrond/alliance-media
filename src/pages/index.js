import React, { useState } from "react";
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
  const [show, setShow] = useState(false);
  const image = getImage(data.file.childImageSharp);
  return (
    <StyledIndexMain>
      <Header />
      <SideBarButton show={show} setShow={setShow} />
      <SideBar show={show} setShow={setShow} />
      <StyledHeroImageWrapper>
        <GatsbyImage image={image} alt="heroImage" />
      </StyledHeroImageWrapper>
      <HeroInfo />
      <WhoWeAre />
      <WhatWeOffer />
      {/* <SlickSlider /> */}
      <Realizations />
      <Services />
      <Footer />
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
