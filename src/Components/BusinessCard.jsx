import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";
import { Badge, Card } from "react-bootstrap";
import { ScoreThermometer } from "./UI";

const StyledBusinessCard = styled(Card)`
  &::before {
    content: "";
    width: calc(100% + 20px);
    height: 210px;
    border-radius: 0.25rem;
    border-bottom-right-radius: 80px;
    transform: rotate(10deg) translate(-20px, -40px);
    background: linear-gradient(45deg, teal, green);
  }
`;

const StyledArticle = styled.article`
  margin-bottom: 3em;
  overflow: hidden;
  transition: all ease 0.3s;
  border-radius: 0.25rem;

  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  }
`;

const BusinessCard = ({
  rating,
  ratingCount,
  name,
  category,
  knownFor,
  onClick,
}) => {
  return (
    <StyledArticle onClick={onClick} className="shadow">
      <StyledBusinessCard className="border-0">
        <Card.Body
          className="d-flex justify-content-between pt-0"
          style={{ marginTop: "-1em" }}
        >
          <div className="pr-1">
            <Card.Title>{name}</Card.Title>
            <Card.Text className="text-primary">{knownFor}</Card.Text>
            <Card.Text>
              <Badge variant="info" style={{ textTransform: "uppercase" }}>
                {category}
              </Badge>
            </Card.Text>
          </div>
          <div style={{ width: "100px" }}>
            <ScoreThermometer score={rating} ratingCount={ratingCount} />
          </div>
        </Card.Body>
      </StyledBusinessCard>
    </StyledArticle>
  );
};

export default BusinessCard;

BusinessCard.propTypes = {
  rating: PropTypes.number.isRequired,
  ratingCount: PropTypes.any.isRequired,
  name: PropTypes.string,
  knownFor: PropTypes.string,
  category: PropTypes.string,
};
