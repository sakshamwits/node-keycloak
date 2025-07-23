const express = require("express");
const router = express.Router();

const keycloak = require("../middlewares/keycloak.js");

const menuItems = [
  {
    name: "Croissant",
    price: "$1",
    onMenu: true,
  },
  {
    name: "Latte",
    price: "$5",
    onMenu: true,
  },
  {
    name: "Roti Canai",
    price: "$0.50",
    onMenu: true,
  },
  {
    name: "Hot Chocolate",
    price: "$5",
    onMenu: false,
  },
  {
    name: "Satay",
    price: "$8",
    onMenu: false,
  },
  {
    name: "Pad Thai",
    price: "$7",
    onMenu: false,
  },
];

router.get(
  "/menu-items",
  keycloak.protect("realm:admin"),
  async (req, res, next) => {
    try {
      let filtered = menuItems.filter((item) => item.onMenu === true);

      res.json(filtered);
    } catch (error) {
      return next(error);
    }
  }
);

module.exports = router;
