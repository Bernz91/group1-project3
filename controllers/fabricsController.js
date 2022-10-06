const BaseController = require("./baseController");

class FabricsController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Insert fabric
  async insertOne(req, res) {
    const {
      fabric_name,
      product_quantity,
      description,
      selling_price,
      style,
      colour,
      material,
      pattern,
      image_one,
      image_two,
    } = req.body;
    console.log(req.body);
    try {
      const newFabric = await this.model.create({
        fabric_name: fabric_name,
        product_quantity: product_quantity,
        description: description,
        selling_price: selling_price,
        style: style,
        colour: colour,
        material: material,
        pattern: pattern,
        image_one: image_one,
        image_two: image_two,
      });
      return res.json(newFabric);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve specific fabric
  async getOne(req, res) {
    const { fabricId } = req.params;
    try {
      const fabric = await this.model.findByPk(fabricId);
      return res.json(fabric);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Edit specific fabric
  async editFabric(req, res) {
    const { fabricId } = req.params;
    try {
      const fabric = await this.model.findByPk(fabricId);
      return res.json(fabric);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = FabricsController;
