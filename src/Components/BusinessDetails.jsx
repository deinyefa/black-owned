import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { IconFacebook, IconInstagram, IconTwitter } from "../icons";
import * as FirestoreService from "../services/firestore";
import {
  BusinessKnownFor,
  BusinessRating,
  BusinessWebsite,
  RelatedBusinessList,
} from "./Business";
import { FlatIcon } from "./UI";

const StyledIcon = styled.div`
  max-width: 150px;
  min-height: 150px;
  background-image: ${(props) =>
    props.logo
      ? "url(" + props.logo + ")"
      : "linear-gradient(45deg, teal, green)"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0.25rem;
`;

const MainAsset = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 1em;
  background: linear-gradient(45deg, tan, yellow);
`;

const SmallerAsset = styled.div`
  border-radius: 0.25rem;
  width: 100px;
  height: 100px;
  margin-right: 1em;
  background: linear-gradient(45deg, tan, yellow);
`;

const StyledHR = styled.hr`
  margin: 3rem 0;
`;

export default ({ business }) => {
  const [businessImages, setBusinessImages] = useState([]);

  useEffect(() => {
    const getImages = () => {
      FirestoreService.getBusinessImages(business.uid)
        .then((res) => {
          let downloadArr = [];
          res.items.forEach((itemRef) => {
            itemRef
              .getDownloadURL()
              .then((url) => {
                downloadArr.push(url);
              })
              .catch((error) =>
                console.log(
                  "Something went wrong fetching the download url for this image",
                  error
                )
              );
          });

          Promise.resolve(downloadArr)
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
          // setBusinessImages(Promise.resolve(downloadArr));
        })
        .catch((error) =>
          console.log(
            "Something went wrong fetching the images associated with this business",
            error
          )
        );
    };
    getImages();
  }, [business.uid]);

  return (
    <>
      <Container>
        <Row>
          <Col lg="3" xl="2" className="d-sm-none d-lg-block">
            <StyledIcon logo={business.downloadURL} />
          </Col>
          <Col>
            <h1>{business.name}</h1>
            <p className="lead">
              Sociis natoque penatibus et magnis dis parturient.
            </p>
            <Badge variant="info" className="text-uppercase">
              {business.category}
            </Badge>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg="9">
            <Card className="shadow border-0 p-3 mb-5">
              <MainAsset />
              <div className="d-flex">
                {[1, 2, 3, 4].map((el) => (
                  <SmallerAsset key={el} />
                ))}
              </div>
              <StyledHR />
              <p>
                libero nunc consequat interdum varius sit amet mattis vulputate
                enim nulla aliquet porttitor lacus luctus accumsan tortor
                posuere ac ut consequat semper viverra nam libero justo laoreet
                sit amet cursus sit amet dictum sit amet justo donec enim diam
                vulputate ut pharetra sit amet aliquam id diam maecenas
                ultricies mi.
              </p>
              <div className="d-flex">
                <FlatIcon icon={<IconFacebook width={30} />} />
                <FlatIcon icon={<IconInstagram width={30} />} />
                <FlatIcon icon={<IconTwitter width={30} />} />
              </div>
            </Card>
            <h3 className="text-uppercase text-muted h6 my-3">Reviews</h3>
            <Card>swanky review list</Card>
          </Col>
          <Col lg="3" className="mt-lg-0 mt-sm-5">
            <BusinessRating
              rating={business.rating}
              ratingCount={business.ratingCount}
            />
            <StyledHR />
            <BusinessKnownFor knownFor={business.knownFor} />
            <StyledHR />
            <BusinessWebsite website={business.website} />
            <StyledHR />
            <RelatedBusinessList
              category={business.category}
              uid={business.uid}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
