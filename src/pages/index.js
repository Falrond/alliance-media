import React from "react";
import Header from "../components/organisms/Header/Header";
import MeetUs from "../components/organisms/MeetUs/MeetUs";
import HeroInfo from "../components/organisms/Header/HeroInfo/HeroInfo";
import { StyledHeroImageWrapper } from "../components/atoms/HeroImage/StyledHeroImageWrapper";
import { StyledIndexMain } from "../components/atoms/Main/StyledIndexMain";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const IndexPage = ({ data }) => {
  const image = getImage(data.file.childImageSharp);
  return (
    <StyledIndexMain>
      <Header />
      <StyledHeroImageWrapper>
        <GatsbyImage image={image} alt="heroImage" />
      </StyledHeroImageWrapper>
      <HeroInfo />
      <MeetUs />
    </StyledIndexMain>
  );
};

export const query = graphql`
  query getHeroImage {
    file(relativePath: { eq: "hero7.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

// query getHeroImage {
//   file(relativePath:{eq:"hero.jpg"}) {
//     childImageSharp {
//       fluid {
//         src
//       }
//     }
//   }
// }

export default IndexPage;
