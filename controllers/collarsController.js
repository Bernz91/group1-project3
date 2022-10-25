const BaseController = require("./baseController");

class CollarsController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Insert collar
  async insertOne(req, res) {
    const { collarName, additionalCost, imageOne } = req.body;
    console.log(req.body);
    try {
      const newCollar = await this.model.create({
        collarName: collarName,
        additionalCost: additionalCost,
        imageOne: imageOne,
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
  async editCollar(req, res) {
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
