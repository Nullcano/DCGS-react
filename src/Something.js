import React from "react";

const Something = ({ text, children }) => (
  <div className="something">
    <span>{text}</span>
    {children}
  </div>
);

export default Something;
