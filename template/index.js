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
    this.items = this.items.filter(item => item.name !== nome);
  }

  billTotal = () => {
    var priceTotal = this.items.reduce(function(acc,item){
      return acc += parseFloat(item.price);   
    },0);
    return priceTotal;
  }

  render = () => {
    let billContainer = document.getElementById('items');
    billContainer.innerHTML = '';
    this.items.map(item => {
      let row = document.createElement('tr');
      let foodName = document.createElement('td');
      let foodPrice = document.createElement('td');
      foodName.innerHTML = item.name;
      foodName.addEventListener('click', function(){
        var result = window.confirm('Deseja excluir o ' + item.name + '?');
        if (result == true){
          bill.removeItem(item.name);
          bill.render();
        }
      });
      foodPrice.innerHTML = 'R$ ' + item.price;

      row.append(foodName);
      row.append(foodPrice);
      billContainer.append(row);
    })

    document.getElementById('total').innerHTML = 'R$ ' + bill.billTotal().toFixed(2);
  }
}

var bill = new Bill();

function init() {
  document.getElementsByTagName('body')[0].style.display = 'flex';
}

function submitAdd() {
  var newName = document.getElementById("newName");
  var newPrice = document.getElementById("newPrice");

  if (newName.value == "" | newPrice.value == "") {
    document.getElementById('invalid').style.display = 'block';
  } else {
    document.getElementById('invalid').style.display = 'none';
    bill.addItem(new Item(newName.value, newPrice.value));
    bill.render();
  }
  
  newName.value = "";
  newPrice.value = "";
}

function printBill() {
  window.print();

  document.getElementById('total').innerHTML = 'R$0,00';  
  while (bill.items.length > 0){
    bill.items.pop();
  }
  bill.render();
}