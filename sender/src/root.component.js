import React, { useState } from "react";
import temperaturesStore from "@rxjs-temp/messenger";

import { Input } from "@rxjs-temp/shared-UI-library";

export default function Root(props) {
  const [temp, setTemp] = useState("");

  const registerTemperature = () => {
    console.log("Sending: ", temp, typeof temp);

    if (/^[+-]?\d+$/.test(temp)) {
      temperaturesStore.sendTemperature({ timestamp: Date.now(), value: temp });
    }

    setTemp("");
  };
  return (
    <div fluid style={{ padding: "30px", width: "100%" }}>
      <h1>Send your temperature</h1>
      <Input
        value={temp}
        placeholder="Insert temperature"
        actionName="Register"
        onChange={(e) => setTemp(e.target.value)}
        onClick={registerTemperature}
      />
    </div>
  );
}
