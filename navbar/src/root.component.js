import React from "react";
import { navigateToUrl } from "single-spa";

export default function Root(props) {
  return (
    <div
      className="ui stackable menu fixed inverted"
      style={{ position: "sticky" }}
    >
      <div className="item">
        <img src="https://i.ibb.co/NnYmtv7/philip-morris-international-pmi-vector-logo.png" />
      </div>
      <a href="/" className="item" onClick={navigateToUrl}>
        Send temperature
      </a>
      <a href="/receiver" className="item" onClick={navigateToUrl}>
        View registered temperatures
      </a>
    </div>
  );
}
