import styled from "@emotion/styled";
import React from "react";
import { Card as BSCard } from "reactstrap";

const StyledBusinessCard = styled(BSCard)`
  &::before {
    content: "";
    width: calc(100% + 20px);
    height: 150px;
    border-bottom-right-radius: 80px;
    transform: rotate(10deg) translate(-11px, -14px);
    background-color: red;
  }
`;

export const Card = () => {
  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <StyledBusinessCard>This is a card</StyledBusinessCard>
    </div>
  );
};
