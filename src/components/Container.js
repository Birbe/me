import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledContainer = styled.main`
  width: 100%;
  max-width: 960px;

  padding: 0 2em;
`;

export const Container = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.node,
};
