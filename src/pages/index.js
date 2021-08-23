import React from "react";
import styled from "styled-components";

import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { Sidenote } from "../components/Sidenote";
import { TextLink } from "../components/TextLink";
import { Emoji } from "../components/Emoji";
import {Card} from "../components/Card";

const Hero = styled.header`
  p {
    font-size: var(--font-size-md);
  }
`;

const IndexPage = () => {
  return (
    <Layout title="Index">
      <Container id="main-content">
        <Hero>
          <h1>Hi!</h1>
          <p>
            I'm Birb, a full-stack developer who lives in the Netherlands.
          </p>
        </Hero>
        <section>
          <h2>This Website</h2>
          <p>
            This website is forked from <TextLink to="https://benslv.dev">benslv's</TextLink> website.<br />
            I'm currently using it as a portfolio, as well as a blog (if I ever post 😛)
          </p>
        </section>
        <section>
          <h2>Projects</h2>
          <p>
            See my projects <TextLink to="/projects">here</TextLink>
          </p>
        </section>
        <section>
          <h2>Contact Me</h2>
          <p>
            If you want to get in touch, you can add me as a friend on Discord; My tag is Birb#0407
          </p>
        </section>
      </Container>
    </Layout>
  );
};

export default IndexPage;
