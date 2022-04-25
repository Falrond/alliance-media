import React, { useState, useCallback } from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StyledSlickSliderWrapper } from "../../atoms/SlickSlider/StyledSlickSliderWrapper";
import { StyledSlickSlide } from "../../atoms/SlickSlider/StyledSlickSlide";
import { StyledSlideTextWrapper } from "../../atoms/SlickSlider/StyledSlideTextWrapper";
import { StyledSlideImageWrapper } from "../../atoms/SlickSlider/StyledSlideImageWrapper";
import { StyledSlickSlideInner } from "../../atoms/SlickSlider/StyledSlickSlideInner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { PreventingSlider } from "../PreventingSlider/PreventingSlider";
import { StyledText } from "../../atoms/Text/StyledText";

const items = [
  {
    title: "Projekt Pierwszy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a magna sed purus tincidunt fringilla. Quisque faucibus nulla urna, in lobortis dui gravida sit amet. In accumsan, ipsum eu porta rutrum, ligula nisi rutrum quam, vel imperdiet ipsum dui a sapien. Sed tincidunt blandit mi quis tristique. In arcu mi, tincidunt at nulla quis, hendrerit ultrices ante. Nam varius enim ligula, vel pulvinar tellus euismod id. Sed lacinia iaculis facilisis. Cras rhoncus lectus ac scelerisque placerat. Curabitur tincidunt dui nibh, et porttitor enim molestie nec. Pellentesque accumsan elit augue, at interdum velit consequat in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; ",
    img: "sliderImages/img1.jpg",
  },
  {
    title: "Projekt Drugi",
    description:
      "Nullam vel diam malesuada, porta elit ut, egestas est. Praesent pulvinar tincidunt neque id tincidunt. Praesent accumsan cursus eros eget pulvinar. Aenean mattis maximus eleifend. Mauris rutrum a justo in lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed porttitor nunc vel feugiat aliquet. Nam at est ac urna placerat mattis. ",
    img: "sliderImages/img2.jpg",
  },
  {
    title: "Projekt Trzeci",
    description:
      "Sed in lacus quis purus ullamcorper tempor vel at arcu. Cras at nulla ultrices, commodo nibh semper, mollis turpis. Curabitur a suscipit massa. Cras finibus pellentesque nisl vel faucibus. Curabitur tempus metus quam, ut efficitur lacus sollicitudin eget. Mauris laoreet, augue at tincidunt maximus, felis ligula pharetra leo, a consequat purus eros eget diam. Curabitur suscipit metus non lacinia interdum. Praesent elementum mi mi. In hac habitasse platea dictumst. Phasellus pellentesque feugiat gravida. Aenean a varius libero. Mauris laoreet lectus nec nunc dapibus, sit amet porttitor purus malesuada. Morbi odio massa, scelerisque ut malesuada ac, varius a nisi. Nam pellentesque eros a justo dapibus, sit amet consequat erat dictum. Pellentesque volutpat ex sed pellentesque suscipit. ",
    img: "sliderImages/img3.jpg",
  },
  {
    title: "Projekt Czwarty",
    description:
      "Maecenas tempus nisl id porta laoreet. Nulla sit amet quam leo. Etiam eleifend vulputate turpis, a sagittis massa porta sed. Nulla quis quam condimentum, fringilla turpis at, finibus lorem. Duis et ex posuere, finibus elit sit amet, malesuada nulla. Quisque ut diam et ex cursus consectetur. In facilisis velit a ex fringilla ornare. Nam dapibus interdum interdum. Ut aliquet sodales rutrum. Proin viverra tellus id arcu ullamcorper eleifend nec non mi. Cras vitae arcu at sem interdum fermentum. Nam non metus diam. Integer nec mauris sem. Nullam aliquet pharetra odio eget placerat. Duis gravida massa mi, at vestibulum metus laoreet gravida. ",
    img: "sliderImages/img4.jpg",
  },
  {
    title: "Projekt Piąty",
    description:
      "Etiam quis leo elit. Vivamus id enim porta, mollis arcu sed, accumsan dui. Maecenas augue nunc, volutpat vel lorem consequat, sagittis lacinia ligula. Aliquam sodales neque eu lacus commodo tristique. Ut euismod nunc turpis, eu lacinia turpis auctor nec. Donec maximus ipsum et enim vehicula finibus. Donec malesuada, justo nec eleifend gravida, nibh nunc tincidunt nisl, quis malesuada sapien velit id tortor. Aliquam pellentesque venenatis metus. Nullam lacinia porta tortor, vitae ullamcorper nisl posuere porttitor. Curabitur eget elementum tellus. s",
    img: "sliderImages/img5.jpg",
  },
];

export default function SlickSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 3000,
    // autoplaySpeed: 3000,
    // cssEase: "linear",
    // pauseOnHover: false,
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
          <PreventingSlider {...settings}>
            {items.map((slide, index) => {
              return (
                <StyledSlickSlide key={index}>
                  <StyledSlickSlideInner>
                    <StyledSlideTextWrapper>
                      <StyledText
                        as="h2"
                        hasdeclaredfontsize="34px"
                        hasdeclaredmargin="0 0 40px 0"
                      >
                        {slide.title}
                      </StyledText>
                      <StyledText
                        as="p"
                        hasdeclaredfontweight="500"
                        hasdeclaredlineheight="1.6"
                        hasdeclaredletterspacing="0.3px"
                        hasdeclaredfontsize="18px"
                      >
                        {slide.description}
                      </StyledText>
                    </StyledSlideTextWrapper>
                    <StyledSlideImageWrapper>
                      <Zoom overlayBgColorEnd={"rgba(28, 29, 33, 0.95)"}>
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
          </PreventingSlider>
        </StyledSlickSliderWrapper>
      )}
    />
  );
}
