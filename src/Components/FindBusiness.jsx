import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import * as FirestoreService from "../services/firestore";
import BusinessList from "./BusinessList";

const SearchFilter = styled.div`
  padding: 5em 0 8em;
`;

const Placeholder = styled.p`
  color: #fffce8;
  width: 90%;
  margin: 0 auto 11.8px;
  border-bottom: 1px solid;
  padding-bottom: 5px;
`;

export const FindBusiness = () => {
  const [businesses, setBusinesses] = useState();

  useEffect(() => {
    const getBusinesses = () => {
      FirestoreService.getBusinesses("businesses")
        .then((querySnapshot) => {
          let data = [];
          querySnapshot.forEach((doc) => {
            // find business logo
            // let downloadURL = "";
            // const imageRef = FirestoreService.storageRef.child(
            //   `${doc.id}/logo.jpg`
            // );

            // imageRef
            //   .getDownloadURL()
            //   .then((url) => (downloadURL = url))
            //   .catch((err) => console.log(err));

            data.push({
              uid: doc.id,
              ...doc.data(),
            });
          });

          setBusinesses(data);
        })
        .catch(() => "Error getting list");
    };
    getBusinesses();
  }, []);

  return (
    <>
      <SearchFilter className="bg-primary">
        <Placeholder>
          <em>Find black-owned businesses</em>
        </Placeholder>
      </SearchFilter>
      <Container style={{ marginTop: "-4em" }}>
        <Row xs={1} sm={2} md={3} xl={4}>
          <BusinessList businesses={businesses} />
        </Row>
      </Container>
    </>
  );
};
