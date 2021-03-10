import React, { useState, Fragment, useEffect} from "react";
import { useHistory, useLocation, NavLink } from "react-router-dom";

import { Button, Form, Icon, Card, Checkbox, Grid } from "semantic-ui-react";
import {AppStore} from "@rxjs-temp/messenger";
import {addNewApp } from '../api/list';
import {getCurrentApps, loadingApplication} from "@rxjs-temp/root-config";


export default function AppForm({onHandlerEvent}) {
  const [appName, setAppName] = useState("");
  const [appRoute, setAppRoute] = useState("");
  const [appURL, setAppURL] = useState("");
  const [list, setList] = useState(AppStore.initialState)
  let { push } = useHistory();
  
  useEffect(() => {
    const subs = AppStore.subscribe(setList);
    AppStore.init()
    getCurrentApps()
    return () => subs.unsubscribe();
  },[])

  const handlerClick = async (appName, appRoute, appURL) => {
    
    const data = await addNewApp(appName, appRoute, appURL);

    if(data){
      await loadingApplication(appName, appRoute, appURL)
      await getCurrentApps()
      await AppStore.pathList(data);
      push('./')

    }
  };
  
  return (
    <Fragment>
      <h2>Add new application</h2>

      <Form>
        <Form.Group widths='equal'>
        <Form.Field>
          <label htmlFor="appName">Name</label>
          <input
            name="appName"
            placeholder="Aplication Name"
            onChange={(e) => setAppName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="appURL">URL</label>
          <input
            name="appURL"
            placeholder="Aplication URL"
            onChange={(e) => setAppURL(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="appRoute">Route</label>
          <input
            name="appRoute"
            placeholder="Route name"
            onChange={(e) => setAppRoute(e.target.value)}
          />
        </Form.Field>
        </Form.Group>
        <Button type="submit" onClick={() => handlerClick(appName, appRoute, appURL)}>
          Create
        </Button>
      </Form>
    </Fragment>
  );
}
