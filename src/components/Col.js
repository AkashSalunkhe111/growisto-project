import React from "react";
import CustomTag from "./CustomTag";

export default function Col({ className, children }) {
  return (
    <div className={className}>
      {children &&
        children.map((componentObj) => (
          <CustomTag componentObj={componentObj} />
        ))}
    </div>
  );
}
