import styled from "@emotion/styled";
import React from "react";
import { ScoreThermometer } from "../UI";

const Icon = styled.div`
  background: linear-gradient(45deg, tan, yellow);
  margin-right: 1em;
  width: 50px;
  height: 50px;
`;

export default ({ business }) => {
  return (
    <article className="d-flex mb-4">
      <Icon />
      <div>
        <p className="mb-1">{business.name}</p>
        <ScoreThermometer
          score={business.rating}
          ratingCount={business.ratingCount}
          textRight={false}
        />
      </div>
    </article>
  );
};
