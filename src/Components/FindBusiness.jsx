import styled from "@emotion/styled";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BusinessCard } from "./BusinessCard";

const SearchFilter = styled.div`
  padding: 5em 0 8em;
  background: #020100;
`;

const Placeholder = styled.p`
  color: #fffce8;
  width: 90%;
  margin: 0 auto 11.8px;
  border-bottom: 1px solid;
  padding-bottom: 5px;
`;

const StyledCol = styled(Col)`
  max-width: 500px;
`;

const businesses = [
  {
    name: "Business 1",
    rating: 8,
    ratingCount: "12",
    knownFor: ["Quality Product", "Sweet Packaging"],
    category: "Clothing",
  },
  {
    name: "Business 3",
    rating: 6,
    ratingCount: "12",
    knownFor: ["On-time delivery"],
    category: "Fashion",
  },
  {
    name: "Business 2",
    rating: 3,
    ratingCount: "12",
    knownFor: ["Sweet Packaging"],
    category: "Beauty",
  },
  {
    name: "Business 5",
    rating: 7,
    ratingCount: "12k",
    knownFor: ["Sweet Packaging"],
    category: "Skin care",
    // image: ""
  },
];

export const FindBusiness = () => {
  return (
    <>
      <SearchFilter>
        <Placeholder>
          <em>Find black-owned businesses</em>
        </Placeholder>
      </SearchFilter>
      <Container style={{ marginTop: "-4em" }}>
        <Row xs={1} sm={3} xl={4}>
          {businesses.map((business, idx) => (
            <StyledCol key={idx}>
              <BusinessCard
                name={business.name}
                rating={business.rating}
                ratingCount={business.ratingCount}
                knownFor={business.knownFor[0]}
                category={business.category}
                id={idx}
              />
            </StyledCol>
          ))}
        </Row>
      </Container>
    </>
  );
};
