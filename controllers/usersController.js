const BaseController = require("./baseController");
const { v4: uuidv4 } = require("uuid");

class UsersController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Insert user
  async insertOne(req, res) {
    const {
      id,
      first_name,
      last_name,
      email,
      phone,
      email_verification,
      password,
    } = req.body;
    console.log(req.body);
    try {
      const newUser = await this.model.create({
        id: id,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone,
        email_verification: email_verification,
        password: password,
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
    const { userId } = req.params;
    try {
      const user = await this.model.findByPk(userId);
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = UsersController;
