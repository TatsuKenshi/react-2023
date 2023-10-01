import React from "react";
import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        const { id } = link;
        return <PageLink key={id} link={link} itemClass="nav-link" />;
      })}
    </ul>
  );
};

export default PageLinks;
