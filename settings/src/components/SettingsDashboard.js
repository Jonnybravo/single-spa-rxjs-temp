import React, { Fragment, useState, useLayoutEffect, useEffect } from "react";
import {
  Button,
  Checkbox,
  Icon,
  Card,
  Segment,
  Table,
} from "semantic-ui-react";
import ElementCard from './ElementCard'
import {AppStore} from "@rxjs-temp/messenger";
import { updateAppState, removeApp } from '../api/list';


export default function SettingsDashboard() {
  const [list, setList] = useState(AppStore.initialState)
  useEffect(() => {
    const subs = AppStore.subscribe(setList);
    AppStore.init()

    return () => subs.unsubscribe();
  },[])
  const handlerRemove = async (name) => {

    const data = await removeApp(name);

    if(data){
      AppStore.pathList(data);
    }


  };
  const handlerToggle = async (name) => {

    const data = await updateAppState(name);

    AppStore.pathList(data);

  };

  return (
    <Fragment>
      <h1>Settings</h1>

      <h2> List of available apps</h2>
      <Card.Group>
        {
          list.appList.map((el) =>  !el.global && <ElementCard key={el.name} {...el} onHandlerToggleEvent={handlerToggle} onHandlerRemoveEvent={handlerRemove} />)
        }
      </Card.Group>
    </Fragment>
  );
}
