import styled from "@emotion/styled";
import React from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { IconFacebook, IconInstagram, IconTwitter } from "../icons";
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
  background: linear-gradient(45deg, teal, green);
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

export default ({ business, ...props }) => {
  console.log(business);
  return (
    <>
      <Container>
        <Row>
          <Col lg="3" xl="2" className="d-sm-none d-lg-block">
            <StyledIcon />
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
            <Card className="shadow border-0 p-3">
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
