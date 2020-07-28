import React from "react";
import CustomTag from "./CustomTag";

export default function Section({ children, h2, text }) {
  return (
    <div>
      {h2 && <h2> {h2}</h2>}
      {text && <p> {text}</p>}

      {children &&
        children.map((componentObj) => (
          <CustomTag componentObj={componentObj} />
        ))}
    </div>
  );
}
