"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "fabrics",
      [
        {
          fabric_name: "Sky Blue Wide Block Stripes Shirt",
          product_quantity: 10,
          description:
            "Looser weave, lighter in weight but not to the point that structure is compromised. This oxford shirt is soft and comfortable, and would serve you well for warmer days. This shirt features fun and bold stripes that is perfect for those casual weekends or a day at the beach.",
          selling_price: 189,
          style: ["Casual", "Smart Casual"],
          colour: ["Blue", "White"],
          material: ["100% Cotton", "Cotton"],
          pattern: ["Stripes"],
          image_one:
            "https://cdn.shopify.com/s/files/1/0335/1203/0343/products/CSCSPFBOXF0010A_f7d7cd90-9cc5-4024-a04a-308d6d3d82c6.jpg?v=1664534456",
          image_two:
            "https://cdn.shopify.com/s/files/1/0335/1203/0343/products/CSCSPFBOXF0010F_c3eeb843-5f84-4cd8-ae3e-c6b1d7637213.jpg?v=1664534456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fabric_name: "Dark Green Wide Block Stripes Shirt",
          product_quantity: 15,
          description:
            "Looser weave, lighter in weight but not to the point that structure is compromised. This oxford shirt is soft and comfortable, and would serve you well for warmer days. This shirt features fun and bold stripes that is perfect for those casual weekends or a day at the beach.",
          selling_price: 189,
          style: ["Casual", "Smart Casual"],
          colour: ["Green", "White"],
          material: ["100% Cotton", "Cotton"],
          pattern: ["Stripes"],
          image_one:
            "https://cdn.shopify.com/s/files/1/0335/1203/0343/products/CSCSPFBOXF0012A_760b7628-df6e-4d7b-8807-7ece3f65dea5.jpg?v=1664534466",
          image_two:
            "https://cdn.shopify.com/s/files/1/0335/1203/0343/products/CSCSPFBOXF0012F_a5abf248-125c-4af3-b5e1-7ba81deed80c.jpg?v=1664534466",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("fabrics", null, {});
  },
};
