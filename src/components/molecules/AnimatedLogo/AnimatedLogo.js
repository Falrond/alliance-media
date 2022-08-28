import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "gatsby";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StyledAnimationLogo } from "../../atoms/AnimationLogo/StyledAnimationLogo";
import Logo from "../../molecules/Logo/Logo";
import SvgComponent from "../../atoms/SvgComponent/SvgComponent";
import { useState } from "react";
import SvgLogoComponent from "../../atoms/SvgLogoComponent/SvgLogoComponent";
gsap.registerPlugin(ScrollTrigger);
const AnimatedLogo = React.forwardRef((props, ref) => {
  const navBar = useRef(null);
  const [aboutUs, whatWeOffer, realizations, servicesRef, contact] = ref;
  const [cssClass, setCssClass] = useState("dark");

  useEffect(() => {
    const showAnim = gsap
      .from(navBar.current, {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);
    ref.forEach((trigger) => {
      ScrollTrigger.create({
        trigger: trigger.current,
        start: "top top",
        end: "bottom top",
        toggleClass: {
          targets: navBar.current,
          className: trigger.current.classList.contains("dark")
            ? "dark"
            : "light",
        },
      });
    });
    ScrollTrigger.create({
      start: "top -100",
      end: 99999,
      toggleClass: { className: "down", targets: navBar.current },
      //   onUpdate: (self) => {
      //     self.direction === 1 ? showAnim.play() : showAnim.reverse();
      //   },
    });
    // ScrollTrigger.create({
    //     start: "top top",
    //     end: 99999,
    //     onUpdate: (self) => {
    //       self.direction === 1 ? showAnim.play() : showAnim.reverse();
    //     },
    //   });
  }, [ref]);
  return (
    <StyledAnimationLogo
      ref={navBar}
      // initial={{ y: -150 }}
      animate={{ y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.2,
        // type: "spring",
        // // stiffness: 260,
        // damping: 10,
      }}
    >
      <Logo>
        <SvgLogoComponent />
      </Logo>
    </StyledAnimationLogo>
  );
});

export default AnimatedLogo;
