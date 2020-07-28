import React from "react";

const getChildren = (children, TagName, props) => {
  if (typeof children === "string") {
    return <TagName {...props}>{children}</TagName>;
  } else if (Array.isArray(children)) {
    return children.map((child) => {
      return <TagName {...props}> {child}</TagName>;
    });
  } else {
    return null;
  }
};

export default function Tag({ children, tag, ...props }) {
  const TagName = tag;
  return <>{getChildren(children, TagName, props)}</>;
}
