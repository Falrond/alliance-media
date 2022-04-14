import React from "react";
import GlobalStyle from "../../assets/style/GlobalStyle";

export default function GlobalLayout({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
