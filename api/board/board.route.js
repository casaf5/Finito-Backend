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

<<<<<<< HEAD
router.get('/',getBoards)
router.get('/:id',getBoard)
router.delete('/:id',removeBoard)
router.put('/:id',updateBoard)
router.post('/',addBoard)

module.exports=router
=======
router.get("/", getBoards);
router.get("/:id", getBoard);
router.delete("/:id", removeBoard);
router.put("/:id", updateBoard);
router.post("/", addBoard);
>>>>>>> 800de3e807b66356a0f70f812db67492bf918f49

module.exports = router;
