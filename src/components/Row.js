import React from "react";
import Tag from "./Tag";
import CustomTag from "./CustomTag";

export default function Row({ valign, className, children }) {
  return (
    <div className={className}>
      {children &&
        children.map((componentObj) => <CustomTag componentObj={componentObj} />)}
    </div>
  );
}
