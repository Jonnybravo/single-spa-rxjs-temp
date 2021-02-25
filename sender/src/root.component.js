import React, { useState } from "react";
import temperaturesStore from "@rxjs-temp/messenger";
import { Container, Input } from "semantic-ui-react";

export default function Root(props) {
  const [temp, setTemp] = useState("");

  const registerTemperature = () => {
    console.log("Sending: ", temp);

    temperaturesStore.sendTemperature({ timestamp: Date.now(), value: temp });

    setTemp("");
  };
  return (
    <div fluid style={{ padding: "30px", width: "100%" }}>
      <h1>Send your temperature</h1>
      <Input
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
        action={{ content: "Register", onClick: registerTemperature }}
        placeholder="Insert temperature"
      />
    </div>
  );
}
