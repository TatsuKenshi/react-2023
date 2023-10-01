import React from "react";

const PageLink = ({ link, itemClass }) => {
  const { href, text } = link;
  return (
    <li>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  );
};

export default PageLink;
