import { StaticQuery, graphql } from "gatsby";
import React, { useState } from "react";
import { SliderWrapper } from "../../atoms/Slider/SliderWrapper";
import { StyledSlide } from "../../atoms/Slider/StyledSlide";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StyledWrapperWithoutPagination } from "../../atoms/Slider/StyledWrapperWithoutPagination";
import { AnimatePresence } from "framer-motion";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { StyledButtonPagination } from "../../atoms/Slider/StyledButtonPagination";
import { wrap } from "@popmotion/popcorn";

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

export default function Slider() {
  const [[slide, direction], setSlide] = useState([0, 0]);
  const slideIndex = wrap(0, items.length, slide);
  const paginate = (newDirection) => {
    setSlide([slide + newDirection, newDirection]);
  };
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
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
        <SliderWrapper>
          <AnimatePresence initial={false} custom={direction}>
            {items
              .filter((_, index) => index === slideIndex)
              .map((slide, idx) => {
                return (
                  <StyledSlide key={idx}>
                    <StyledWrapperWithoutPagination
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        duration: 0.8,
                      }}
                    >
                      <div>
                        <StyledButtonPagination
                          whileHover={{
                            scale: 1.3,
                            transition: { duration: 0.3 },
                          }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => paginate(-1)}
                        >
                          <IoIosArrowBack />
                        </StyledButtonPagination>
                      </div>
                      <div>
                        {" "}
                        <h1>{slide.title}</h1>
                        <h2>{slide.description}</h2>
                        <GatsbyImage
                          image={
                            data.allFile.edges.find(
                              (item) => item.node.relativePath === slide.img
                            ).node.childImageSharp.gatsbyImageData
                          }
                          alt=""
                        />
                      </div>
                      <div>
                        <StyledButtonPagination
                          whileHover={{
                            scale: 1.3,
                            transition: { duration: 0.3 },
                          }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => paginate(1)}
                        >
                          <IoIosArrowForward />
                        </StyledButtonPagination>
                      </div>
                    </StyledWrapperWithoutPagination>
                  </StyledSlide>
                );
              })}
          </AnimatePresence>
        </SliderWrapper>
      )}
    />
  );
  //   <SliderWrapper>Slider</SliderWrapper>;
}
