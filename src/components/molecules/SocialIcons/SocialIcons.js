import React from "react";
import { SocialIconsWrapper } from "../../atoms/SocialIcons/SocialIconsWrapper";
import { Link } from "gatsby";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";

export default function SocialIcons() {
  return (
    <SocialIconsWrapper>
      <Link to="/">
        <AiFillFacebook size="35px" />
      </Link>
      <Link to="/">
        <FaTwitter size="35px" />
      </Link>
      <Link to="/">
        <AiFillInstagram size="35px" />
      </Link>
    </SocialIconsWrapper>
  );
}
