import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import avatar from "./avatar.jpg";
import "./styles.css";

const Header = styled.header`
  background-color: #0b0c10;
  a {
    color: #66fcf1;
    text-decoration: none;
  }
  padding: 10px;
`;
const Avatar = styled.img`
  border-radius: 100%;
  width: 50px;
  height: 50px;
`;
const Nav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 800px;
  margin: auto;
  padding: 0;
  li {
    display: block;
    padding: 0.5em;
  }
`;
const NavItem = props => (
  <li>
    <Link style={props.style} to={props.to}>
      {props.children}
    </Link>
  </li>
);

export default ({ children }) => (
  <div>
    <Header>
      <Nav>
        <li style={{ flex: 1 }}>
          <Link style={{ display: "flex", alignItems: "center" }} to={"/"}>
            <Avatar src={avatar} />
            <span style={{ padding: "0.5em" }}>Josh Ribakoff</span>
          </Link>
        </li>
        <NavItem to="/portfolio/">Portfolio</NavItem>
        <NavItem to="/blog/">Blog</NavItem>
        <NavItem to="https://www.youtube.com/c/JoshRibakoff">Videos</NavItem>
      </Nav>
    </Header>
    <div style={{ maxWidth: 800, margin: "auto", padding: 10 }}>{children}</div>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
    />
  </div>
);
