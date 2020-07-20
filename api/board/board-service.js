const dbService = require("../../services/db.service");
const ObjectId = require("mongodb").ObjectId;

module.exports = {
  query,
  getById,
  remove,
  update,
  add,
};

async function query(filterBy) {
  // const sortBy=filterBy.sort==='name'? 'name':'price'
  // const sort={[sortBy]:1}
  // const creteria = _buildCreteria(filterBy);
  const collection = await dbService.getCollection("board");
  try {
    const boards = await collection.find().toArray();
    console.log('found board:',boards)
    return boards;
  } catch (err) {
    console.log("Problem getting Boards From Server...");
    throw err;
  }
}

async function remove(id) {
  const collection = await dbService.getCollection("board");
  try {
    await collection.deleteOne({ _id: ObjectId(id) });
  } catch (err) {
    console.log("Problem Removing Board...");
    throw err;
  }
}

async function getById(id) {
  const collection = await dbService.getCollection("board");
  try {
    const toy = collection.findOne({ _id: ObjectId(id) });
    return toy;
  } catch (err) {
    console.log("Err,Cant find Board...");
    throw err;
  }
}

async function update(board) {
  const collection = await dbService.getCollection("board");
  board._id = ObjectId(board._id);
  try {
    await collection.replaceOne({ _id: board._id }, { $set: board });
    return board;
  } catch (err) {
    console.log(`Problem Updating board ID: ${board._id}`);
    throw err;
  }
}

async function add(board) {
  const collection = await dbService.getCollection("board");
  try {
    await collection.insertOne(board);
    return board;
  } catch (err) {
    console.log("ERR,Cant Add New Board ");
    throw err;
  }
}

// function _buildCreteria(filterBy) {
//   let creteria = {};
//   if (filterBy.name !== "") {
//     const regexp = new RegExp(`${filterBy.name}`, "i");
//     creteria.name = { $regex: regexp };
//   }
//   if (filterBy.inStock !== "all") creteria.inStock =filterBy.inStock==='true'?true:false;
//   if (filterBy.type !== "all") creteria.type = filterBy.type;
//   return creteria;
// }