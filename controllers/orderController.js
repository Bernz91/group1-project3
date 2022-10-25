const BaseController = require("./baseController");

class OrderController extends BaseController {
  constructor(model, order_detailModel) {
    super(model);
    this.order_detailModel = order_detailModel;
  }

  // Insert new order details
  async insertOne(req, res) {
    const {
      paymentId,
      userId,
      quantity,
      subtotal,
      shippingFee,
      total,
      status,
    } = req.body;
    console.log(req.body);
    try {
      const newOrder = await this.model.create({
        paymentId: paymentId,
        userId: userId,
        quantity: quantity,
        subtotal: subtotal,
        shippingFee: shippingFee,
        total: total,
        status: status,
      });
      return res.json(newOrder);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // retrieve all orders for specific userID
  async getAllOrders(req, res) {
    const { userId } = req.params;
    try {
      const allOrders = await this.model.findAll({
        where: {
          userId: userId,
        },
      });
      return res.json(allOrders);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // retrieve all order details for specific userID
  async getOneOrderDetail(req, res) {
    const { orderId } = req.params;
    try {
      const orderDetail = await this.order_detailModel.findByPk({
        where: {
          orderId: orderId,
        },
      });
      return res.json(orderDetail);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve specific order details
  //   async getOne(req, res) {
  //     const { orderID } = req.params;
  //     try {
  //       const orderDetail = await this.model.findByPk(orderID);
  //       return res.json(orderDetail);
  //     } catch (err) {
  //       return res.status(400).json({ error: true, msg: err });
  //     }
  //   }

  // Edit specific order
  async editOrderDetail(req, res) {
    const { orderID } = req.params;
    try {
      const orderDetail = await this.model.findByPk(orderID);
      return res.json(orderDetail);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = OrderController;
