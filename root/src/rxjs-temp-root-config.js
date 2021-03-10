
import {start,getAppNames} from "single-spa";
import {loadApp} from './helper'
import {AppStore} from "@rxjs-temp/messenger";
import {getListContent} from './api/list'

async function init() {
  const data = await getListContent()
  await AppStore.init(data)
  const {appList} =  AppStore.getData()

  const loadingPromises = appList.filter(({ name, hash, appURL, global, show }) => show && loadApp(name, hash, appURL, global))

  await Promise.all(loadingPromises);

  await System.import("@rxjs-temp/shared-UI-library").then(() => {
    start({
      urlRerouteOnly: true,
    });
  });
}
export async function loadingApplication(name, hash, appURL){
  await loadApp(name, hash, appURL, false)

  // await System.import("@rxjs-temp/shared-UI-library").then(() => {
  //   start({
  //     urlRerouteOnly: true,
  //   });
  // });
}
export async function getCurrentApps( ){
  const data = getAppNames()

  console.log('registered apps', data)
}
init();