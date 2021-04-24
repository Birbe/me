import React from "react";
import styled from "styled-components";

import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { TextLink } from "../components/TextLink";
import { Projects } from "../components/sections/Projects";

import { font, breakpoint } from "../theme/config";
import { About } from "../components/sections/About";

const Hero = styled.header`
  grid-column: 1 / span 12;

  margin: 5rem 0;

  p {
    font-size: ${font.size.medium};
  }

  ${breakpoint.md} {
    grid-column: 1/ span 8;
  }

  ${breakpoint.lg} {
    grid-column: 1 / span 5;
    height: 30vh;
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <Container className="grid">
        <Hero>
          <h1>Hi, I&apos;m Ben!</h1>
          <p>
            I&apos;m a third-year Computer Science student at the University of York, currently on
            placement at <TextLink to="https://www.arm.com/">Arm</TextLink>.
          </p>
        </Hero>
        <About />
        <Projects />
      </Container>
    </Layout>
  );
};

export default IndexPage;
