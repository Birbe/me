import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { TextLink } from "../TextLink";
import { Emoji } from "../Emoji";

const Wrapper = styled.div`
  padding: var(--font-size-lg);

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Nav = styled(motion.nav)`
  display: flex;
  gap: var(--font-size-md);
  align-items: center;
`;

const NavLink = styled(TextLink)`
  color: var(--color-accent);
  border: 0;

  background-color: var(--color-accent-20);

  padding: calc(0.5 * var(--font-size-base)) var(--font-size-base);
  border-radius: var(--border-radius);

  box-shadow: var(--box-shadow-light);

  transition: background-color 0.175s var(--easing), color 0.175s var(--easing);

  &:hover {
    border: 0;

    color: var(--color-text);
    background-color: var(--color-card-background);
  }
`;

export const Navbar = ({ navlinks = {} }) => {
  return (
    <Wrapper>
      <motion.div
        animate={{ x: 0, rotate: 0 }}
        initial={{ x: -100, rotate: -90 }}
        transition={{ delay: 0.1 }}>
        <Emoji emoji="👋" size="48px" style="" />
      </motion.div>
      <Nav
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 200, opacity: 0 }}
        transition={{ delay: 0.1 }}>
        {navlinks.map(({ name, to }, i) => (
          <NavLink to={to} key={i}>
            {name}
          </NavLink>
        ))}
      </Nav>
    </Wrapper>
  );
};
