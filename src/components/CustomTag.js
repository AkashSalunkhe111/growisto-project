import React from "react";
import Section from "./Section";
import Card from "./Card";
import Markdown from "./Markdown";
import Row from "./Row";
import Col from "./Col";
import Tag from "./Tag";

const Components = {
  Section: Section,
  Card: Card,
  Markdown: Markdown,
  Row: Row,
  Col: Col,
  Tag: Tag,
};

export default function CustomTag({ componentObj }) {
  const TagName =
    componentObj &&
    componentObj.component in Components &&
    Components[componentObj.component];
  if (TagName) {
    return <TagName {...componentObj.props} />;
  }
  return null;
}
