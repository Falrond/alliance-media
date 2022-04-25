import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const scrollAnimation = (
  element,
  triggerElement,
  triggerPos,
  viewportPos
) => {
  gsap.fromTo(
    element,
    { y: "-=200", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: triggerElement,
        start: `${triggerPos} ${viewportPos}`, // when the top of the trigger hits the top of the viewport
        end: "+=200", // end after scrolling 500px beyond the start
        scrub: 1.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    }
  );
};

export const scrollAnimation2 = (
  element,
  triggerElement,
  triggerPos,
  viewportPos
) => {
  gsap.fromTo(
    element,
    { x: "-=400", opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: triggerElement,
        start: `${triggerPos} ${viewportPos}`, // when the top of the trigger hits the top of the viewport
        end: "+=400", // end after scrolling 500px beyond the start
        scrub: 1.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    }
  );
};

export const scrollAnimation3 = (
  element,
  triggerElement,
  triggerPos,
  viewportPos
) => {
  gsap.fromTo(
    element,
    { x: "+=400", opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: triggerElement,
        start: `${triggerPos} ${viewportPos}`, // when the top of the trigger hits the top of the viewport
        end: "-=400", // end after scrolling 500px beyond the start
        scrub: 1.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    }
  );
};
