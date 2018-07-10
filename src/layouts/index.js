import React from "react";
import Link from "gatsby-link";
import styled from 'styled-components'
import code from './skyscraper.jpeg'
import photo from './photo.png'
import './styles.css'

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const SidebarBg = styled.div`
background-color: rgba(0, 0, 0, 0.6);
padding: 45px;
@media (min-width: 700px) {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
`

const Sidebar = styled.aside`
background-image: url(${code});
@media (min-width: 700px) {
  width: 350px;
  position: fixed;
  top: 0;
  bottom: 0;
}
background-size: cover;
`

const Content = styled.div`
min-height: 100vh;
@media (min-width: 700px) {
  margin-left: 350px;
}
`

const Avatar = styled.img`
border-radius: 300px;
margin: auto;
margin-bottom: 10px;
display: block;
width: 160px;
height: 150px;
`

const Name = styled.h1`
color: white;
font-size: 22px;
font-weight: 500;
text-transform: uppercase;
text-align: center;
margin: 0;
line-height: 1.6;
`

const Title = styled.h2`
color: white;
font-size: 16px;
font-weight: 300;
text-transform: uppercase;
text-align: center;
margin: 0;
`

const ListOfLinks = styled.ul`
listStyle: none;
color: white;
margin: 45px;
li {
  display: block;
}
a {
  text-shadow: none;
  background-image: none;
  color: white;
}
`

export default ({ children }) => (
  <div>
    <Sidebar>
      <SidebarBg>
        <Avatar src={photo} />
        <Name >Josh Ribakoff</Name>
        <Title>Full Stack Web Developer</Title>
        <ListOfLinks>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/marinas/">Portfolio</ListLink>
        </ListOfLinks>
      </SidebarBg>
    </Sidebar>
    <Content>
      <div style={{maxWidth: 850}}>
        {children()}
      </div>
    </Content>
  </div>
);
