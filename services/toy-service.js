const fs = require("fs");
const toys = require("../data/toys.json");
const utils = require("./utils");

module.exports = {
  query,
  getById,
  save,
  remove,
};

function query() {
  return Promise.resolve(toys);
}

function remove(id) {
  const idx = toys.findIndex((toy) => toy._id === +id);
  if (idx >= 0) {
    toys.splice(idx, 1);
    _saveToysToFile();
    return Promise.resolve();
  }
}

function getById(id) {
  const toy = toys.find((toy) => toy._id === +id);
  return Promise.resolve(toy);
}
function save(toy) {
  return toy._id ? _update(toy) : _add(toy);
}
function _update(toy) {
  const idx = toys.findIndex((t) => t._id === +toy._id);
  toys.splice(idx, 0, toy);
  return Promise.resolve(toy);
}

function _add(toy) {
  toy._id = utils.genID();
  toys.unshift(toy);
  return Promise.resolve(toy);
}

function _saveToysToFile() {
  fs.writeFileSync("data/toys.json", JSON.stringify(toys, null, 2));
}
