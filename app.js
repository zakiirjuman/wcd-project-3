import express from "express";

import createConnection from "./createConnection.js";

const app = express();
app.use(express.json());

const { DB_HOST, DB_PORT, DB_NAME } = process.env;

(async function () {
  const { db } = await createConnection(DB_HOST, DB_PORT, DB_NAME);
  if (db) {
    //ensure that the players collection exists
    const players = db.collection("nhl_stats_2022");

    //error if there are no documents in the collection
    if ((await players.countDocuments({})) === 0) {
      console.log("No documents in players collection   ...exiting");
      process.exit(1);
    }

    //return all documents in the nhl_stats_2022 collection
    app.get("/players", async (req, res) => {
      const cursor = await players.find({});
      const results = await cursor.toArray();
      res.json(results);
    });
    //return top players
    app.get("/players/top/:number", async (req, res) => {
      //convert the number to an integer
      const number = parseInt(req.params.number);
      const cursor = await players.find({}).sort({ Pts: -1 }).limit(number);
      const results = await cursor.toArray();
      res.json(results);
    });
    //returns all players with teamName
    app.get("/players/team/:teamName", async (req, res) => {
      const cursor = await players.find({ Team: req.params.teamName });
      const results = await cursor.toArray();
      res.json(results);
    });
    //list all team names
    app.get("/teams", async (req, res) => {
      const cursor = await players.distinct("Team");
      res.json(cursor);
    });
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  } else {
    console.log("No database connection");
  }
})();
