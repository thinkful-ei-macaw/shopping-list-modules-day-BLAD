'use strict';
import item from './item.js';

const items = [];
const hideCheckedItems = false;

function findById(id) {
  return this.items.find(item => item.id === id);
}

function addItem(name) {
  try {
    const nameFound = this.items.find(item => item.name == name);
    if(nameFound){
      throw new TypeError();
    }
    this.items.push({
      id: cuid(),
      name: name
    })
  } catch (e) {
    throw new TypeError('Item already exists.');
  }
}

function findAndToggleChecked(id) {
  let foundItem = this.findById(id);
  foundItem.checked = !foundItem.checked;
}

function findAndUpdateByName(id, newName) {
  try {
    item.validateName(newName);
    let foundItem = this.findById(id);
    foundItem.name = newName;
  } catch(err) {
    throw new TypeError(`Cannot update name ${err.message}`);
  }
}

function findAndDelete(id) {
  const index = this.items.findIndex(item => item.id === id);
  this.items.splice(index, 1);
}

const toggleCheckedFilter = function () {
  store.hideCheckedItems = !this.hideCheckedItems;
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateByName,
  findAndDelete,
  toggleCheckedFilter
};