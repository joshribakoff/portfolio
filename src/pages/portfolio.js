import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import marinas from "./marinas/page3.jpg";
import fame from "./famefitness/famefit-cal.png";
import vf from "./vehiclefits/website.png";
import paquin from "./paquin.png";
import isite from "./isite.png";
import illuminati from "./illuminati.jpeg";
import video from "./video.jpeg";
import twitch from "./twitch.png";
import cruise from "./cruise.png";

const Page = styled.div`
  padding: 1.25rem 1rem;
`;

const Timeline = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Element = styled.li`
  position: relative;
  overflow: hidden;
  display: block;
  margin: 0;
  padding: 0;
`;

const Divider = styled.div`
  border-bottom: 1px solid #ddd;
  margin-left: 160px;
  height: 30px;
  margin-bottom: 30px !important;
  clear: both;
`;

const Time = styled.div`
  line-height: 1.5;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100px;
  padding: 30px 15px;
  padding-top: 0;
  color: #999;
  text-align: right;
  font-style: italic;
  border-right: 1px solid #ddd;
`;

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
    background-color: rgba(187, 30, 30, 0.8);
  }
`;

const Contents = styled.div`
  margin-left: 150px;
`;

const Description = styled.div`
  @media (min-width: 1000px) {
    float: left;
    width: 50%;
  }
  font-family: Roboto, sans-serif;
  h2 {
    margin-top: 0;
  }
`;
const Photo = styled.div`
  @media (min-width: 1000px) {
    float: left;
    width: 50%;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  background-color: #af2222;
  border: 1px solid #9a1e1e;
  color: #fff;
  padding: 0.7em 1.2em;
  text-shadow: none;
  background-image: none;
`;

const Tag = styled.a`
  display: inline-block;
  background-color: rgba(175, 34, 34, 0.8);
  color: #fff;
  padding: 4px 10px;
  font-size: 13px;
  text-transform: uppercase;
  text-shadow: none;
  background-image: none;
  margin-right: 5px;
  margin-bottom: 5px;
`;

export default ({ src }) => (
  <Page>
    <h1>Portfolio</h1>
    <Timeline>
      <Element>
        <Time>
          <Label>Feb 2020</Label>
        </Time>
        <Contents>
          <Description>
            <h2>Cruise</h2>
            <p>Senior Software Engineer</p>
            <p>
              An American self-driving car company headquartered in San
              Francisco, California
            </p>
          </Description>
          <Photo>
            <img src={cruise} style={{ maxWidth: "100%" }} />
          </Photo>
        </Contents>
        <Divider />
      </Element>
      <Element>
        <Time>
          <Label>Aug 2018</Label>
        </Time>
        <Contents>
          <Description>
            <h2>Amazon / Twitch</h2>
            <p>Senior Software Engineer (react)</p>
            <p>
              Twitch is a live streaming video platform owned by Twitch
              Interactive, a subsidiary of Amazon.{" "}
            </p>
          </Description>
          <Photo>
            <img src={twitch} style={{ maxWidth: "100%" }} />
          </Photo>
        </Contents>
        <Divider />
      </Element>
      <Element>
        <Time>
          <Label>Feb 2015</Label>
        </Time>
        <Contents>
          <Description>
            <h2>Isite Software / EMS Linq</h2>
            <p>Distrupting the school lunch room</p>
            <p>
              Isite Software is a web, mobile &amp; digital signage platform for
              over 1,000 school districts viewed by millions of students daily
            </p>
            <ul>
              <li>a drag & drop interactive online calendar menu designer</li>
              <li>
                a network of thousands of IOT devices &amp; custom digital
                signage administration software &amp; campaign designer
              </li>
            </ul>
            <Button to="/isite/">More details</Button>
            <h3>Technologies</h3>
            <Tag href="http://docker.com/" target="_blank">
              Docker
            </Tag>
            <Tag href="https://www.vagrantup.com/" target="_blank">
              Vagrant
            </Tag>
            <Tag href="https://www.ansible.com/" target="_blank">
              Ansible
            </Tag>
            <Tag href="https://aws.amazon.com/" target="_blank">
              AWS
            </Tag>
            <Tag href="https://www.mongodb.com/" target="_blank">
              Mongo
            </Tag>
            <Tag href="https://www.mysql.com/" target="_blank">
              Mysql
            </Tag>
            <Tag href="https://nodejs.org/en/" target="_blank">
              NodeJS
            </Tag>
            <Tag href="http://php.net/" target="_blank">
              PHP
            </Tag>
            <Tag href="https://symfony.com/" target="_blank">
              Symfony
            </Tag>
            <Tag href="https://silex.symfony.com/" target="_blank">
              Silex
            </Tag>
            <Tag href="https://angularjs.org/" target="_blank">
              Angular JS
            </Tag>
            <Tag href="https://reactjs.org/" target="_blank">
              React
            </Tag>
            <Tag href="https://redux.js.org/" target="_blank">
              Redux
            </Tag>
            <Tag href="https://webpack.js.org/" target="_blank">
              Webpack
            </Tag>
            <Tag href="http://babeljs.io/" target="_blank">
              Babel
            </Tag>
            <Tag href="https://socket.io/" target="_blank">
              SocketIO
            </Tag>
            <Tag href="http://pm2.keymetrics.io/" target="_blank">
              Pm2
            </Tag>
            <Tag href="http://supervisord.org/" target="_blank">
              Supervisor
            </Tag>
            <Tag href="https://graphql.org/" target="_blank">
              GraphQL
            </Tag>
            <Tag href="http://gearman.org/" target="_blank">
              Gearman
            </Tag>
            <Tag href="https://www.ffmpeg.org/" target="_blank">
              ffmpeg
            </Tag>
            <Tag
              href="https://developers.google.com/web/updates/2017/04/headless-chrome"
              target="_blank"
            >
              Headless Chrome
            </Tag>
          </Description>
          <Photo>
            <img src={isite} style={{ maxWidth: "100%" }} />
          </Photo>
        </Contents>
        <Divider />
      </Element>

      <Element>
        <Time>
          <Label>Jan 2014</Label>
        </Time>
        <Contents>
          <Description>
            <h2>Entertainment Company</h2>
            <p>Paid membership video streaming platform</p>
            <p>
              This company, based in San Diego, produced premium video content
              for consumption by paid members
            </p>
            <ul>
              <li>a membership signup &amp; billing management platform</li>
              <li>
                a video transcoding pipeline with preview thumbnails &amp;
                playback heatmaps for analytics
              </li>
            </ul>
            <h3>Technologies</h3>
            <Tag href="https://www.mysql.com/" target="_blank">
              Mysql
            </Tag>
            <Tag href="http://php.net/" target="_blank">
              PHP
            </Tag>
            <Tag href="https://silex.symfony.com/" target="_blank">
              Silex
            </Tag>
            <Tag href="https://angularjs.org/" target="_blank">
              Angular JS
            </Tag>
            <Tag href="https://aws.amazon.com/" target="_blank">
              AWS
            </Tag>
          </Description>
          <Photo>
            <img src={video} style={{ maxWidth: "100%" }} />
          </Photo>
        </Contents>
        <Divider />
      </Element>

      <Element>
        <Time>
          <Label>Jun 2013</Label>
        </Time>
        <Contents>
          <Description>
            <h2>Paquin Healthcare</h2>
            <p>Healthcare supply chain experts</p>
            <p>
              Paquin provides all in one e-commerce solutions and generates new
              revenues for 300+ healthcare providers
            </p>
            <ul>
              <li>Healthcare re-imbursement portal for Optum insurance</li>
              <li>
                Secure encrypted messaging platform iRemedy integrated with
                withings scale &amp; blood pressure monitors
              </li>
            </ul>
            <h3>Technologies</h3>
            <Tag href="http://php.net/" target="_blank">
              PHP
            </Tag>
            <Tag href="https://www.magento.com/" target="_blank">
              Magento
            </Tag>
            <Tag href="https://jquery.com/" target="_blank">
              Jquery
            </Tag>
          </Description>
          <Photo>
            <img src={paquin} style={{ maxWidth: "100%" }} />
          </Photo>
        </Contents>
        <Divider />
      </Element>

      <Element>
        <Time>
          <Label>Apr 2013</Label>
        </Time>
        <Contents>
          <Description>
            <h2>BMV Corp</h2>
            <p>Debt Management Experts</p>
            <p>
              BMV Corp helped consumers with debt negotiate better rates with
              creditors &amp; disbursed funds on behalf of consumers
            </p>
            <ul>
              <li>Wrote a RTF to HTML / HTML to RTF conversion algorithm</li>
              <li>
                50+ variations of legal contracts for PDF / CUPs document
                generation &amp; printing system
              </li>
            </ul>
            <h3>Technologies</h3>
            <Tag href="http://php.net/" target="_blank">
              PHP
            </Tag>
            <Tag href="https://framework.zend.com/" target="_blank">
              Zend
            </Tag>
            <Tag href="https://jquery.com/" target="_blank">
              Jquery
            </Tag>
          </Description>
          <Photo>
            <img src={illuminati} style={{ maxWidth: "100%" }} />
          </Photo>
        </Contents>
        <Divider />
      </Element>

      <Element>
        <Time>
          <Label>Mar 2013</Label>
        </Time>
        <Contents>
          <Description>
            <h2>Fame Fitness</h2>
            <p>Turn-key luxury fitness management</p>
            <p>
              Fame Fitness provided a white glove experience for high rises
              &amp; luxury condominiums in Miami, staffing the gyms &amp;
              providing one on one personal training &amp; massage
            </p>
            <ul>
              <li>
                a self service booking system with credit card payments &amp;
                credit system
              </li>
              <li>a personalized health &amp; vital tracker</li>
            </ul>
            <Button to="/famefitness/">More details</Button>
            <h3>Technologies</h3>
            <Tag href="http://php.net/" target="_blank">
              PHP
            </Tag>
            <Tag href="https://jquery.com/" target="_blank">
              Jquery
            </Tag>
            <Tag href="https://www.mysql.com/" target="_blank">
              Mysql
            </Tag>
          </Description>
          <Photo>
            <img src={fame} style={{ maxWidth: "100%" }} />
          </Photo>
        </Contents>
        <Divider />
      </Element>

      <Element>
        <Time>
          <Label>Jan 2008</Label>
        </Time>
        <Contents>
          <Description>
            <h2>Vehicle Fits</h2>
            <p>Aftermarket parts lookup tool</p>
            <p>
              I initially founded Vehicle Fits to provide a year/make/model
              lookup tool, it quickly expanded to a generalized fitments tool
              used by multiple vertical industries.
            </p>
            <ul>
              <li>a dynamic schema system / custom fields engine</li>
              <li>
                industry specific plugins like wheel &amp; tire fitments, bolt
                patterns tools, bulk import tools, e tc..
              </li>
            </ul>
            <h3>Technologies</h3>
            <Tag href="http://php.net/" target="_blank">
              PHP
            </Tag>
            <Tag href="https://jquery.com/" target="_blank">
              Jquery
            </Tag>
            <Tag href="https://www.mysql.com/" target="_blank">
              Mysql
            </Tag>
            <Tag href="https://www.magento.com/" target="_blank">
              Magento
            </Tag>
          </Description>
          <Photo>
            <img src={vf} style={{ maxWidth: "100%" }} />
          </Photo>
        </Contents>
        <Divider />
      </Element>

      <Element>
        <Time>
          <Label>Jan 2006</Label>
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
            <h3>Technologies</h3>
            <Tag href="http://php.net/" target="_blank">
              PHP
            </Tag>
            <Tag href="https://jquery.com/" target="_blank">
              Jquery
            </Tag>
            <Tag href="https://www.mysql.com/" target="_blank">
              Mysql
            </Tag>
          </Description>
          <Photo>
            <img src={marinas} style={{ maxWidth: "100%" }} />
          </Photo>
        </Contents>
        <Divider />
      </Element>
    </Timeline>
  </Page>
);
