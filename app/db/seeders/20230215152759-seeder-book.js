"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "David Bach : Factor Latte",
          author:"David Bach",
          image: "/uploads/image 1.png",
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '"Selena" dan  "Nebula"',
          author:"TERE LIYE",
          image: "/uploads/image 2.png",
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pelukis Bisu (The Silent Patient)",
          author:"Alex Michaelides",
          image: "/uploads/iamage 3.png",
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Kecamuk Darah (Troubled Blood)",
          author:"Robert Galbraith",
          image: "/uploads/iamage 4.png",
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Kitab Kawin (Edisi Cover Baru)",
          author:"Laskmi Pemuntjak",
          image: "/uploads/iamage 5.png",
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Salvation of a Saint",
          author:"Keigo Higashino",
          image: "/uploads/iamage 6.png",
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Books", null, {});
  },
};
