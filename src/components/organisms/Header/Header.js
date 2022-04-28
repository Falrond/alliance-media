import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StyledHeader } from "../../atoms/Header/StyledHeader";
import Logo from "../../molecules/Logo/Logo";
import Navigation from "../../molecules/Navigation/Navigation";
import SocialIcons from "../../molecules/SocialIcons/SocialIcons";
import { useState } from "react";
gsap.registerPlugin(ScrollTrigger);
const Header = React.forwardRef((props, ref) => {
  // const [stickyClass, setStickyClass] = useState("relative");
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
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });

    // gsap.to(
    //   navBar.current,
    //   // { y: 0, opacity: 0 },
    //   {
    //     position: "fixed",
    //     y: 0,
    //     scrollTrigger: {
    //       start: "top -135",
    //       end: 99999,
    //       toggleActions: "play none none reverse",
    //     },
    //   }
    // );
  }, []);
  return (
    <StyledHeader
      ref={navBar}
      // initial={{ y: -150 }}
      animate={{ y: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.3,
        // type: "spring",
        // // stiffness: 260,
        // damping: 10,
      }}
    >
      <Logo />
      <Navigation ref={ref} />
      <SocialIcons />
    </StyledHeader>
  );
});

export default Header;
