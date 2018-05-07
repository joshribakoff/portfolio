import React from "react";

const Gallery = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexFlow: "row wrap"
    }}
  >
    {children}
  </div>
);

export default Gallery;
