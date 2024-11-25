const { createServer } = require("http");
require("dotenv").config(); // load environment variables into process.env from .env file
const db = require("./db.js");
const serverHandler = require("./server.js");

async function main() {
  try {
    const port = 8000;
    await db.connect(process.env.MONGO_URI);
    const server = createServer(serverHandler);

    server.listen(port, function () {
      console.log(`Server listening on port ${port}`);
    });
  } catch (err) {
    console.error("error starting the server");
    console.error(JSON.stringify(err));
    if (err instanceof Error) throw new Error(err.message);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
