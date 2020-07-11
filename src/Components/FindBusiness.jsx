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

export const FindBusiness = () => {
  return (
    <>
      <SearchFilter>
        <Placeholder>
          <em>Find black-owned businesses</em>
        </Placeholder>
      </SearchFilter>
      {/* TODO */}
      {/* <BusinessCard name, rating, category, knownfor, image /> */}
      <Container fluid style={{ marginTop: "-4em" }}>
        <Row xs={1} sm={3} className="justify-content-center">
          <StyledCol>
            <BusinessCard rating={8} ratingCount={10} />
          </StyledCol>
          <StyledCol>
            <BusinessCard rating={4} ratingCount={100} />
          </StyledCol>
          <StyledCol>
            <BusinessCard rating={3} ratingCount="10k" />
          </StyledCol>
        </Row>
      </Container>
    </>
  );
};
