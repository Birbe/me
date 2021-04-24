import React from "react";
import PropTypes from "prop-types";

import { Navbar } from "./Navbar";

import { GlobalStyle } from "../theme/globalStyles";

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  bgColor: PropTypes.string,
};
