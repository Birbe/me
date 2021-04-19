import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { TextLink } from "../components/TextLink";

import { font, color, breakpoint } from "../theme/config";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;

  padding: 1rem;
  margin: 1em 0;
  margin-top: 0;

  background-color: ${color.lightGrey};

  box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.1);

  border-radius: 5px;
  border: 1px solid ${color.text};

  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.025);
    box-shadow: 0 10px 20px 0px rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.1);
    /* margin-bottom: 2em; */
  }

  ${breakpoint.md} {
    max-width: 480px;
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: ${font.size.base};
`;

const Content = styled.p`
  color: ${color.text};
  font-size: ${font.size.base};
  font-weight: ${font.weight.normal};
  margin-bottom: 0;
`;

export const Card = ({ title = "Title", to = null, children = "Description", className }) => {
  return (
    <TextLink to={to} className={className}>
      <StyledCard>
        <Title>{title}</Title>
        <Content>{children}</Content>
      </StyledCard>
    </TextLink>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
