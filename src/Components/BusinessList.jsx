import styled from "@emotion/styled";
import React from "react";
import { Col } from "react-bootstrap";
import BusinessCard from "./BusinessCard";

const StyledCol = styled(Col)`
  max-width: 500px;
`;

const BusinessList = ({ businesses }) => {
  return (
    !!businesses?.length &&
    businesses.map((business) => {
      const mostKnownFor = business.knownFor.reduce((prev, current) =>
        prev.y > current.y ? prev : current
      );

      return (
        <StyledCol key={business.uid}>
          <BusinessCard business={business} knownFor={mostKnownFor.value} />
        </StyledCol>
      );
    })
  );
};

export default BusinessList;
