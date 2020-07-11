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
  max-width: 450px;
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
        <Row className="justify-content-center">
          <StyledCol>
            <BusinessCard />
          </StyledCol>
          <StyledCol>
            <BusinessCard />
          </StyledCol>
          <StyledCol>
            <BusinessCard />
          </StyledCol>
        </Row>
      </Container>
    </>
  );
};
