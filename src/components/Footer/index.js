import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Emoji } from "../Emoji";

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: var(--font-size-lg);
  padding: var(--font-size-lg) 0;

  p {
    color: var(--color-accent);
    font-weight: 500;
    background-color: var(--color-accent-20);
    padding: calc(0.5 * var(--font-size-base)) var(--font-size-base);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow-light);
  }
`;

export const Footer = () => {
  return (
    <Wrapper>
      <motion.p initial={{ rotate: -5 }} whileHover={{ rotate: 5 }}>
        Made with <Emoji emoji="☕" /> in the UK!
      </motion.p>
    </Wrapper>
  );
};
