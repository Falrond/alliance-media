import React from "react";
import { StyledCarousel } from "../../atoms/Carousel/StyledCarousel";
import { StyledInnerCarousel } from "../../atoms/Carousel/StyledInnerCarousel";
import { StyledCarouselImg } from "../../atoms/Carousel/StyledCarouselImg";
import images from "../../../assets/data/carouselImages";
import { StaticImage } from "gatsby-plugin-image";
import { useEffect, useRef, useState } from "react";

export default function Carousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <StyledCarousel ref={carousel}>
      <StyledInnerCarousel
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        <StyledCarouselImg>
          <StaticImage
            src="../../../assets/images/img1.jpg"
            alt="img1"
            quality={100}
          />
        </StyledCarouselImg>
        <StyledCarouselImg>
          <StaticImage
            src="../../../assets/images/img2.jpg"
            alt="img2"
            quality={100}
          />
        </StyledCarouselImg>
        <StyledCarouselImg>
          <StaticImage
            src="../../../assets/images/img3.jpg"
            alt="img3"
            quality={100}
          />
        </StyledCarouselImg>
        <StyledCarouselImg>
          <StaticImage
            src="../../../assets/images/img4.jpg"
            alt="img4"
            quality={100}
          />
        </StyledCarouselImg>
        <StyledCarouselImg>
          <StaticImage
            src="../../../assets/images/img5.jpg"
            alt="img5"
            quality={100}
          />
        </StyledCarouselImg>
      </StyledInnerCarousel>
    </StyledCarousel>
  );
}
