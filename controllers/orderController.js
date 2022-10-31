const BaseController = require("./baseController");

class OrderController extends BaseController {
  constructor(
    model,
    userModel,
    measurementModel,
    order_detailModel,
    fabricModel,
    cuffModel,
    collarModel,
    backModel,
    frontModel,
    pocketModel
  ) {
    super(model);
    this.userModel = userModel;
    this.measurementModel = measurementModel;
    this.order_detailModel = order_detailModel;
    this.fabricModel = fabricModel;
    this.cuffModel = cuffModel;
    this.collarModel = collarModel;
    this.backModel = backModel;
    this.frontModel = frontModel;
    this.pocketModel = pocketModel;
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
      shippingAddress,
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
        shippingAddress: shippingAddress,
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
    console.log("tried");
    try {
      const allOrders = await this.model.findAll({
        where: {
          userId: userId,
        },
        include: [
          {
            model: this.order_detailModel,
            include: [
              this.fabricModel,
              this.cuffModel,
              this.collarModel,
              this.backModel,
              this.frontModel,
              this.pocketModel,
              this.measurementModel,
            ],
          },
          // { model: this.measurementModel },
        ],
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

  async insertOrderDetail(req, res) {
    const { orderId } = req.params;
    const {
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
      const newOrderDetail = await this.order_detailModel.create({
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
