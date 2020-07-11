const fs = require("fs");
const toys = require("../data/toys.json");
const utils = require("./utils");

module.exports = {
  query,
  getById,
  save,
  remove,
};

function query(filterBy) {
  let filteredToys=toys.sort((toyA,toyB)=>{
    return filterBy.sort==='name'? _sortByName(toyA,toyB): toyA.price-toyB.price
  })
  filteredToys=filteredToys.filter(toy=>{
    if(filterBy.name==='') return true
      return toy.name.toLowerCase().includes(filterBy.name.toLowerCase())
  })
  filteredToys=filteredToys.filter(toy=>{
    return (filterBy.type==='all')? true:toy.type===filterBy.type
})
 filteredToys=filteredToys.filter(toy=>{
    return (filterBy.inStock==='all')? true :filterBy.inStock===toy.inStock.toString() 
})
  return Promise.resolve(filteredToys);
}

function remove(id) {
  const idx = toys.findIndex((toy) => toy._id === id);
  if (idx >= 0) {
    toys.splice(idx, 1);
    _saveToysToFile();
    return Promise.resolve();
  }
}

function getById(id) {
  const toy = toys.find((toy) => toy._id === id);
  return Promise.resolve(toy);
}
function save(toy) {
  return toy._id ? _update(toy) : _add(toy);
}
function _update(toy) {
  const idx = toys.findIndex((t) => t._id === toy._id);
  if (idx >= 0) {
    toys.splice(idx, 1, toy);
    _saveToysToFile();
    return Promise.resolve(toy);
  }
  return Promise.reject();
}

function _add(toy) {
  toy._id = utils.genID();
  toy.price=+toy.price
  toy.image=`https://robohash.org/${toy.name}`
  toys.unshift(toy);
  _saveToysToFile();
  return Promise.resolve(toy);
}

function _saveToysToFile() {
  fs.writeFileSync("data/toys.json", JSON.stringify(toys, null, 2));
}

function _sortByName(toyA,toyB){
  var nameA = toyA.name.toUpperCase(); 
  var nameB = toyB.name.toUpperCase(); 
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
}
