import { css } from "styled-components";

export const ButtonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  color: white;
  text-transform: uppercase;
  background: #007e9f;
  box-shadow: 0px 2px 4px rgba(100, 100, 100, 0.5);
  border-radius: 4px;
  padding: 5px 26px;
  box-sizing: border-box;
  cursor: pointer;

  min-width: 140px;
  max-width: 300px;
  max-height: 55px;
  min-height: 40px;
  width: 100%;
  align-self: center;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  ${(props) =>
    props.disabled &&
    css`
      background: linear-gradient(0deg, #007e9f, #007e9f), #007e9f;
      mix-blend-mode: normal;
      opacity: 0.5;
      cursor: not-allowed;
    `}

  ${(props) =>
    props.inverted &&
    css`
      background: white;
      color: black;
      border: 1px solid #007e9f;
    `}
`;
