const BaseController = require("./baseController");
const { v4: uuidv4 } = require("uuid");
const fabric = require("../db/models/fabric");

class UsersController extends BaseController {
  constructor(
    model,
    measurementModel,
    wishlistModel,
    fabricModel,
    cuffModel,
    collarModel,
    backModel,
    frontModel,
    pocketModel
  ) {
    super(model);
    this.wishlistModel = wishlistModel;
    this.measurementModel = measurementModel;
    this.fabricModel = fabricModel;
    this.cuffModel = cuffModel;
    this.collarModel = collarModel;
    this.backModel = backModel;
    this.frontModel = frontModel;
    this.pocketModel = pocketModel;
  }

  // Insert user
  async insertOne(req, res) {
    const { id, email } = req.body;
    console.log(req.body);
    try {
      const newUser = await this.model.create({
        id: id,
        email: email,
      });
      return res.json(newUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve specific user
  async getOne(req, res) {
    const { userId } = req.params;
    try {
      const user = await this.model.findByPk(userId);
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //find all wish lists of a user
  // async getAllWishlists(req, res) {
  //   console.log("tried...");
  //   const { userId } = req.params;
  //   try {
  //     const wishes = await this.wishlistModel.findAll({
  //       where: { userId: userId },
  //     });
  //     console.log(wishes);
  //     return res.json(wishes);
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // }

  async getAllWishlists(req, res) {
    // console.log("tried...");
    const { userId } = req.params;
    try {
      const wishes = await this.wishlistModel.findAll({
        where: { userId: userId },
        include: [
          this.fabricModel,
          this.cuffModel,
          this.collarModel,
          this.backModel,
          this.frontModel,
          this.pocketModel,
        ],
      });
      console.log(wishes);
      return res.json(wishes);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Delete wishlist for specific user
  async deleteOneWishlist(req, res) {
    const { userId, wishlistId } = req.params;
    try {
      const deletedWishlist = await this.wishlistModel.destroy({
        where: {
          id: wishlistId,
          userId: userId,
        },
      });
      return res.json(deletedWishlist);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve specific user measurement
  async getOneMeasurement(req, res) {
    const { userId } = req.params;
    try {
      const userMeasurement = await this.measurementModel.findByPk({
        where: {
          userId: userId,
        },
      });
      return res.json(userMeasurement);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve specific user measurement
  async getAllMeasurements(req, res) {
    const { userId } = req.params;
    try {
      const allMeasurements = await this.measurementModel.findAll({
        where: {
          userId: userId,
        },
      });
      return res.json(allMeasurements);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Edit specific user
  async editUser(req, res) {
    const { firstName, lastName, phone, shippingAddress } = req.body;
    const { userId } = req.params;
    console.log(req.body);
    try {
      const user = await this.model.findByPk(userId);

      user.set({
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        shippingAddress: shippingAddress,
      });
      await user.save();
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Insert measurement profile
  async insertOneMeasurement(req, res) {
    const { userId } = req.params;
    const {
      categoryByUser,
      measurementType,
      collar,
      shoulders,
      chest,
      waist,
      sleevesLength,
      sleevesWidth,
      elbow,
      leftCuff,
      rightCuff,
      shirtLength,
    } = req.body;
    console.log(req.body);
    try {
      const newMeasurement = await this.measurementModel.create({
        userId: userId,
        categoryByUser: categoryByUser,
        measurementType: measurementType,
        collar: collar,
        shoulders: shoulders,
        chest: chest,
        waist: waist,
        sleevesLength: sleevesLength,
        sleevesWidth: sleevesWidth,
        elbow: elbow,
        leftCuff: leftCuff,
        rightCuff: rightCuff,
        shirtLength: shirtLength,
      });
      return res.json(newMeasurement);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve all measurements for specific user
  async getMeasurements(req, res) {
    const { userId } = req.params;
    try {
      const measurementProfiles = await this.measurementModel.findAll({
        where: {
          userId: userId,
        },
      });
      return res.json(measurementProfiles);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Delete specific measurement for specific user
  async deleteOneMeasurement(req, res) {
    const { userId, measurementId } = req.params;
    try {
      const deletedSize = await this.measurementModel.destroy({
        where: {
          id: measurementId,
          userId: userId,
        },
      });
      return res.json(deletedSize);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Edit specific measurementProfile
  async editMeasurement(req, res) {
    const { measurementId } = req.params;
    const {
      categoryByUser,
      measurementType,
      collar,
      shoulders,
      chest,
      waist,
      sleevesLength,
      sleevesWidth,
      elbow,
      leftCuff,
      rightCuff,
      shirtLength,
    } = req.body;
    console.log(req.body);
    try {
      const measurementProfile = await this.measurementModel.findByPk(
        measurementId
      );

      measurementProfile.set({
        categoryByUser: categoryByUser,
        measurementType: measurementType,
        collar: collar,
        shoulders: shoulders,
        chest: chest,
        waist: waist,
        sleevesLength: sleevesLength,
        sleevesWidth: sleevesWidth,
        elbow: elbow,
        leftCuff: leftCuff,
        rightCuff: rightCuff,
        shirtLength: shirtLength,
      });
      await measurementProfile.save();
      return res.json(measurementProfile);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = UsersController;
