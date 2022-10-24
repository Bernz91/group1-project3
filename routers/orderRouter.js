const express = require("express");
const router = express.Router();

class OrderRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    //get all
    router.get("/", this.controller.getAll.bind(this.controller));

    //get one
    // router.get("/:orderId", this.controller.getOne.bind(this.controller));

    //get all orders associated with this user
    router.get(
      "/orders/:userId",
      this.controller.getAllOrders.bind(this.controller)
    );

    //get specific order details from orderDetailmodel
    router.get(
      "/orders/:orderId",
      this.controller.getOneOrderDetail.bind(this.controller)
    );

    //insert one
    router.post("/", this.controller.insertOne.bind(this.controller));
    return router;
  }
}

module.exports = OrderRouter;
