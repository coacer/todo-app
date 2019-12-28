import React from "react";
import {Link} from "react-router-dom";
import {NavList} from "interfaces";

const Header: React.FC = () => {
  const navList: NavList[] = [
    {
      name: "Home",
      to: "/"
    },
    {
      name: "New",
      to: "/todos/new"
    },
  ];

  const links: React.ReactElement[] = navList.map(nav => (
    <Link
      to={nav.to}
      key={nav.name}
    >
      {nav.name}
    </Link>
  ));

  return (
    <header>{links}</header>
  );
};

export default Header;

