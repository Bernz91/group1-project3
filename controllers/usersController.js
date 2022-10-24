const BaseController = require("./baseController");
const { v4: uuidv4 } = require("uuid");

class UsersController extends BaseController {
  constructor(model, sizeModel, wishlistModel) {
    super(model);
    this.sizeModel = sizeModel;
    this.wishlistModel = wishlistModel;
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
  async getAllWishlists(req, res) {
    console.log("tried...");
    const { userId } = req.params;
    try {
      const wishes = await this.wishlistModel.findAll({
        where: {
          userId: userId,
        },
      });
      return res.json(wishes);
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

  // Insert size profile
  async insertOneSize(req, res) {
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
      const newSize = await this.sizeModel.create({
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
      return res.json(newSize);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve all sizes for specific user
  async getSizes(req, res) {
    const { userId } = req.params;
    try {
      const sizeProfiles = await this.sizeModel.findAll({
        where: {
          userId: userId,
        },
      });
      return res.json(sizeProfiles);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Edit specific sizeProfile
  async editSize(req, res) {
    const { sizeId } = req.params;
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
      const sizeProfile = await this.sizeModel.findByPk(sizeId);

      sizeProfile.set({
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
      await sizeProfile.save();
      return res.json(sizeProfile);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = UsersController;
