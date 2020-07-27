import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Badge, Card, Modal } from "react-bootstrap";
import BusinessDetails from "./BusinessDetails";
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

const BusinessCard = ({ knownFor, business }) => {
  const [openDetails, setOpenDetails] = useState(false);
  return (
    <>
      <StyledArticle onClick={() => setOpenDetails(true)} className="shadow">
        <StyledBusinessCard className="border-0">
          <Card.Body
            className="d-flex justify-content-between pt-0"
            style={{ marginTop: "-1em" }}
          >
            <div className="pr-1">
              <Card.Title>{business.name}</Card.Title>
              <Card.Text className="text-primary">{knownFor}</Card.Text>
              <Card.Text>
                <Badge variant="info" style={{ textTransform: "uppercase" }}>
                  {business.category}
                </Badge>
              </Card.Text>
            </div>
            <div style={{ width: "100px" }}>
              <ScoreThermometer
                score={business.rating}
                ratingCount={business.ratingCount}
              />
            </div>
          </Card.Body>
        </StyledBusinessCard>
      </StyledArticle>

      <Modal show={openDetails} onHide={() => setOpenDetails(false)} size="xl">
        <Modal.Header closeButton className="border-bottom-0" />
        <Modal.Body>
          <BusinessDetails business={business} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BusinessCard;

BusinessCard.propTypes = {
  knownFor: PropTypes.string,
  business: PropTypes.object,
};
