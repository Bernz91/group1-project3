const BaseController = require("./baseController");

class CollarsController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Insert collar
  async insertOne(req, res) {
    const { collar_name, additional_cost, image_one } = req.body;
    console.log(req.body);
    try {
      const newCollar = await this.model.create({
        collar_name: collar_name,
        additional_cost: additional_cost,
        image_one: image_one,
      });
      return res.json(newCollar);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve specific collar
  async getOne(req, res) {
    const { collarID } = req.params;
    try {
      const collar = await this.model.findByPk(collarID);
      return res.json(collar);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Edit specific collar
  async editFabric(req, res) {
    const { collarId } = req.params;
    try {
      const collar = await this.model.findByPk(collarId);
      return res.json(collar);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = CollarsController;
