const cors = require("cors");
const express = require("express");
require("dotenv").config();

// importing Routers
const FabricsRouter = require("./routers/fabricsRouter");
const CollarsRouter = require("./routers/collarsRouter");
const BacksRouter = require("./routers/backsRouter");
const CuffsRouter = require("./routers/cuffsRouter");
const FrontsRouter = require("./routers/frontsRouter");
const PocketsRouter = require("./routers/pocketsRouter");

// importing Controllers
const FabricsController = require("./controllers/fabricsController");
const CollarsController = require("./controllers/collarsController");
const BacksController = require("./controllers/backsController");
const CuffsController = require("./controllers/cuffsController");
const FrontsController = require("./controllers/frontsController");
const PocketsController = require("./controllers/pocketsController");

// importing DB
const db = require("./db/models/index");
const { fabric, collar, back, cuff, front, pocket } = db;

// initializing Controllers -> note the lowercase for the first word
const fabricsController = new FabricsController(fabric);
const collarsController = new CollarsController(collar);
const backsController = new BacksController(back);
const cuffsController = new CuffsController(cuff);
const frontsController = new FrontsController(front);
const pocketsController = new PocketsController(pocket);

// inittializing Routers
const fabricRouter = new FabricsRouter(fabricsController).routes();
const collarRouter = new CollarsRouter(collarsController).routes();
const backRouter = new BacksRouter(backsController).routes();
const cuffRouter = new CuffsRouter(cuffsController).routes();
const frontRouter = new FrontsRouter(frontsController).routes();
const pocketRouter = new PocketsRouter(pocketsController).routes();

const PORT = process.env.PORT;
const app = express();

// Enable CORS access to this server
app.use(cors());

// Enable reading JSON request bodies
app.use(express.json());

// using the routers
app.use("/fabrics", fabricRouter);
app.use("/collars", collarRouter);
app.use("/backs", backRouter);
app.use("/cuffs", cuffRouter);
app.use("/fronts", frontRouter);
app.use("/pockets", pocketRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
