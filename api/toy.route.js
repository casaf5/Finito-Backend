const toyService=require('../services/toy-service.js')
const express=require('express')
const router=express.Router()
module.exports=router

// LIST

router.get('/',(req,res)=>{
    toyService.query()
    .then(toys=>{
        res.json(toys)
    })
})
// GET SINGLE ITEM

router.get('/:id',(req,res)=>{
    const toyId=req.params.id
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
    const toyId=req.params.id
    toyService.save(toyId)
    .then((toy)=>{
        res.json('Saved Toy', toy)
    })
})

//ADD


router.put('/',(req,res)=>{
    const toy=req.body
    toyService.save(toy)
    .then((toy)=>{
        res.json('Saved Toy', toy)
    })
})
