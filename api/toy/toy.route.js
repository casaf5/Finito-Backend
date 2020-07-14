const express=require('express')
const {getToy,getToys,removeToy,updateToy,addToy}=require('./toy.controller')
const {requireAuth,requireAdmin}  = require('../../middlewares/requireAuth.middleware')
const router=express.Router()

router.get('/',getToys)
router.get('/:id',getToy)
router.delete('/:id',requireAuth,requireAdmin,removeToy)
router.put('/:id',requireAuth,requireAdmin,updateToy)
router.post('/',requireAuth,requireAdmin,addToy)

module.exports=router

