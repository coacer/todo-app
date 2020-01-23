import React from "react";
import { Link } from "react-router-dom";
import { NavList } from "interfaces";
import styled from 'styled-components';

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
    <Wrapper>
      <h1>Todo App</h1>
      <ListContainer>
        {links}
      </ListContainer>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: #fff6fc;
  height: 50px;
  box-shadow: 0px 2px 10px #ccc;
  h1 {
    font-size: 20px;
    color: #494346;
  }
`;

const ListContainer = styled.div`
  padding: 20px;
  a {
    padding: 10px;
    color: #494346;
    text-decoration: none;
  }
`;

export default Header;

