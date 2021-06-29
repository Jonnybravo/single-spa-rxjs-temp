import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
// import { Container } from './styles';
//import loader from "./loader.gif"

function Loader() {
  //return <img alt="" src={loader} />;
  return <h1>loading...</h1>
}

export default Loader;

export const ParcelLoader = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Loader,
});