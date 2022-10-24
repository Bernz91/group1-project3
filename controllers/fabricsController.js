const BaseController = require("./baseController");

class FabricsController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Insert fabric
  async insertOne(req, res) {
    const {
      fabricName,
      productQuantity,
      description,
      sellingPrice,
      style,
      colour,
      material,
      pattern,
      imageOne,
      imageTwo,
    } = req.body;
    console.log(req.body);
    try {
      const newFabric = await this.model.create({
        fabricName: fabricName,
        productQuantity: productQuantity,
        description: description,
        sellingPrice: sellingPrice,
        style: style,
        colour: colour,
        material: material,
        pattern: pattern,
        imageOne: imageOne,
        imageTwo: imageTwo,
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
