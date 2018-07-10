import React from "react";
import Link from "gatsby-link";
import styled from 'styled-components'

import marinas from './marinas/page3.jpg'
import fame from './famefitness/famefit-cal.png';

const Page = styled.div`
padding: 1.25rem 1rem;
`

const Timeline = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
`

const Element = styled.li`
position: relative;
overflow: hidden;
display: block;
margin: 0;
padding: 0;
`

const Divider = styled.div`
border-bottom: 1px solid #ddd;
margin-left: 160px;
height: 30px;
margin-bottom: 30px!important;
clear: both;
`

const Time = styled.div`
line-height: 1.5;
position: absolute;
top: 0;
bottom: 0;
left: 0;
width: 130px;
padding: 30px 15px;
padding-top: 0;
color: #999;
text-align: right;
font-style: italic;
border-right: 1px solid #ddd;
`

const Label = styled.time`
display: block;
font-family: Roboto, sans-serif;
::after {
    content: " ";
    position: absolute;
    top: 12px;
    right: -2.5px;
    display: block;
    width: 5px;
    height: 5px;
    background-color: rgba(187,30,30,.8);
}
`

const Contents = styled.div`
margin-left:160px;
`

const Description = styled.div`
@media (min-width: 1000px) {
  float: left;
  width: 50%;
}
font-family: Roboto, sans-serif;
h2 {
    margin-top: 0;
}
`
const Photo = styled.div`
@media (min-width: 1000px) {
  float: left;
  width: 50%;
}
`

const Button = styled(Link)`
display: inline-block;
background-color: #af2222;
border: 1px solid #9a1e1e;
color: #fff;
padding: .7em 1.2em;
text-shadow: none;
background-image: none;
`

export default ({ src }) => (
  <Page>
    <h1>Portfolio</h1>
    <p>See my works below. Unless stated otherwise, all their back-end and front-end parts were completely done by me.</p>
    <Timeline>
      <Element>
        <Time>
          <Label>
            Feb 2015
                </Label>
        </Time>
        <Contents>
          <Description>
            <h2>Isite Software</h2>
            <p>Distrupting the school lunch room</p>
            <p>Isite Software is a web, mobile &amp; digital signage platform for over 1,000 school districts viewed by millions of students daily</p>
            <ul>
              <li>a drag & drop interactive online calendar menu designer</li>
              <li>a network of thousands of IOT devices &amp; custom digital signage administration software &amp; campaign designer</li>
            </ul>
          </Description>
          <Photo>
            {/* <img src="https://placekitten.com/800/500" style={{ maxWidth: '100%' }} /> */}
          </Photo>
        </Contents>
        <Divider />
      </Element>

      <Element>
        <Time>
          <Label>
            Jan 2014
          </Label>
        </Time>
        <Contents>
          <Description>
            <h2>Entertainment Company</h2>
            <p>Paid membership video streaming platform</p>
            <p>This company, based in San Diego, produced premium video content for consumption by paid members</p>
            <ul>
              <li>a membership signup &amp; billing management platform</li>
              <li>a video transcoding pipeline with preview thumbnails &amp; playback heatmaps for analytics</li>
            </ul>
          </Description>
          <Photo>
            {/* <img src="https://placekitten.com/800/500" style={{ maxWidth: '100%' }} /> */}
          </Photo>
        </Contents>
        <Divider />
      </Element>

      <Element>
        <Time>
          <Label>
            Jun 2013
          </Label>
        </Time>
        <Contents>
          <Description>
            <h2>Paquin Healthcare</h2>
            <p>Healthcare supply chain experts</p>
            <p>Paquin provides all in one e-commerce solutions and generates new revenues for 300+ healthcare providers</p>
            <ul>
              <li>Healthcare re-imbursement portal for Optum insurance</li>
              <li>Secure encrypted messaging platform iRemedy integrated with withings scale &amp; blood pressure monitors</li>
            </ul>
          </Description>
          <Photo>
            {/* <img src="https://placekitten.com/800/500" style={{ maxWidth: '100%' }} /> */}
          </Photo>
        </Contents>
        <Divider />
      </Element>

      <Element>
        <Time>
          <Label>
            Apr 2013
          </Label>
        </Time>
        <Contents>
          <Description>
            <h2>BMV Corp</h2>
            <p>Debt Management Experts</p>
            <p>BMV Corp helped consumers with debt negotiate better rates with creditors &amp; disbursed funds on behalf of consumers</p>
            <ul>
              <li>Wrote a RTF to HTML / HTML to RTF conversion algorithm</li>
              <li>50+ variations of legal contracts for PDF / CUPs document generation &amp; printing system</li>
            </ul>
          </Description>
          <Photo>
            {/* <img src="https://placekitten.com/800/500" style={{ maxWidth: '100%' }} /> */}
          </Photo>
        </Contents>
        <Divider />
      </Element>


      <Element>
        <Time>
          <Label>
            Mar 2013
          </Label>
        </Time>
        <Contents>
          <Description>
            <h2>Fame Fitness</h2>
            <p></p>
            <p></p>
            <ul>
              <li></li>
              <li></li>
            </ul>
            <Button to="/famefitness/">More details</Button>
          </Description>
          <Photo>
            <img src={fame} style={{ maxWidth: '100%' }} />
          </Photo>
        </Contents>
        <Divider />
      </Element>

      <Element>
        <Time>
          <Label>
            Jan 2008
          </Label>
        </Time>
        <Contents>
          <Description>
            <h2>Vehicle Fits</h2>
            <p></p>
            <p></p>
            <ul>
              <li></li>
              <li></li>
            </ul>
          </Description>
          <Photo>
            {/* <img src="https://placekitten.com/800/500" style={{ maxWidth: '100%' }} /> */}
          </Photo>
        </Contents>
        <Divider />
      </Element>

      <Element>
        <Time>
          <Label>
            Jan 2006
          </Label>
        </Time>
        <Contents>
          <Description>
            <h2>Marinas.com</h2>
            <p>The premier website for marine information</p>
            <p></p>
            <ul>
              <li>a custom Google Maps clone</li>
              <li>a turn-key data ingestion system using geo-clustering</li>
            </ul>
            <Button to="/marinas/">More details</Button>
          </Description>
          <Photo>
            <img src={marinas} style={{ maxWidth: '100%' }} />
          </Photo>
        </Contents>
        <Divider />
      </Element>

    </Timeline>
  </Page>
);
