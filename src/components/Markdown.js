import React from "react";
const ReactMarkdown = require("react-markdown");

export default function Markdown({ text }) {
  if (text) {
    return <ReactMarkdown source={text} />;
  }
  return null;
}
