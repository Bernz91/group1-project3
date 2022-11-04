"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "fabrics",
      [
        {
          fabricName: "Forest Green Lightweight Oxford Shirt",
          productQuantity: 100,
          description:
            "Looser weave, lighter in weight but not to the point that structure is compromised. This oxford shirt is soft and comfortable, and would serve you well for warmer days. Comes in a darker shade of green that's equal parts subtle and elegant.",
          cost: 189,
          style: ["semi-formal"],
          colour: ["Green"],
          material: ["Cotton"],
          pattern: ["No Pattern"],
          imageOne:
            "https://cdn.shopify.com/s/files/1/0335/1203/0343/products/CSCSPFBOXF0007A.jpg?v=1667441227",
          imageTwo: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fabricName: "Blue Denim Twill Shirt",
          productQuantity: 100,
          description:
            "This midweight denim twill shirt has the perfect shade of blue with a very slight sheen, and so you can dress it up or down depending on your mood and the occasion. It also has a very soft and smooth hand, which translates to all day comfort for you. Go with our Classic Buttondown collar for a relaxed look, or our spread collar if you'd like to wear this shirt with a tie.",
          cost: 199,
          style: ["casual"],
          colour: ["Blue"],
          material: ["Denim"],
          pattern: ["No Pattern"],
          imageOne:
            "https://cdn.shopify.com/s/files/1/0335/1203/0343/products/CJCM0128DBUA.jpg?v=1667441147",
          imageTwo:
            "https://cdn.shopify.com/s/files/1/0335/1203/0343/products/CJCM0128DBUC.jpg?v=1667441147",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fabricName: "Albini Steel Blue Multi Stripes Shirt",
          productQuantity: 38,
          description:
            "If you're looking to build up your wardrobe with versatile pieces for both formal and casual settings, consider this twill shirt with a hatching effect and a subtle multi-stripes pattern. This shirt also comes with some natural stretch, which guarantees you comfort all day long. Act fast because this is an exclusive seasonal fabric from Albini.",
          cost: 269,
          style: ["semi-formal"],
          colour: ["Blue"],
          material: ["100% Cotton"],
          pattern: ["Stripes"],
          imageOne:
            "https://cdn.shopify.com/s/files/1/0335/1203/0343/products/CA409875013A.jpg?v=1667441254",
          imageTwo: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fabricName: "Dark Green Wide Block Stripes Shirt",
          productQuantity: 22,
          description:
            "Looser weave, lighter in weight but not to the point that structure is compromised. This oxford shirt is soft and comfortable, and would serve you well for warmer days. This shirt features fun and bold stripes that is perfect for those casual weekends or a day at the beach.",
          cost: 189,
          style: ["semi-formal"],
          colour: ["Green"],
          material: ["100% Cotton"],
          pattern: ["Stripes"],
          imageOne:
            "https://cdn.shopify.com/s/files/1/0335/1203/0343/products/CSCSPFBOXF0012A.jpg?v=1667441209",
          imageTwo: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fabricName: "Speckled Cream Lightweight Oxford Shirt",
          productQuantity: 51,
          description:
            "Looser weave, lighter in weight but not to the point that structure is compromised. This oxford shirt is soft and comfortable, and would serve you well for warmer days. Come close enough and you'll see tiny specks that dot the shirt, stand at a distance and you'll see a plain cream shirt.",
          cost: 189,
          style: ["semi-formal"],
          colour: ["Cream"],
          material: ["100% Cotton"],
          pattern: ["No Patttern"],
          imageOne:
            "https://cdn.shopify.com/s/files/1/0335/1203/0343/products/CSCSPFBOXF0009A_2da4fe26-5dd2-427d-9551-66f9faa248d1.jpg?v=1667441217",
          imageTwo: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fabricName: "Thomas Mason X WM Brown Target Plaid Shirt",
          productQuantity: 24,
          description:
            "One final shirt left! We are honoured to be 1 of 13 brands in the world to receive these exclusive fabrics in limited lengths. Thomas Mason has created two limited edition fabrics in collaboration with Matt Hranek, founder of the WM Brown Project. The designers from Thomas Mason team took inspiration from WM Brown archery target logo and Matt Hranek’s favourite drink – the Negroni. The result is a plaid that takes its colours from the target and a stripe that perfectly matches the hue of a well-mixed Negroni. Don't miss the chance to own these exclusive pieces! Additional Information",
          cost: 289,
          style: ["casual"],
          colour: ["Mixed"],
          material: ["100% Cotton"],
          pattern: ["Chekcs"],
          imageOne:
            "https://cdn.shopify.com/s/files/1/0335/1203/0343/products/CT27915517A.jpg?v=1667441297",
          imageTwo: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fabricName: "Textured Light Blue Chambray Shirt",
          productQuantity: 34,
          description:
            "This lightweight chambray shirt is finely textured and comes with a smooth hand. Looks great under a jacket and equally at ease with a denim or cotton trousers. Try going with our Buttondown collars to acheive a soft and relaxed collar roll.",
          cost: 199,
          style: ["semi-formal"],
          colour: ["Blue"],
          material: ["100% Cotton"],
          pattern: ["No Pattern"],
          imageOne:
            "https://cdn.shopify.com/s/files/1/0335/1203/0343/products/CI2135A.jpg?v=1667441169",
          imageTwo: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fabricName: "White/Blue Thin Stripes Shirt",
          productQuantity: 22,
          description:
            "If you're looking for a business shirt with just a light touch of flair, this thin striped shirt will fit the bill. With a predominant white base, this shirt will be easy to pair with the rest of your outfit. Midweight (142g) with a smooth hand, this shirt is suitable for the cooler season.",
          cost: 199,
          style: ["semi-formal"],
          colour: ["Blue"],
          material: ["100% Cotton"],
          pattern: ["Stripes"],
          imageOne:
            "https://cdn.shopify.com/s/files/1/0335/1203/0343/products/CJ4S190752E.jpg?v=1667441187",
          imageTwo: "",
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
