import React, { useState, useEffect } from "react";
import { UserInfoList } from "@rxjs-temp/shared-UI-library";

export default function UserInfo(props) {
  const userInfo = props.userInfo;

  return (
    <div fluid style={{ padding: "30px", width: "100%" }}>
      <UserInfoList userInfo={userInfo}></UserInfoList>
    </div>
  );
}
