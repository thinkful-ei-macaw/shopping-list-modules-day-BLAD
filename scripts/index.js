import shoppingList from './shopping-list.js';
import store from './store.js';
import item from './item.js';

const main = function () {
  //paste test codes here
  shoppingList.bindEventListeners();
  shoppingList.render();
};



$(main);