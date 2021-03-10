import {registerApplication, unregisterApplication} from 'single-spa';

export  async function loadApp(name, hash, appURL, global) {
    const path = global ? () => true : (location) => location.pathname.startsWith(hash)
    registerApplication({
        name,
        app: () => System.import(appURL),
        activeWhen: path
      })
    
    // register the app with singleSPA and pass a reference to the store of the app as well as a reference to the globalEventDistributor
   // singleSpa.registerApplication(name, () => SystemJS.import(appURL), hashPrefix(hash), customProps);
}