const express = require("express");
const router = express.Router();

class BacksRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    //get all
    router.get("/", this.controller.getAll.bind(this.controller));

    //get one
    router.get("/:backId", this.controller.getOne.bind(this.controller));

    //insert one
    router.post("/", this.controller.insertOne.bind(this.controller));
    return router;
  }
}

module.exports = BacksRouter;
