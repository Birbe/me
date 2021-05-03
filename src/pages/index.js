import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Layout } from "../components/Layout";
import { Sidenote } from "../components/Sidenote";
import { TextLink } from "../components/TextLink";
import { Emoji } from "../components/Emoji";
import { StaticImage } from "gatsby-plugin-image";

const Hero = styled.header`
  display: grid;
  grid-row-gap: var(--font-size-lg);
`;

const IndexPage = () => {
  return (
    <Layout>
      <Hero>
        <motion.div
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
          transition={{ delay: 0.75}}
          style={{ marginLeft: "auto", marginRight: "auto" }}>
          <StaticImage
            src="../images/profile.jpg"
            alt="Head and shoulders picture of me!"
            style={{
              borderRadius: "50%",
              boxShadow: "var(--box-shadow-light)",
            }}
            placeholder="tracedSVG"
            aspectRatio={1 / 1}
            layout="constrained"
            width={150}
          />
        </motion.div>
        <div>
          <h1>Hey there!</h1>
          <p>
            Hi! I'm Ben, a third year Computer Science student at the University of York, currently
            working on placement at <TextLink to="https://arm.com">Arm</TextLink>.
          </p>
          <p>
            <b>Outside of my studies</b>, I usually spend my time{" "}
            <TextLink to="https://github.com/benslv">programming</TextLink>,{" "}
            <TextLink to="https://goodreads.com/benslv">reading</TextLink> or playing in the
            University Jazz and Concert Bands!
          </p>
        </div>
      </Hero>
      <section>
        <h2>This Website</h2>
        <p>
          I recently decided to treat myself to a new website, because my{" "}
          <TextLink to="https://bensilverman.co.uk">old one</TextLink> was beginning to look a
          little dated, and I've learned a lot about web development in the two years since I wrote
          it!
        </p>
        <p>
          I wanted to take this as an opportunity to build something with my favourite new tools
          (namely React and Gatsby) that:
        </p>
        <ul>
          <li>looked a lot nicer, with fully responsive layout and styling</li>
          <li>
            packed in a lot more functionality, like reusable components, blog posts, and more
          </li>
        </ul>
        <p>
          I might write a little post detailing the full site stack at some point, but I'm mainly
          focussed on actually coding the thing at the moment!
        </p>
        <Sidenote>
          <p>
            Recently I discvered a new term I really liked:{" "}
            <b>
              <i>digital gardening.</i>
            </b>
          </p>
          <p>
            This lovely, horticultural phrase refers to the act of "cultivating" a website full of
            little snippets, posts and tidbits, letting it naturally evolve over time instead of
            strictly managing and defining its structure.
          </p>
          <p>
            I really like the concept of this, so it's not entirely impossible that I'll begin to
            use this site as my own <Emoji emoji="🌱" /> digital garden <Emoji emoji="🌱" /> of
            sorts, setting it up to hold various different types of{" "}
            <TextLink to="/blog">blog posts</TextLink>, snippets, and pages that I think are
            interesting or useful (either to me or others).
          </p>
        </Sidenote>
      </section>
      <section>
        <h2>Contact Me</h2>
        <p>
          If you'd like to get in touch, please send me a DM on{" "}
          <TextLink to="https://twitter.com/bensilverman_">Twitter</TextLink>!
        </p>
      </section>
    </Layout>
  );
};

export default IndexPage;
