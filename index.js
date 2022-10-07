const cors = require("cors");
const express = require("express");
require("dotenv").config();

// importing Routers
const FabricsRouter = require("./routers/fabricsRouter");
const CollarsRouter = require("./routers/collarsRouter");

// importing Controllers
const FabricsController = require("./controllers/fabricsController");
const CollarsController = require("./controllers/collarsController");

// importing DB
const db = require("./db/models/index");
const { fabric, collar } = db;

// initializing Controllers -> note the lowercase for the first word
const fabricsController = new FabricsController(fabric);
const collarsController = new CollarsController(collar);

// inittializing Routers
const fabricRouter = new FabricsRouter(fabricsController).routes();
const collarRouter = new CollarsRouter(collarsController).routes();

const PORT = process.env.PORT;
const app = express();

// Enable CORS access to this server
app.use(cors());

// Enable reading JSON request bodies
app.use(express.json());

// using the routers
app.use("/fabrics", fabricRouter);
app.use("/collars", collarRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
