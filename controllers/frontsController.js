const BaseController = require("./baseController");

class FrontsController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Insert front
  async insertOne(req, res) {
    const { frontName, additionalCost, imageOne } = req.body;
    console.log(req.body);
    try {
      const newFront = await this.model.create({
        frontName: frontName,
        additionalCost: additionalCost,
        imageOne: imageOne,
      });
      return res.json(newFront);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve specific front
  async getOne(req, res) {
    const { frontID } = req.params;
    try {
      const front = await this.model.findByPk(frontID);
      return res.json(front);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Edit specific front
  async editFront(req, res) {
    const { frontId } = req.params;
    try {
      const front = await this.model.findByPk(frontId);
      return res.json(front);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = FrontsController;
