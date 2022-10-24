const BaseController = require("./baseController");
const { v4: uuidv4 } = require("uuid");

class UsersController extends BaseController {
  constructor(model, measurementModel) {
    super(model);
    this.measurementModel = measurementModel;
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
      const measurementProfile = await this.measurementModel.findByPk(
        measurementId
      );

      measurementProfile.set({
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
      await measurementProfile.save();
      return res.json(measurementProfile);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = UsersController;
