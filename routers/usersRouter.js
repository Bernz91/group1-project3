const express = require("express");
const router = express.Router();

class UsersRouter {
  constructor(controller, auth) {
    this.controller = controller;
    this.auth = auth;
  }
  routes() {
    //get one user
    router.get(
      "/:userId",
      this.auth,
      this.controller.getOne.bind(this.controller)
    );

    //insert one user
    router.post(
      "/",
      this.auth,
      this.controller.insertOne.bind(this.controller)
    );

    //edit user
    router.put(
      "/:userId",
      this.auth,
      this.controller.editUser.bind(this.controller)
    );

    //get all size profiles
    router.get(
      "/:userId/measurements",
      this.auth,
      this.controller.getMeasurements.bind(this.controller)
    );

    router.get(
      "/:userId/wishlists",
      this.controller.getAllWishlists.bind(this.controller)
    );

     //delete user wishlist
     router.delete(
      "/:userId/wishlists/:wishlistId",
      this.controller.deleteOneWishlist.bind(this.controller)
    );

    //insert one size profile
    router.post(
      "/:userId/measurements",
      this.auth,
      this.controller.insertOneMeasurement.bind(this.controller)
    );

    //delete one size profile
    router.delete(
      "/:userId/measurements/:measurementId",
      this.auth,
      this.controller.deleteOneMeasurement.bind(this.controller)
    );

    //edit size profile
    router.put(
      "/:userId/:measurementId",
      this.auth,
      this.controller.editMeasurement.bind(this.controller)
    );

    return router;
  }
}

module.exports = UsersRouter;
