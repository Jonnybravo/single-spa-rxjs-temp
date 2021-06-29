// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";

import { Container, Segment } from "semantic-ui-react";

import LabelInfo from "./LabelInfo/LabelInfo";
import Title from "../Typography/Title";

function UserInfoList(props) {
  const { userInfo } = props;

  return (
    <Container>
      <Title level={1}>User Profile</Title>
      {Object.entries(userInfo).map(([key, value], idx) => (
        <Segment vertical key={idx}>
          <LabelInfo label={key} value={value}></LabelInfo>
        </Segment>
      ))}
    </Container>
  );
}

UserInfoList.propTypes = {};

export default UserInfoList;