const express = require("express");
const router = express.Router();

class UsersRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    //get all
    router.get("/", this.controller.getAll.bind(this.controller));

    //get one
    router.get("/:userId", this.controller.getOne.bind(this.controller));

    //get one measurement
    router.get("/:userId/measurements", this.controller.getAllMeasurements.bind(this.controller));

    //insert one
    router.post("/", this.controller.insertOne.bind(this.controller));

    //edit one
    router.put("/:userId", this.controller.editUser.bind(this.controller));
    return router;
  }
}

module.exports = UsersRouter;
