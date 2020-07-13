import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";

const IconWrapper = styled.span`
  margin-right: 1em;
  &:last-child {
    margin-right: 0;
  }
`;

export const FlatIcon = ({ icon, ...props }) => (
  <IconWrapper {...props}>{icon}</IconWrapper>
);

FlatIcon.propTypes = {
  icon: PropTypes.object.isRequired,
};
