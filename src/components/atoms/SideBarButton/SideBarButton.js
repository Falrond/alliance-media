import React from "react";
import { StyledSideBarButton } from "../SideBar/StyledSideBarButton";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";

export default function SideBarButton({ show, setShow }) {
  return (
    <StyledSideBarButton
      className="toggle"
      onClick={() => setShow((show) => !show)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ x: 200, rotate: 90 }}
      animate={{ x: 0, rotate: 0 }}
      //   transition={{
      //     delay: 0.1,
      //     // duration: 0.8,
      //     type: "spring",
      //     damping: 10,
      //   }}
    >
      {show ? (
        <AiOutlineClose size={"25px"} color={"#fff"} />
      ) : (
        <AiOutlineMenu size={"25px"} color={"#fff"} />
      )}
    </StyledSideBarButton>
  );
}
