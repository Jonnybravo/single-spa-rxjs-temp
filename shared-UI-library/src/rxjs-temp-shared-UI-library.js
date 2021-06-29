import "./global.css?modules=false";
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import singleSpa from 'single-spa'
// import {teste} from "./button.component.js";

// export {default as J} from "./button2.component.js";;

// You can also export React components from this file and import them into your microfrontends
// export { default as teste } from "./button.component.js";

// export { default as Button } from "./button.component.js";
export { default as Input } from "./Input/Input";
export { default as Title } from "./Typography/Title";
export { default as Button } from "./Button/Button";
export { default as Loader } from "./Button/Loader";
export { default as UserInfoList } from "./UserInfoList/UserInfoList";
export { ParcelLoader } from "./Button/Loader";
