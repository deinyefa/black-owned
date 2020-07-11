import styled from "@emotion/styled";
import React from "react";
import { Card } from "react-bootstrap";

const StyledBusinessCard = styled(Card)`
  &::before {
    content: "";
    width: calc(100% + 20px);
    height: 200px;
    border-bottom-right-radius: 80px;
    transform: rotate(10deg) translate(-20px, -37px);
    background: linear-gradient(45deg, teal, green);
  }
`;

export const BusinessCard = () => {
  return (
    <article
      style={{
        overflow: "hidden",
      }}
    >
      <StyledBusinessCard>
        <Card.Body>
          <Card.Title>Business Name</Card.Title>
          <Card.Text>Affordable</Card.Text>
        </Card.Body>
      </StyledBusinessCard>
    </article>
  );
};
