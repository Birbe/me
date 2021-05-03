import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Navbar } from "../Navbar";
import { Container } from "../Container";
import { Footer } from "../Footer";

import { GlobalStyle } from "../../theme/GlobalStyle";

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query NavLinks {
      site {
        siteMetadata {
          menuLinks {
            name
            to
          }
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Navbar navlinks={data.site.siteMetadata.menuLinks} />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};
