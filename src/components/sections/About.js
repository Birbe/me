import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import { FaTwitter, FaInstagram, FaLinkedinIn, FaTelegramPlane, FaEnvelope } from "react-icons/fa";

import { color, breakpoint, font } from "../../theme/config";
import { TextLink } from "../TextLink";

const Content = styled.section`
  grid-column: 1 / span 12;

  ${breakpoint.md} {
    grid-column: 5 / span row;
  }

  ${breakpoint.lg} {
    grid-column: 3 / span 5;
  }
`;

const Profile = styled.section`
  grid-column: 1 / span 12;

  ${breakpoint.md} {
    grid-column: 1 / span 4;
  }

  ${breakpoint.lg} {
    grid-column: 1 / span 2;
  }
`;

const ProfileLinks = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 1em 0;

  font-size: ${font.size.medium};

`;

const socials = [
  { link: "https://twitter.com/bensilverman_", icon: <FaTwitter />, text: "twitter" },
  { link: "https://instagram.com/ben.silverman", icon: <FaInstagram />, text: "instagram" },
  { link: "https://linkedin.com/in/ben-silverman", icon: <FaLinkedinIn />, text: "linkedin" },
  { link: "https://t.me/benslv", icon: <FaTelegramPlane />, text: "telegram" },
  { link: "mailto:hey@benslv.dev", icon: <FaEnvelope />, text: "email" },
];

export const About = () => {
  return (
    <>
      <Profile>
        <StaticImage
          layout="fullWidth"
          src="../../images/profile.png"
          alt="Me standing in a forest, arms crossed"
          placeholder="tracedSVG"
          style={{ borderRadius: "5px" }}
        />
        {socials && (
          <ProfileLinks>
            {socials.map(({ link, icon, text }) => (
              <TextLink to={link} key={link}>
                {icon}
              </TextLink>
            ))}
          </ProfileLinks>
        )}
      </Profile>
      <Content>
        <h2>About Me</h2>
        <p>
          Hey, I&apos;m Ben! I’m currently a student at the University of York, studying Computer
          Science.
        </p>
        <p>
          I’m passionate about beautiful design and web development, and spend a lot of my free time
          trying to combine the two things into cool (and hopefully useful) projects!
        </p>
        <p>
          I also play tenor saxophone in my university’s Jazz and Concert Bands, and have probably
          been playing it for almost 11 years by now!
        </p>
      </Content>
    </>
  );
};
