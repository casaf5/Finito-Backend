const express = require("express");
const {getBoards,getBoard,removeBoard,updateBoard,addBoard} = require("./board.controller");
const {requireAuth,requireAdmin} = require("../../middlewares/requireAuth.middleware");
const router = express.Router();

router.get('/',getBoards)
router.get('/:id',getBoard)
router.delete('/:id',removeBoard)//add authintication
router.put('/:id',updateBoard) //add authintication
router.post('/',addBoard)//add authintication

