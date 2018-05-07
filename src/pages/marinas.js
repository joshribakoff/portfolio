import React from "react";
import Link from "gatsby-link";
import page1 from "./marinas/page1.jpg";
import page2 from "./marinas/page2.jpg";
import page3 from "./marinas/page3.jpg";
import page4 from "./marinas/page4.jpg";

export default () => (
  <div>
    <h1>Marinas.com</h1>
    <div style={{ margin: "3rem auto", maxWidth: 600 }}>
      <div>
        <p>
          As a high school senior in 2005, when drones nor Google Maps existed, I took on a freelance project to create "The premier website for marine information". The client was a cartography partner with Garmin coordinating aerial photo shoots of coastal locations.
        </p>
        <img src={page3} />
        <p>
          In response to my client dropping off stacks of DVDs on my door step regularly, I developed a "human in the loop" tool used by the photographers &amp; helicopter pilots in the field. The tool made use of artificial intelligence algorithms to extract GPS coordinates from meta-data, make recommendations on how to cluster photos, and coalesced data from half a dozen private &amp; public data sources. The human in the loop would review these suggestions &amp; associated confidence percentage.
        </p>
        <div style={{display: 'flex'}}>
          <img src={page2} />
          <img src={page3} />
          <img src={page4} />
        </div>
      </div>
    </div>
  </div>
);
