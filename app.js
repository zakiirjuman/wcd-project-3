import express from "express";

import createConnection from "./createConnection.js";

const app = express();
app.use(express.json());

const { DB_HOST, DB_PORT, DB_NAME } = process.env;

(async function () {
  const { db } = await createConnection(DB_HOST, DB_PORT, DB_NAME);
  if (db) {
    //ensure that the players collection exists
    //app.get("/players", async (req, res) => {});
    //app.get("/toronto", async (req, res) => {});
    //app.get("/points", async (req, res) => {});
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  } else {
    console.log("No database connection");
  }
})();
