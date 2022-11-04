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
    //get all wishlists
    router.get(
      "/:userId/wishlists",
      this.auth,
      this.controller.getAllWishlists.bind(this.controller)
    );

    //delete a user wishlist
    router.delete(
      "/:userId/wishlists/:wishlistId",
      this.auth,
      this.controller.deleteOneWishlist.bind(this.controller)
    );

    //edit a user wishlist
    router.put(
      "/:userId/wishlists/:wishlistId",
      this.controller.editOneWishlist.bind(this.controller)
    );

    //delete a user all wishlists
    router.delete(
      "/:userId/wishlists/",
      this.auth,
      this.controller.deleteAllWishlist.bind(this.controller)
    );

    //get all items in specific user's shopping cart
    router.get(
      "/:userId/shoppingCart",
      this.auth,
      this.controller.getAllItems.bind(this.controller)
    );

    //delete an item in specific user's shopping cart
    router.delete(
      "/:userId/shoppingCart/:shoppingCartId",
      this.auth,
      this.controller.deleteOneItem.bind(this.controller)
    );

    //edit an item in specific user's shopping cart
    router.put(
      "/:userId/shoppingCart/:shoppingCartId",
      this.controller.editOneItem.bind(this.controller)
    );

    //delete all items in specific user's shopping cart
    router.delete(
      "/:userId/shoppingCart/",
      this.auth,
      this.controller.deleteAllItems.bind(this.controller)
    );

    return router;
  }
}

module.exports = UsersRouter;
