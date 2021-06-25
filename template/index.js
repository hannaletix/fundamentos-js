class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Bill {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  addItem = item => {
    this.items.push(item);
  }

  removeItem = nome => {
    //TODO
  }

  billTotal = () => {
    //TODO
  }

  render = () => {
    //UNFINISHED
    let billContainer = document.getElementById('items');
    this.items.map(item => {
      let row = document.createElement('tr');
      let foodName = document.createElement('td');
      let foodPrice = document.createElement('td');
      foodName.innerHTML = item.name;
      foodPrice.innerHTML = 'R$ ' + item.price;

      row.append(foodName);
      row.append(foodPrice);
      billContainer.append(row);
    })
  }
}


var bill = new Bill();

function init() {
  bill.addItem(new Item('croissant', 5.99));
  bill.addItem(new Item('café', 2.99));
  bill.render();
  document.getElementsByTagName('body')[0].style.display = 'flex';
}

function printBill() {
  window.print();
}