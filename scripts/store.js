
import item from './item.js';

const items = [];
const hideCheckedItems = false;

function findById(id) {
  return this.items.find(item => item.id === id);
}

function addItem(name) {
  try{
    item.validateName(name);
    this.items.push(item.create(name));
  } catch(err){
    throw new TypeError(`Cannot add item: ${err.message}`);
  }
}

function findAndToggleChecked(id) {
  const foundItem = this.findById(id);
  foundItem.checked = !foundItem.checked;
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName(newName);
    const foundItem = this.findById(id);
    foundItem.name = newName;
  } catch(err){
    throw new TypeError(`Cannot update name: ${err.message}`);
  }
}

function findAndDelete(id) {
  const index = this.items.findIndex(item => item.id === id);
  this.items.splice(index, 1);
}

function toggleCheckedFilter() {
  this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};