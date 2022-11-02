const express = require("express");
const router = express.Router();

class OrderRouter {
  constructor(controller, auth) {
    this.controller = controller;
    this.auth = auth;
  }
  routes() {
    //get all
    router.get("/", this.controller.getAll.bind(this.controller));

    //get one
    // router.get("/:orderId", this.controller.getOne.bind(this.controller));

    //get all orders associated with this user
    router.get("/:userId", this.controller.getAllOrders.bind(this.controller));

    //get specific order details from orderDetailmodel
    // router.get(
    //   "/:userId/:orderId/orderDetails",
    //   this.controller.getAllOrderDetails.bind(this.controller)
    // );

    router.post(
      "/:orderId/orderDetails",
      this.controller.insertOrderDetail.bind(this.controller)
    );

    //insert one
    router.post("/", this.controller.insertOne.bind(this.controller));
    return router;
  }
}

module.exports = OrderRouter;
