import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
const PORT = 8080;

const app: Application = express();
let DB = [
  {
    name: "@rxjs-temp/navbar",
    hash: "/navbar",
    appURL: "@rxjs-temp/navbar",
    storeURL: "/tempRegister/store.js",
    show: true,
    global: true,
  },
  {
    name: "@rxjs-temp/login",
    hash: "/login",
    appURL: "http://localhost:8007/rxjs-temp-auth.js",
    storeURL: "/tempRegister/store.js",
    show: true,
    global: true,
  },
  {
    name: "@rxjs-temp/sender",
    hash: "/sender",
    appURL: "@rxjs-temp/sender",
    storeURL: "/tempSender/store.js",
    show: true,
    global: false,
  },
  //   {
  //     name: "@rxjs-temp/receiver",
  //     hash: "/receiver",
  //     appURL: "http://e575333ce6fa.ngrok.io/rxjs-temp-receiver.js",
  //     storeURL: "/tempSender/store.js",
  //     show: true,
  //     global: false,
  //   },
  {
    name: "@rxjs-temp/settings",
    hash: "/settings",
    appURL: "http://localhost:8006/rxjs-temp-settings.js",
    storeURL: "/tempRegister/store.js",
    show: true,
    global: false,
  },
  {
    name: "@rxjs-temp/profile",
    hash: "/profile",
    appURL: "http://localhost:8007/rxjs-temp-profile.js",
    storeURL: "/tempRegister/store.js",
    show: true,
    global: false,
  },
];
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send(DB);
});

app.put("/", (req, res) => {
  const { name } = req.body;

  DB.forEach((el) => {
    el.show = el.name === name ? !el.show : el.show;
    return el;
  });
  res.status(200).send(DB);
});

app.delete("/", (req, res) => {
  const { name } = req.body;

  DB = DB.filter((item: any) => {
    console.log(name, item);
    return item.name !== name;
  });
  console.log(DB);
  res.status(200).send(DB);
});

app.post("/", (req, res) => {
  const { name, url, route } = req.body;
  let exist = false;

  DB.forEach((el) => {
    exist = exist || el.name == name ? true : false;
  });

  if (!exist) {
    DB.push({
      name,
      hash: route,
      appURL: `${url}`,
      storeURL: `${url}/store.js`,
      show: true,
      global: false,
    });
    return res.status(200).send(DB);
  }
  return res.status(409).send(`Error: The application already exist`);
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
