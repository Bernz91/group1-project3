const express = require("express");
const router = express.Router();

class PocketsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    //get all
    router.get("/", this.controller.getAll.bind(this.controller));

    //get one
    router.get("/:pocketId", this.controller.getOne.bind(this.controller));

    //insert one
    router.post("/", this.controller.insertOne.bind(this.controller));
    return router;
  }
}

module.exports = PocketsRouter;
