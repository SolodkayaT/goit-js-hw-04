const inventory = {
  items: ['Монорельса', 'Фильтр'],
  add(itemName) {
    this.items.push(itemName);
  },
  remove(itemName) {
    this.items = this.items.filter((item) => item !== itemName);
  },
};

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking ${action.name} opeartion on ${itemName}`);
  action(itemName);
};
const addItemsBind = inventory.add.bind(inventory);

invokeInventoryAction.call(inventory, 'Аптечка', addItemsBind);
// Invoking add opeartion on Аптечка

console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']
const removeItemsBind = inventory.remove.bind(inventory);
invokeInventoryAction.call(inventory, 'Фильтр', removeItemsBind);
// Invoking remove opeartion on Фильтр

console.log(inventory.items); // ['Монорельса', 'Аптечка']
