import { registerApplication, start } from "single-spa";

/*registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});*/

registerApplication({
  name: "@rxjs-temp/sender",
  app: () => System.import("@rxjs-temp/sender"),
  activeWhen: (location) => location.pathname === "/",
});
registerApplication({
  name: "@rxjs-temp/receiver",
  app: () => System.import("@rxjs-temp/receiver"),
  activeWhen: ["/receiver"],
});

registerApplication({
  name: "@rxjs-temp/navbar",
  app: () => System.import("@rxjs-temp/navbar"),
  activeWhen: () => true,
});

System.import("@rxjs-temp/shared-UI-library").then(() => {
  start({
    urlRerouteOnly: true,
  });
});
