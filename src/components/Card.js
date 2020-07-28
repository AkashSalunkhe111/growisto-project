import React from "react";
import CustomTag from "./CustomTag";

export default function Card({ children, title, text, link }) {
  return (
    <div>
      {title && <p>Title - {title}</p>}
      {text && <p>Text - {text}</p>}
      {link && <p>Link - {link}</p>}

      {children && children.map((componentObj) => <CustomTag componentObj={componentObj} />)}
    </div>
  );
}
