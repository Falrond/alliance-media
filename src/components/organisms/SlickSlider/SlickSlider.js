import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StyledSlickSliderWrapper } from "../../atoms/SlickSlider/StyledSlickSliderWrapper";
import { StyledSlickSlide } from "../../atoms/SlickSlider/StyledSlickSlide";
import { StyledSlideTextWrapper } from "../../atoms/SlickSlider/StyledSlideTextWrapper";
import { StyledSlideImageWrapper } from "../../atoms/SlickSlider/StyledSlideImageWrapper";
import { StyledSlickSlideInner } from "../../atoms/SlickSlider/StyledSlickSlideInner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const items = [
  {
    title: "Projekt Pierwszy",
    description: "Description one",
    img: "sliderImages/img1.jpg",
  },
  {
    title: "Projekt Drugi",
    description: "Description two",
    img: "sliderImages/img2.jpg",
  },
  {
    title: "Projekt Trzeci",
    description: "Description three",
    img: "sliderImages/img3.jpg",
  },
  {
    title: "Projekt Czwarty",
    description: "Description four",
    img: "sliderImages/img4.jpg",
  },
  {
    title: "Projekt Piąty",
    description: "Description five",
    img: "sliderImages/img5.jpg",
  },
];

function ArrowSettings(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, color: "#333" }}
      onClick={onClick}
    />
  );
}

export default function SlickSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <StaticQuery
      query={graphql`
        query slickSliderQuery {
          allFile(
            sort: { order: ASC, fields: name }
            filter: { relativeDirectory: { eq: "sliderImages" } }
          ) {
            edges {
              node {
                relativePath
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <StyledSlickSliderWrapper>
          <Slider {...settings}>
            {items.map((slide, index) => {
              return (
                <StyledSlickSlide key={index}>
                  <StyledSlickSlideInner>
                    <StyledSlideTextWrapper>
                      <h1>{slide.title}</h1>
                      <h2>{slide.description}</h2>
                    </StyledSlideTextWrapper>
                    <StyledSlideImageWrapper>
                      <Zoom>
                        <GatsbyImage
                          image={
                            data.allFile.edges.find(
                              (item) => item.node.relativePath === slide.img
                            ).node.childImageSharp.gatsbyImageData
                          }
                          alt=""
                        />
                      </Zoom>
                    </StyledSlideImageWrapper>
                  </StyledSlickSlideInner>
                </StyledSlickSlide>
              );
            })}
            {/* {data.allFile.edges.map((item, index) => {
            console.log(item.node);
            return (
              <GatsbyImage
                key={index}
                image={item.node.childImageSharp.gatsbyImageData}
                alt=""
              />
            );
          })} */}
          </Slider>
        </StyledSlickSliderWrapper>
      )}
    />
  );
}
