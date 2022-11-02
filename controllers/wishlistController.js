const BaseController = require("./baseController");

class WishlistController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Insert new wishlist detail
  async insertOne(req, res) {
    const {
      userId,
      fabricId,
      collarId,
      cuffId,
      frontId,
      pocketId,
      backId,
      measurementId,
    } = req.body;
    console.log(req.body);
    try {
      const newWishlist = await this.model.create({
        userId: userId,
        fabricId: fabricId,
        collarId: collarId,
        cuffId: cuffId,
        frontId: frontId,
        pocketId: pocketId,
        backId: backId,
        measurementId: measurementId,
      });
      return res.json(newWishlist);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //   // retrieve all wishlist for specific userID
  //   async getAllWishlists(req, res) {
  //     const { userId } = req.params;
  //     try {
  //       const allWishes = await this.model.findAll({
  //         where: {
  //           userId: userId,
  //         },
  //       });
  //       return res.json(allWishes);
  //     } catch (err) {
  //       return res.status(400).json({ error: true, msg: err });
  //     }
  //   }

  //   async getAllWishlists(req, res) {
  //     const { userId } = req.params;
  //     try {
  //       const allWishes = await this.model.findAll({ all: true, nested: true });
  //       return res.json(allWishes);
  //     } catch (err) {
  //       return res.status(400).json({ error: true, msg: err });
  //     }
  //   }

  // Retrieve specific wishlist
  async getOne(req, res) {
    const { wishlistId } = req.params;
    try {
      const wishlist = await this.model.findByPk(wishlistId);
      return res.json(wishlist);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //   // Edit specific order
  //   async editOrderDetail(req, res) {
  //     const { orderID } = req.params;
  //     try {
  //       const orderDetail = await this.model.findByPk(orderID);
  //       return res.json(orderDetail);
  //     } catch (err) {
  //       return res.status(400).json({ error: true, msg: err });
  //     }
  //   }
}

module.exports = WishlistController;
