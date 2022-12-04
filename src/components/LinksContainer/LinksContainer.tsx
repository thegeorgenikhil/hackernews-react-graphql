import React from "react";
import { LinkItem } from "../LinkItem/LinkItem";

type LinksContainerProps = {
  links: any[];
};

export const LinksContainer: React.FC<LinksContainerProps> = ({ links }) => {
  return (
    <div className="links-container">
      {links.map((link) => (
        <LinkItem
          username={link.user.name}
          id={link.id}
          key={link.id}
          title={link.title}
          url={link.address}
        />
      ))}
    </div>
  );
};
