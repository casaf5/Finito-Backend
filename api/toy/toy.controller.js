const toyService = require("./toy-service.js");
const logger = require("../../services/logger.service");

module.exports = {
  getToys,
  getToy,
  removeToy,
  updateToy,
  addToy,
};

// LIST
async function getToys(req, res) {
  const filterBy = req.query;
  const toys = await toyService.query(filterBy);
  logger.debug(toys);
  res.json(toys);
}

//ONE ITEM
async function getToy(req, res) {
  const id = req.params.id;
  const toy = await toyService.getById(id);
  logger.debug(toy);
  res.json(toy);
}

//DELETE

async function removeToy(req, res) {
  const id = req.params.id;
  const toy = await toyService.remove(id);
  res.end();
}
//ADD

async function addToy(req,res){
    const toy=req.body
    const addedToy=await toyService.add(toy)
    res.json(addedToy)
}

//UPDATE


async function updateToy(req,res){
    const toy=req.body
    const updatedToy=await toyService.update(toy)
    res.json(updatedToy)
}
