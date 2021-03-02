import React from "react";
import PropTypes from "prop-types";

function Title(props) {
  const { level } = props;

  const CustomTag = `h${level}`;

  return <CustomTag>{props.children}</CustomTag>;
}

Title.propTypes = {
  level: PropTypes.number,
};

export default Title;
