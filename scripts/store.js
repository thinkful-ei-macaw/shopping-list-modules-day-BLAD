'use strict';
import item from './item.js';

const items = [];
const hideCheckedItems = false;

function findById(id){
  return this.items.find(item => item.id === id);
}



export default {
  items,
  hideCheckedItems
};