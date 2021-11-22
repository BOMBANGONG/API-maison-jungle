const express = require("express");
const cors = require("cors");
const app = express();
let PORT = 8080;

const sleep = (ms) => new Promise((res) => setTimeout(() => res(), ms));

app.use(cors());

const plantLists = require("./plantlist.json");

app.get("/plantlist", async (req, res) => {
  await sleep(3000);
  res.status(200).json(plantLists);
});

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
