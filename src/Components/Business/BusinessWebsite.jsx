import React from "react";
import Card from "react-bootstrap/Card";
import { IconChevronRight, IconWebsite } from "../../icons";
import { FlatIcon } from "../UI";

export default ({ website }) => {
  return (
    <Card
      className="d-flex flex-row justify-content-around py-2"
      as="a"
      href={`http://${website}`}
      target="_blank"
    >
      <FlatIcon className="align-self-center mr-0" icon={<IconWebsite />} />
      <span className="text-default">Website</span>
      <FlatIcon className="align-self-center" icon={<IconChevronRight />} />
    </Card>
  );
};
