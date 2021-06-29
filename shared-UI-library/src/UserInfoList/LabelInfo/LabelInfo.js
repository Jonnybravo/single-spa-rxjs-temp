// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";

import { List } from "semantic-ui-react";

import Typography from "../../Typography/Title";

function LabelInfo(props) {
  const { label, value } = props;

  const listValue = (value) => {
    if (typeof value !== "string") {
      return (
        <List bulleted style={{ paddingLeft: "50px" }}>
          {value.map((element, idx) => (
            <List.Item key={idx} style={{ fontSize: "12px" }}>
              {element}
            </List.Item>
          ))}
        </List>
      );
    }

    return value;
  };

  return (
    <div>
      <Typography level={4}>{label}:</Typography> {listValue(value)}
    </div>
  );
}

LabelInfo.propTypes = {};

export default LabelInfo;
