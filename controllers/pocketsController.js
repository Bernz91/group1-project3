const BaseController = require("./baseController");

class PockectsController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Insert pocket
  async insertOne(req, res) {
    const { pocketName, additionalCost, imageOne } = req.body;
    console.log(req.body);
    try {
      const newPocket = await this.model.create({
        pocketName: pocketName,
        additionalCost: additionalCost,
        imageOne: imageOne,
      });
      return res.json(newPocket);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve specific pocket
  async getOne(req, res) {
    const { pocketID } = req.params;
    try {
      const pocket = await this.model.findByPk(pocketID);
      return res.json(pocket);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Edit specific pocket
  async editPocket(req, res) {
    const { pocketId } = req.params;
    try {
      const pocket = await this.model.findByPk(pocketId);
      return res.json(pocket);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = PockectsController;
