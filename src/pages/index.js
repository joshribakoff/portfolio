import React from "react";
import Layout from "../components/Layout";
import Link from "gatsby-link";

export default () => (
  <Layout>
    <div>
      <h1>Hi, I'm Josh.</h1>
      <h2>
        I am a software engineer specialised in both front-end and back-end web
        development.
      </h2>
      <p>
        14 years experience in a variety of environments from open source,
        startups, and top tech companies on large teams at scale. Experienced in
        both frontend and backend as well as with video streaming, real time
        distributed systems, graphics programming, scheduling software, AST
        tools, apps with complex interactions, and traditional turnkey software.
      </p>{" "}
      <p>
        <strong>Skills:</strong> Typescript, Javascript, React, Redux, GraphQL,
        Apollo, Jest, Webpack, Babel, NodeJS, RxJS, Websockets, Webworkers,
        WebRTC, WebGL/Canvas Libraries, Algorithms, Data Structures,{" "}
        <strong>Past:</strong> PHP, DevOps, Backend, Angular, MongoDb, MySql
      </p>
      <Link to="/portfolio/">Portfolio</Link>
      <hr />
      <a href="https://www.youtube.com/c/JoshRibakoff" style={{ margin: 3 }}>
        <i className="fab fa-youtube"></i>
      </a>
      <a href="https://twitter.com/joshribakoff" style={{ margin: 3 }}>
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://github.com/joshribakoff" style={{ margin: 3 }}>
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/josh-ribakoff-9a5948152/"
        style={{ margin: 3 }}
      >
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  </Layout>
);
