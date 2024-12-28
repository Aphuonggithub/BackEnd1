import express from "express";
import configViewEngine from "./configs/viewEngine";

import initWebRouter from "./route/web";
import connection from "./configs/connectDB";

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8081;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup view engine
configViewEngine(app);

// init web route
initWebRouter(app);

app.get("/about", (req, res) => {
  res.send(`I am Phuong Nguyen !`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
