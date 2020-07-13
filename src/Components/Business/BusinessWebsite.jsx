import React from "react";
import Card from "react-bootstrap/Card";
import { IconChevronRight, IconWebsite } from "../../icons";
import { FlatIcon } from "../UI";

export default () => {
  return (
    <Card
      className="d-flex flex-row justify-content-around py-2"
      as="a"
      href="http://www.google.com"
      target="_blank"
    >
      <FlatIcon className="align-self-center" icon={<IconWebsite />} />
      <span>
        <span className="text-default">Website</span>
        <span className="text-muted d-block">example.com</span>
      </span>
      <FlatIcon className="align-self-center" icon={<IconChevronRight />} />
    </Card>
  );
};
