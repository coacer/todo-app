import React from "react";
import { Link } from "react-router-dom";
import { NavList } from "interfaces";

export const navList: NavList[] = [
  {
    name: "Home",
    to: "/"
  },
  {
    name: "New",
    to: "/todos/new"
  },
];

const Header: React.FC = () => {
  const links: React.ReactElement[] = navList.map(nav => (
    <Link
      to={nav.to}
      key={nav.name}
      className={"nav-" + nav.name.toLowerCase()}
    >
      {nav.name}
    </Link>
  ));

  return (
    <header>{links}</header>
  );
};

export default Header;

