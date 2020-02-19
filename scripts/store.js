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
  const item = this.findById(id);
  item.checked = !item.checked;
}

/*Create a findAndUpdateName function that accepts id and newName as its arguments.

Use a try/catch block.
Inside the try block, validate the name and then use findById() to fetch the item and update its name.
Inside the catch block, log the following message to the console: Cannot update name: ${error.message}.*/

function findAndUpdateByName(id, newName) {
  try {
    const item = this.findById(id);
    item.name = newName;
  } catch {
    console.log(`Cannot update name ${error.message}`)
  }
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked
};