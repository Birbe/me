import React from "react";

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
