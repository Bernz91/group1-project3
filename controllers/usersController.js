const BaseController = require("./baseController");
const { v4: uuidv4 } = require("uuid");

class UsersController extends BaseController {
  constructor(model) {
    super(model);
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
}

module.exports = UsersController;
