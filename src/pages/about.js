import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import { FaTwitter, FaInstagram, FaLinkedinIn, FaTelegramPlane, FaEnvelope } from "react-icons/fa";

import { Layout } from "../components/Layout";
import { Container } from "../components/Container";

import { breakpoint, font } from "../theme/config";
import { TextLink } from "../components/TextLink";

const Content = styled.div`
  grid-column: 1 / span 6;
  grid-row: 2;

  ${breakpoint.md} {
    grid-column: 1 / span 4;
    grid-row: 1;
  }

  ${breakpoint.lg} {
    grid-column: 1 / span 3;
  }
`;

const Info = styled.article`
  margin-bottom: 1em;
`;

const Profile = styled.div`
  grid-column: 1 / span 6;
  grid-row: 1;

  ${breakpoint.md} {
    grid-column: 5 / span 2;
  }
`;

const ProfileLinks = styled.ul`
  display: flex;
  justify-content: space-between;

  margin: 1em 0;
  padding: 0 0.5em;

  font-size: ${font.size.medium};
`;

const socials = [
  { link: "https://twitter.com/bensilverman_", icon: <FaTwitter /> },
  { link: "https://instagram.com/ben.silverman", icon: <FaInstagram /> },
  { link: "https://linkedin.com/in/ben-silverman", icon: <FaLinkedinIn /> },
  { link: "https://t.me/benslv", icon: <FaTelegramPlane /> },
  { link: "mailto:hey@benslv.dev", icon: <FaEnvelope /> },
];

const AboutPage = () => {
  return (
    <Layout>
      <Container className="grid">
        <Profile>
          <StaticImage
            layout="fullWidth"
            src="../images/profile.png"
            alt="Me standing in a forest, arms crossed"
            placeholder="tracedSVG"
            style={{ borderRadius: "5px" }}
          />
          {socials && (
            <ProfileLinks>
              {socials.map(({ link, icon }) => (
                <TextLink to={link} key={link}>
                  {icon}
                </TextLink>
              ))}
            </ProfileLinks>
          )}
        </Profile>
        <Content>
          <Info>
            <h2>About Me</h2>
            <p>
              Hey, I&apos;m Ben! I’m currently a student at the University of York, studying
              Computer Science.
            </p>
            <p>
              I’m passionate about beautiful design and web development, and spend a lot of my free
              time trying to combine the two things into cool (and hopefully useful) projects!
            </p>
            <p>
              I also play tenor saxophone in my university’s Jazz and Concert Bands, and have
              probably been playing it for almost 11 years by now!
            </p>
          </Info>
          <Info>
            <h2>Experience</h2>
            <p>
              I’m incredibly lucky to be on a year-long placement at the moment, working for Arm!
              I’ve had the opportunity to learn a lot about the backend services and APIs they use,
              and will hopefully be able to carry that knowledge with me when I go back to
              university in September this year.
            </p>
          </Info>
        </Content>
      </Container>
    </Layout>
  );
};

export default AboutPage;
