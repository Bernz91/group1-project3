"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "fabrics",
      [
        {
          fabricName: "Sky Blue Wide Block Stripes Shirt",
          productQuantity: 10,
          description:
            "Looser weave, lighter in weight but not to the point that structure is compromised.",
          cost: 189,
          style: ["Casual", "Smart Casual"],
          colour: ["Blue", "White"],
          material: ["100% Cotton", "Cotton"],
          pattern: ["Stripes"],
          imageOne:
            "https://www.editsuits.com/wp-content/uploads/2020/05/ES_BC_N464A_1-scaled.jpg",
          imageTwo:
            "https://www.editsuits.com/wp-content/uploads/2020/05/ES_BC_N464A_2-scaled.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fabricName: "Dark Green Wide Block Stripes Shirt",
          productQuantity: 15,
          description:
            "Looser weave, lighter in weight but not to the point that structure is compromised.",
          cost: 189,
          style: ["Casual", "Smart Casual"],
          colour: ["Green", "White"],
          material: ["100% Cotton", "Cotton"],
          pattern: ["Stripes"],
          imageOne:
            "https://i.ebayimg.com/images/g/FKIAAOSwSzdgjMuR/s-l500.jpg",
          imageTwo:
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
