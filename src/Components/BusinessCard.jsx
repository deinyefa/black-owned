import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";
import { Card } from "react-bootstrap";
import { ScoreThermometer } from "./UI";

const StyledBusinessCard = styled(Card)`
  &::before {
    content: "";
    width: calc(100% + 20px);
    height: 210px;
    border-bottom-right-radius: 80px;
    transform: rotate(10deg) translate(-20px, -40px);
    background: linear-gradient(45deg, teal, green);
  }
`;

const StyledArticle = styled.article`
  overflow: hidden;
  transition: all ease 0.3s;

  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  }
`;

export const BusinessCard = ({ rating, ratingCount }) => {
  return (
    <StyledArticle
      onClick={() => console.log("clicked a card")}
      className="shadow"
    >
      <StyledBusinessCard>
        <Card.Body className="d-flex justify-content-between">
          <div>
            <Card.Title>Business Name</Card.Title>
            <Card.Text className="text-primary">Affordable</Card.Text>
          </div>
          <div style={{ width: "150px" }}>
            <ScoreThermometer score={rating} ratingCount={ratingCount} />
          </div>
        </Card.Body>
      </StyledBusinessCard>
    </StyledArticle>
  );
};

BusinessCard.propTypes = {
  rating: PropTypes.number.isRequired,
  ratingCount: PropTypes.any.isRequired,
};
