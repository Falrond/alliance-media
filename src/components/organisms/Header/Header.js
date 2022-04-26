import React from "react";
import { StyledHeader } from "../../atoms/Header/StyledHeader";
import Logo from "../../molecules/Logo/Logo";
import Navigation from "../../molecules/Navigation/Navigation";
import SocialIcons from "../../molecules/SocialIcons/SocialIcons";

const Header = React.forwardRef((props, ref) => {
  return (
    <StyledHeader
      initial={{ y: -150 }}
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
