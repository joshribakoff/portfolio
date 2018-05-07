import React from "react";
import Link from "gatsby-link";
import Gallery from "../components/Gallery";
import GalleryItem from "../components/GalleryItem";
import page1 from "./marinas/page1.jpg";
import page2 from "./marinas/page2.jpg";
import page3 from "./marinas/page3.jpg";
import page4 from "./marinas/page4.jpg";
import map from "./marinas/map.jpg";
import map2 from "./marinas/map2.jpg";
import mapg from "./marinas/mapg.png";
import mapf from "./marinas/mapf.png";

export default ({ src }) => (
  <div>
    <h1>Marinas.com</h1>
    <p>
      <img
        src={page3}
        style={{
          maxWidth: 450,
          float: "left",
          marginRight: 25,
          marginBottom: 25
        }}
      />
      As a high school senior in 2005, when drones nor Google Maps existed, I
      took on a freelance project to create <em>"The premier website for marine
      information"</em>. The client was a cartography partner with Garmin
      coordinating aerial photo shoots of coastal locations in a dozen countries.
    </p>
    <blockquote style={{ clear: "both" }}>
      <p>
        <em>
          I took on a freelance project to create "The premier website for
          marine information"
        </em>
      </p>
    </blockquote>
    <p style={{ clear: "both" }}>
      In response a plethora of DVDs showing up on my door step, I
      developed a "human in the loop" tool used by the photographers &amp;
      pilots to upload photos from in the field. The tool made use of artificial
      intelligence algorithms to extract GPS coordinates from metadata.
      Recommendations were made along with a confidence percentage regarding how
      to cluster, classify, and catalog data by coalescing numerous data
      sources. Workers reviewed &amp; made adjustments as needed. The system had
      built in book-keeping for compensating the workers.
    </p>
    <p>
      <Gallery>
        <GalleryItem src={page1} />
        <GalleryItem src={page2} />
        <GalleryItem src={page4} />
      </Gallery>
      I mentored a team of designers in best practices such as HTML &amp; CSS.
      It was also very important to the project stakeholders to show off the
      high resolution images at every opportunity, which was at a direct
      conflict with the state of internet speeds &amp; and screen resolution
      sizes in 2006.
    </p>
    <p>
      <img
        src={map}
        style={{
          width: 350,
          float: "left",
          marginRight: 15,
          marginBottom: 15
        }}
      />
      A bit into the project, Google Maps had just launched, and MapQuest had
      quoted the owners $70,000/yr and they had some concerns with Google's
      terms & conditions which reserved the right to run ads on the maps (their
      business model was going to be using their maps for marketing, after all).
    </p>
    <p>
      Contrary to my recommendation to use Google Maps, I was tasked with
      building them their own maps platform. We purchased ESRI shape dataset
      called "Street Pro". Employing trigonometry & geometric algorithms such as
      curve orientation, I created a map rendering system using PHP & the GD
      library. The system rendered out "tiles" at various zoom levels ala Google
      Maps, while making use of optimizations like deduplication of solid land
      mass or ocean. Using custom servers I built, I oversaw 1,000s of CPU hours
      worth of rendering for my algorithm on the cluster. A custom map client
      was built in Adobe Flash using Action Script, as HTML5 was not yet
      prevalent at the time & this was before jQuery even hit the scene.
    </p>
    <Gallery>
      <GalleryItem src={map2} />
      <GalleryItem src={mapf} />
    </Gallery>
  </div>
);
