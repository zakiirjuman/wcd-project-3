import assert from "assert";
import createConnection from "../createConnection.js";
const { TESTDB_HOST, DB_PORT, DB_NAME } = process.env;

describe("createConnection", function () {
  it("should return a client and a db object", async function () {
    const { db, client } = await createConnection(
      TESTDB_HOST,
      DB_PORT,
      DB_NAME
    );
    assert.notEqual(client, null);
    assert.notEqual(db, null);
  });
});
