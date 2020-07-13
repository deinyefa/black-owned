import styled from "@emotion/styled";
import React from "react";
import Card from "react-bootstrap/Card";

const SmallCircle = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background: linear-gradient(45deg, teal, green);
`;

export default () => {
  return (
    <Card
      className="d-flex flex-row justify-content-around"
      as="a"
      href="http://www.google.com"
      target="_blank"
    >
      <SmallCircle className="align-self-center" />
      <span>
        <span>Website</span>
        <span className="text-muted d-block">example.com</span>
      </span>
    </Card>
  );
};
