const express = require("express");
const router = express.Router();

class UsersRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    //get all user
    router.get("/", this.controller.getAll.bind(this.controller));

    //get one user
    router.get("/:userId", this.controller.getOne.bind(this.controller));

    //insert one user
    router.post("/", this.controller.insertOne.bind(this.controller));

    //edit user
    router.put("/:userId", this.controller.editUser.bind(this.controller));

    //get all size profiles
    router.get(
      "/:userId/measurements",
      this.controller.getMeasurements.bind(this.controller)
    );

    //insert one size profile
    router.post(
      "/:userId/measurements",
      this.controller.insertOneMeasurement.bind(this.controller)
    );

    //delete one size profile
    router.delete(
      "/:userId/measurements/:measurementId",
      this.controller.deleteOneMeasurement.bind(this.controller)
    );

    //edit size profile
    router.put(
      "/:userId/:measurementId",
      this.controller.editMeasurement.bind(this.controller)
    );

    return router;
  }
}

module.exports = UsersRouter;
