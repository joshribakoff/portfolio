import React from "react"
import Link from "gatsby-link"
import styled from 'styled-components'
import Layout from "../components/layout"

import nasa from './nasa.jpg'

const Page = styled.div`
background-image: url(${nasa});
background-size: cover;
background-position: 25% 0%;
color: white;
height: 100vh;
padding: 45px;
padding-top: 65px;
`


const Button = styled(Link)`
text-transform: uppercase;
font-weight: 300;
text-decoration: none;
opacity: .8;
box-shadow: 1px 1px 2px rgba(0,0,0,.47);
margin-bottom: 1em;
color: #fff;
text-shadow: none;
background-image: none;
border-width: 1px;
border-style: solid;
padding: .4em .8em;
margin-right: 1em;
margin-bottom: 1em;
`

export default () => <Layout><Page>
    <h2 style={{color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, .8)', margin: 0, marginBottom: 45}}>Hi, I'm Josh.</h2>
    <h3 style={{color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, .8)', lineHeight: 1.5, margin: 0, marginBottom: 65, fontWeight: 200}}>I am a software engineer specialised in both <strong style={{fontWeight: 500}}>front-end and back-end web development</strong>.</h3>
    <Button to='/portfolio/'>Portfolio</Button>
    <Button to='/videos/'>Videos</Button>
</Page></Layout>
