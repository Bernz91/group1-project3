const cors = require("cors");
const express = require("express");
require("dotenv").config();

// importing Routers
const FabricsRouter = require("./routers/fabricsRouter");

// importing Controllers
const FabricsController = require("./controllers/fabricsController");

// importing DB
const db = require("./db/models/index");
const { fabric } = db;

// initializing Controllers -> note the lowercase for the first word
const fabricsController = new FabricsController(fabric);

// inittializing Routers
const fabricRouter = new FabricsRouter(fabricsController).routes();

const PORT = process.env.PORT;
const app = express();

// Enable CORS access to this server
app.use(cors());

// Enable reading JSON request bodies
app.use(express.json());

// using the routers
app.use("/fabrics", fabricRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
