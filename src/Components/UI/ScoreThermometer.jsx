import PropTypes from "prop-types";
import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

export const ScoreThermometer = ({ score, ratingCount, textRight = true }) => {
  const getPercent = Math.round((score / 10) * 100);

  return (
    <>
      <p className={`mb-0 ${textRight && "text-right"}`}>
        <strong>{score}/10</strong> ({ratingCount})
      </p>
      <ProgressBar
        srOnly
        variant={
          getPercent <= 33 ? "danger" : getPercent <= 66 ? "warning" : "success"
        }
        now={getPercent}
      />
    </>
  );
};

ScoreThermometer.propTypes = {
  score: PropTypes.number.isRequired,
  ratingCount: PropTypes.any,
};
