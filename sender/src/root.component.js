import React, { useState } from "react";
import {temperaturesStore} from "@rxjs-temp/messenger";

import { Input, Title, Button } from "@rxjs-temp/shared-UI-library";
import { ButtonStyle } from "../../shared-UI-library/src/Button/ButtonStyle";

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
      <Title level={1}>Send your temperature</Title>
      <Input
        value={temp}
        placeholder="Insert temperature"
        actionName="Register"
        onChange={(e) => setTemp(e.target.value)}
        onClick={registerTemperature}
      />
      <Button>Styled component button</Button>
      <Button disabled>Styled component button disabled</Button>
      <Button inverted>Styled component button inverted</Button>
    </div>
  );
}
