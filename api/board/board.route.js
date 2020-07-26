const express = require("express");
const {
  getBoards,
  getBoard,
  removeBoard,
  updateBoard,
  addBoard,
} = require("./board.controller");
const {
  requireAuth,
  requireAdmin,
} = require("../../middlewares/requireAuth.middleware");
const router = express.Router();


module.exports = router;
