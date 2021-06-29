import styled from "styled-components";
import PropTypes from "prop-types";
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import { ButtonStyle } from "./ButtonStyle";

const Button = styled.button`
  ${ButtonStyle}
  width: 300px;
  margin-top: 20px;
`;

Button.propTypes = {
  disbaled: PropTypes.bool,
  inverted: PropTypes.bool,
};

export default Button;

export const ParcelButton = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: <Button>teste</Button>,
});
