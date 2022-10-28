const cors = require("cors");
const express = require("express");
require("dotenv").config();

const auth = require("./middlewares/auth");

// importing Routers
const FabricsRouter = require("./routers/fabricsRouter");
const CollarsRouter = require("./routers/collarsRouter");
const BacksRouter = require("./routers/backsRouter");
const CuffsRouter = require("./routers/cuffsRouter");
const FrontsRouter = require("./routers/frontsRouter");
const PocketsRouter = require("./routers/pocketsRouter");

const UsersRouter = require("./routers/usersRouter");

const OrderRouter = require("./routers/orderRouter");
const OrderDetailsRouter = require("./routers/orderDetailsRouter");
const WishlistsRouter = require("./routers/wishlistsRouter");

// importing Controllers
const FabricsController = require("./controllers/fabricsController");
const CollarsController = require("./controllers/collarsController");
const BacksController = require("./controllers/backsController");
const CuffsController = require("./controllers/cuffsController");
const FrontsController = require("./controllers/frontsController");
const PocketsController = require("./controllers/pocketsController");

const UsersController = require("./controllers/usersController");

const OrderController = require("./controllers/orderController");
const OrderDetailsController = require("./controllers/orderDetailsController");
const WishlistsController = require("./controllers/wishlistController");

// importing DB
const db = require("./db/models/index");
const {
  fabric,
  collar,
  back,
  cuff,
  front,
  pocket,
  user,
  measurement,
  order,
  order_detail,
  wishlist,
} = db;

// initializing Controllers -> note the lowercase for the first word
const fabricsController = new FabricsController(fabric);
const collarsController = new CollarsController(collar);
const backsController = new BacksController(back);
const cuffsController = new CuffsController(cuff);
const frontsController = new FrontsController(front);
const pocketsController = new PocketsController(pocket);

const usersController = new UsersController(
  user,
  measurement,
  wishlist,
  fabric,
  cuff,
  collar,
  back,
  front,
  pocket
);

const orderController = new OrderController(order, user, order_detail);
const orderDetailsController = new OrderDetailsController(order_detail);
const wishlistsController = new WishlistsController(wishlist);

// inittializing Routers
const fabricRouter = new FabricsRouter(fabricsController).routes();
const collarRouter = new CollarsRouter(collarsController).routes();
const backRouter = new BacksRouter(backsController).routes();
const cuffRouter = new CuffsRouter(cuffsController).routes();
const frontRouter = new FrontsRouter(frontsController).routes();
const pocketRouter = new PocketsRouter(pocketsController).routes();

const userRouter = new UsersRouter(usersController, auth).routes();
const orderRouter = new OrderRouter(orderController).routes();
const orderDetailsRouter = new OrderDetailsRouter(
  orderDetailsController
).routes();

const wishlistRouter = new WishlistsRouter(wishlistsController).routes();

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

app.use("/users", userRouter);

app.use("/orders", orderRouter);
app.use("/wishlists", wishlistRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
