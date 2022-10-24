const BaseController = require("./baseController");

class OrderDetailsController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Insert new order details
  async insertOne(req, res) {
    const {
      orderId,
      measurementId,
      fabricId,
      collarId,
      cuffId,
      frontId,
      pocketId,
      backId,
      quantity,
      singleprice,
      totalprice,
    } = req.body;
    console.log(req.body);
    try {
      const newOrderDetail = await this.model.create({
        orderId: orderId,
        measurementId: measurementId,
        fabricId: fabricId,
        collarId: collarId,
        cuffId: cuffId,
        frontId: frontId,
        pocketId: pocketId,
        backId: backId,
        quantity: quantity,
        singleprice: singleprice,
        totalprice: totalprice,
      });
      return res.json(newOrderDetail);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve specific order details
  async getOne(req, res) {
    const { orderDetailID } = req.params;
    try {
      const orderDetail = await this.model.findByPk(orderDetailID);
      return res.json(orderDetail);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Edit specific order
  async editOrderDetail(req, res) {
    const { orderDetailID } = req.params;
    try {
      const orderDetail = await this.model.findByPk(orderDetailID);
      return res.json(orderDetail);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = OrderDetailsController;
