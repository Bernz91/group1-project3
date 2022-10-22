const BaseController = require("./baseController");
const { v4: uuidv4 } = require("uuid");

class UsersController extends BaseController {
  constructor(model, sizeModel) {
    super(model);
    this.sizeModel = sizeModel;
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

  // Retrieve specific user measurement
  async getOneMeasurement(req, res) {
    const { userId } = req.params;
    try {
      const userMeasurement = await this.measurementModel.findByPk({
        where: {
          user_uuid: userId,
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
          user_uuid: userId,
        },
      });
      return res.json(allMeasurements);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Edit specific user
  async editUser(req, res) {
    const { first_name, last_name, phone, shipping_address } = req.body;
    const { userId } = req.params;
    console.log(req.body);
    try {
      const user = await this.model.findByPk(userId);

      user.set({
        first_name: first_name,
        last_name: last_name,
        phone: phone,
        shipping_address: shipping_address,
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
      category_by_user,
      measurement_type,
      collar,
      shoulders,
      chest,
      waist,
      sleeves_length,
      sleeves_width,
      elbow,
      left_cuff,
      right_cuff,
      shirt_length,
    } = req.body;
    console.log(req.body);
    try {
      const newSize = await this.sizeModel.create({
        user_id: userId,
        category_by_user: category_by_user,
        measurement_type: measurement_type,
        collar: collar,
        shoulders: shoulders,
        chest: chest,
        waist: waist,
        sleeves_length: sleeves_length,
        sleeves_width: sleeves_width,
        elbow: elbow,
        left_cuff: left_cuff,
        right_cuff: right_cuff,
        shirt_length: shirt_length,
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
          user_id: userId,
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
      category_by_user,
      measurement_type,
      collar,
      shoulders,
      chest,
      waist,
      sleeves_length,
      sleeves_width,
      elbow,
      left_cuff,
      right_cuff,
      shirt_length,
    } = req.body;
    console.log(req.body);
    try {
      const sizeProfile = await this.sizeModel.findByPk(sizeId);

      sizeProfile.set({
        category_by_user: category_by_user,
        measurement_type: measurement_type,
        collar: collar,
        shoulders: shoulders,
        chest: chest,
        waist: waist,
        sleeves_length: sleeves_length,
        sleeves_width: sleeves_width,
        elbow: elbow,
        left_cuff: left_cuff,
        right_cuff: right_cuff,
        shirt_length: shirt_length,
      });
      await sizeProfile.save();
      return res.json(sizeProfile);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = UsersController;
