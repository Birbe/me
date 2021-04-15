import React from "react";
import PropTypes from "prop-types";

import { TextLink } from "./TextLink";

export const PostLink = ({
  post: {
    frontmatter: { slug, title, date },
  },
}) => {
  return (
    <TextLink to={slug}>
      {title} {date}
    </TextLink>
  );
};

PostLink.propTypes = {
  post: PropTypes.object.isRequired,
};
