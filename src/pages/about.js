import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

import { Container } from "../components/Container";
import { Layout } from "../components/Layout";
import { TextLink } from "../components/TextLink";

const Header = styled.section`
  display: grid;
  row-gap: var(--font-size-md);
`;

const AboutPage = () => {
  return (
    <Layout title="About">
      <Container id="main-content">
        <Header>
          {/*<StaticImage*/}
          {/*  src="../images/profile.jpg"*/}
          {/*  alt="Head and shoulders picture of me!"*/}
          {/*  style={{*/}
          {/*    borderRadius: "50%",*/}
          {/*    marginLeft: "auto",*/}
          {/*    marginRight: "auto",*/}
          {/*    boxShadow: "var(--box-shadow-light)",*/}
          {/*    margin: "0 auto",*/}
          {/*  }}*/}
          {/*  placeholder="tracedSVG"*/}
          {/*  aspectRatio={1 / 1}*/}
          {/*  layout="constrained"*/}
          {/*  width={150}*/}
          {/*  quality={100}*/}
          {/*/>*/}
          <div>
            <h2>About Me</h2>
            <p>
              Hi! I'm Erik, a full-stack developer who likes messing around with web technologies.
            </p>
            <p>
              I quite like reverse-engineering the things I use and learning about how they work, and potentially
              trying to re-write them myself.
            </p>
            <p>
              <b>When I'm not programming</b>, I'm usually spending my time playing games or chatting with friends.

              I played ~2400 hours of Rocket League and ~600 hours of CS:GO.
            </p>
            <p>
              I live in the Netherlands and speak both English and Dutch fluently.
            </p>
          </div>
        </Header>
      </Container>
    </Layout>
  );
};

export default AboutPage;
