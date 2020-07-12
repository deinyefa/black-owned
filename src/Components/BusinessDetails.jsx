import styled from "@emotion/styled";
import React from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import RelatedBusinesses from "./RelatedBusinesses";
import { ScoreThermometer } from "./UI";

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

const SmallCircle = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background: linear-gradient(45deg, teal, green);
`;

export default () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg="3" xl="2" className="d-sm-none d-lg-block">
            <StyledIcon />
          </Col>
          <Col>
            <h1>Business Name</h1>
            <p className="lead">
              Sociis natoque penatibus et magnis dis parturient.
            </p>
            <Badge variant="info" className="mr-2 text-uppercase">
              Fashion
            </Badge>
            <Badge variant="info" className="text-uppercase">
              Clothing
            </Badge>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg="9">
            <Card className="shadow border-0 p-3">
              <MainAsset />
              <div className="d-flex">
                {[1, 2, 3, 4].map((el) => (
                  <SmallerAsset />
                ))}
              </div>
              <hr />
              <p>
                libero nunc consequat interdum varius sit amet mattis vulputate
                enim nulla aliquet porttitor lacus luctus accumsan tortor
                posuere ac ut consequat semper viverra nam libero justo laoreet
                sit amet cursus sit amet dictum sit amet justo donec enim diam
                vulputate ut pharetra sit amet aliquam id diam maecenas
                ultricies mi.
              </p>
              <div className="d-flex">
                <Badge variant="info" className="mr-2">
                  Facebook
                </Badge>
                <Badge variant="default" className="mr-2">
                  Instagram
                </Badge>
                <Badge variant="primary">Twitter</Badge>
              </div>
            </Card>
          </Col>
          <Col lg="3" className="mt-lg-0 mt-sm-4">
            <ScoreThermometer score={5} ratingCount={20} />
            <h3 className="text-uppercase text-muted h6 my-3">Known for</h3>
            <div>
              <p>Quality Products</p>
              <p>Fast Delivery</p>
              <p>Sweet Packaging</p>
            </div>
            <hr />
            <Card
              className="d-flex flex-row justify-content-around"
              as="a"
              href="http://www.google.com"
              target="_blank"
            >
              <SmallCircle className="align-self-center" />
              <span>
                <span>Website</span>
                <span className="text-muted d-block">example.com</span>
              </span>
            </Card>
            <hr />
            <h3 className="text-uppercase text-muted h6 my-3">
              Related Businesses
            </h3>
            <RelatedBusinesses />
            <RelatedBusinesses />
            <RelatedBusinesses />
            <RelatedBusinesses />
            <RelatedBusinesses />
          </Col>
        </Row>
      </Container>
    </>
  );
};
