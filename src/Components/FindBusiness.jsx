import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import * as FirestoreService from "../services/firestore";
import BusinessCard from "./BusinessCard";
import BusinessDetails from "./BusinessDetails";

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
  const [businesses, setBusinesses] = useState();
  const [openDetails, setOpenDetails] = useState(false);

  useEffect(() => {
    const getBusinesses = () => {
      FirestoreService.getBusinesses("businesses")
        .then((querySnapshot) => {
          let data = [];
          querySnapshot.forEach((doc) => {
            data.push({ uid: doc.id, ...doc.data() });
          });
          setBusinesses(data);
        })
        .catch(() => "Error getting list");
    };
    getBusinesses();
  }, []);

  return (
    <>
      <SearchFilter>
        <Placeholder>
          <em>Find black-owned businesses</em>
        </Placeholder>
      </SearchFilter>
      <Container style={{ marginTop: "-4em" }}>
        <Row xs={1} sm={3} xl={4}>
          {/* TODO: Extract this into another compnent <BusinessList/> */}
          {businesses?.length &&
            businesses.map((business) => {
              const mostKnownFor = business.knownFor.reduce((prev, current) =>
                prev.y > current.y ? prev : current
              );

              return (
                <StyledCol key={business.uid}>
                  <BusinessCard
                    onClick={() => setOpenDetails(true)}
                    name={business.name}
                    rating={business.rating}
                    ratingCount={business.ratingCount}
                    knownFor={mostKnownFor.value}
                    category={business.category}
                  />
                </StyledCol>
              );
            })}
        </Row>
      </Container>
      <Modal show={openDetails} onHide={() => setOpenDetails(false)} size="xl">
        <Modal.Header closeButton className="border-bottom-0" />
        <Modal.Body>
          <BusinessDetails />
        </Modal.Body>
      </Modal>
    </>
  );
};

/**
 * To view business details
 * 1. Click business
 * 2. Update url with business uid
 * 3. This should trigger modal to open
 *      - this way you can navigate back and forth in the browser
 * 4. Send request to firebase to pull more information
 */
