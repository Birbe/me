import React from "react";
import styled from "styled-components";

import { Emoji } from "../Emoji";
import { nav } from "../../content/config";
import { blueBox } from "../../theme/mixins";
import { UnstyledLink } from "../UnstyledLink";

const Wrapper = styled.div`
  padding: var(--font-size-lg);

  background-color: var(--color-background);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: var(--font-size-md);
  align-items: center;
`;

const NavLink = styled(UnstyledLink)`
  /* ${blueBox}; */

  font-weight: 500;
  color: var(--color-text);

  transition: color 0.175s var(--easing);

  &:hover {
    color: var(--color-accent);
  }
`;

export const Navbar = () => {
  return (
    <Wrapper>
      <Emoji emoji="👋" size="48px" style="" />
      <Nav>
        {nav &&
          nav.map(({ name, to }, i) => (
            <NavLink to={to} key={i}>
              {name}
            </NavLink>
          ))}
      </Nav>
    </Wrapper>
  );
};
