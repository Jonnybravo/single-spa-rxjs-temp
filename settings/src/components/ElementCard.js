import React, { useState, useEffect } from "react";
import { Button, Divider, Icon, Card, Checkbox, Grid } from "semantic-ui-react";
import {AppStore} from "@rxjs-temp/messenger";
export default function ElementCard({ show, name, hash, onHandlerRemoveEvent, onHandlerToggleEvent }) {
  
  return (
    <Card>
      <Card.Content header>
        <Grid columns="equal">
          <Grid.Column floated="left" textAlign="left">
            <a href={hash}><Icon name="linkify" />{name}</a>
          </Grid.Column>
          <Grid.Column floated="right" textAlign="right">
            <Icon name="close" onClick={() => onHandlerRemoveEvent(name)}/>
          </Grid.Column>
        </Grid>
      </Card.Content>
      <Card.Content extra>
        <Grid columns="equal">
          <Grid.Column floated="left" textAlign="left">
            <Icon color={show ? `green` : `red`} name="circle" />{" "}
            {show ? `Available` : `Disabled`}
          </Grid.Column>
          <Grid.Column floated="right" textAlign="right">
            <Checkbox slider checked={show} onClick={() => onHandlerToggleEvent(name)} />
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  );
}
