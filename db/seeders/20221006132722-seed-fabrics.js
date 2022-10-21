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
            "Looser weave, lighter in weight but not to the point that structure is compromised.",
          selling_price: 189,
          style: ["Casual", "Smart Casual"],
          colour: ["Blue", "White"],
          material: ["100% Cotton", "Cotton"],
          pattern: ["Stripes"],
          image_one:
            "https://www.editsuits.com/wp-content/uploads/2020/05/ES_BC_N464A_1-scaled.jpg",
          image_two:
            "https://www.editsuits.com/wp-content/uploads/2020/05/ES_BC_N464A_2-scaled.jpg",
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
            "https://i.ebayimg.com/images/g/FKIAAOSwSzdgjMuR/s-l500.jpg",
          image_two:
            "https://i.ebayimg.com/images/g/I0kAAOSwEldgjMuR/s-l1600.jpg",
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
