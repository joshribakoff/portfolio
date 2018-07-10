import React from "react"
import Link from "gatsby-link"
import styled from 'styled-components'

const Page = styled.div`
padding: 1.25rem 1rem;
`

export default () => <Page>
    <h1>Contact</h1>
    <a href="mailto:josh.ribakoff@gmail.com">josh.ribakoff@gmail.com</a>
    <br />
    <a href="tel:1-619-248-8183">619-248-8183</a>
</Page>
