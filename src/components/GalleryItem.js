import React from "react";

const GalleryItem = ({ src }) => (
  <div
    style={{
      margin: ".5vw",
      flex: "auto",
      width: "200px"
    }}
  >
    <img src={src} style={{ width: "100%", height: "auto" }} />
  </div>
);

export default GalleryItem;
