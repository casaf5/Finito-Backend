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
  const sortBy=filterBy.sort==='name'? 'name':'price'
  const sort={[sortBy]:1}
  const creteria = _buildCreteria(filterBy);
  const collection = await dbService.getCollection("toy");
  try {
    const toys = await collection.find(creteria).sort(sort).toArray();

    return toys;
  } catch (err) {
    console.log("Problem getting Toys From Server...");
    throw err;
  }
}

async function remove(id) {
  const collection = await dbService.getCollection("toy");
  try {
    await collection.deleteOne({ _id: ObjectId(id) });
  } catch (err) {
    console.log("Problem Removing TOY...");
    throw err;
  }
}

async function getById(id) {
  const collection = await dbService.getCollection("toy");
  try {
    const toy = collection.findOne({ _id: ObjectId(id) });
    return toy;
  } catch (err) {
    console.log("Err,Cant find toy...");
    throw err;
  }
}

async function update(toy) {
  const collection = await dbService.getCollection("toy");
  toy._id = ObjectId(toy._id);
  try {
    await collection.replaceOne({ _id: toy._id }, { $set: toy });
    return toy;
  } catch (err) {
    console.log(`Problem Updating toy ID: ${toy._id}`);
    throw err;
  }
}

async function add(toy) {
  const collection = await dbService.getCollection("toy");
  try {
    await collection.insertOne(toy);
    return toy;
  } catch (err) {
    console.log("ERR,Cant Add New Toy ");
    throw err;
  }
}

function _buildCreteria(filterBy) {
  let creteria = {};
  if (filterBy.name !== "") {
    const regexp = new RegExp(`${filterBy.name}`, "i");
    creteria.name = { $regex: regexp };
  }
  if (filterBy.inStock !== "all") creteria.inStock =filterBy.inStock==='true'?true:false;
  if (filterBy.type !== "all") creteria.type = filterBy.type;
  console.log('creteria',creteria)
  return creteria;
}
