const express = require("express");
const router = express.Router();

class WishlistsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    //get all wishlists
    router.get("/wishlists", this.controller.getAll.bind(this.controller));

    //get one wishlist
    router.get("/:wishlistId", this.controller.getOne.bind(this.controller));

    //insert one wishlist
    router.post("/", this.controller.insertOne.bind(this.controller));

    return router;
  }
}

module.exports = WishlistsRouter;
