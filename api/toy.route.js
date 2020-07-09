const toyService=require('../services/toy-service.js')
const express=require('express')
const { json } = require('body-parser')
const router=express.Router()
module.exports=router

// LIST

router.get('/',(req,res)=>{
   const filterBy=req.query
    toyService.query(filterBy)
    .then(toys=>{
        res.json(toys)
    })
})
// GET SINGLE ITEM

router.get('/:id',(req,res)=>{
    const toyId=req.params.id
    console.log('toyId',toyId)
    toyService.getById(toyId)
    .then(toy=>{
        res.json(toy)
    })
})

// REMOVE


router.delete('/:id',(req,res)=>{
    const toyId=req.params.id
    toyService.remove(toyId)
    .then(()=>{
        res.json('Item Removed')
    })
})

//UPDATE

router.put('/:id',(req,res)=>{
    const toy=req.body
    toyService.save(toy)
    .then(savedToy=>res.json(savedToy))
    .catch(err=>res.end("Problem Updating Toy",err))
})

//ADD

router.post('/',(req,res)=>{
    const toy=req.body
    toyService.save(toy)
    .then(savedToy=>res.json(savedToy))
    .catch(err=>res.end("Problem Saving",err))
})
