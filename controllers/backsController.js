const BaseController = require("./baseController");

class BacksController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Insert back
  async insertOne(req, res) {
    const { back_name, additional_cost, image_one } = req.body;
    console.log(req.body);
    try {
      const newBack = await this.model.create({
        back_name: back_name,
        additional_cost: additional_cost,
        image_one: image_one,
      });
      return res.json(newBack);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve specific back
  async getOne(req, res) {
    const { backID } = req.params;
    try {
      const back = await this.model.findByPk(backID);
      return res.json(back);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Edit specific back
  async editBack(req, res) {
    const { backId } = req.params;
    try {
      const back = await this.model.findByPk(backId);
      return res.json(back);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = BacksController;
