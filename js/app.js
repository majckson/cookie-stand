'use strict';

console.log('hello world');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let allStores = [];
let myContainer = document.getElementById('container');
let tbody = document.getElementById('body-rows');
//let cookieTable = document.getElementById('cookie-table');

let tableFooter = document.getElementById('table-footer');

// let myForm = document.getElementById('container');



function Store(name, minimumCustomerEachHour, maximumCustomerEachHour, avgCookiesPerCustomer) {
  this.store = name;
  this.min = minimumCustomerEachHour;
  this.max = maximumCustomerEachHour;
  this.avg = avgCookiesPerCustomer;
  this.cookiesPerHour = [];
  this.dailyStoreTotal = 0;
  allStores.push(this);
}

Store.prototype.randomCustomerEachHour = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

Store.prototype.calcCookiesSoldEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let randomGuest = this.randomCustomerEachHour();
    let hourlyTotal = Math.ceil(randomGuest * this.avg);
    this.cookiesPerHour.push(hourlyTotal);
    this.dailyStoreTotal += hourlyTotal;
  }
};

Store.prototype.render = function () {
  this.calcCookiesSoldEachHour();
  let tr = document.createElement('tr');


  let th = document.createElement('th');
  th.textContent = this.store;
  tr.appendChild(th);

  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = this.dailyStoreTotal;
  tr.appendChild(td);
  tbody.appendChild(tr);
};

function renderHeader() {
  let header = document.getElementById('first-row');
  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement('th');
    th.textContent = hours[i];
    header.appendChild(th);
  }

  let th = document.createElement('th');
  th.textContent = 'Daily Total';
  header.appendChild(th);
}



// let calcGrandTotals = function () {
//   let newGrandTotal = new Array(hours.length + 1);
//   newGrandTotal.fill(0);
//   for (let i = 0; i < allStores.length; i++) {
//     for (let j = 0; j < allStores[i].cookiesPerHour.length; j++) {
//       newGrandTotal[j] += allStores[i].cookiesPerHour[j];
//       newGrandTotal[newGrandTotal.length - 1] += allStores[i].cookiesPerHour[j];
//     }
//   }
//   return newGrandTotal;
// }

// function renderFooter() {
//   let footer = document.getElementById('table-footer');
//   for (let i = 0; i < allStores.length; i++) {
//     let td = document.getElementById('td');
//     td.textContent = allStores[i];
//     footer.appendChild(td);

//   }
// }

function renderFooter() {
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  tableFooter.appendChild(tr);
  th.textContent = 'Hourly Totals';
  tr.appendChild(th);

  let allStoresDailyTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let allStoresHourlyTotal = 0;
    for (let j = 0; j < allStores.length; j++) {
      allStoresHourlyTotal += allStores[j].cookiesPerHour[i];

    }
    let td = document.createElement('td');
    td.textContent = allStoresHourlyTotal;
    tr.appendChild(td);
    allStoresDailyTotal += allStoresHourlyTotal;
  }
  let td = document.createElement('td');
  td.textContent = allStoresDailyTotal;
  tr.appendChild(td);
}

function handleSubmit(event) {
  event.preventDefault();
  let store = event.target.store.value;
  let minNumHourlyCustomers = +event.target.minNumHourlyCustomers.value;
  let maxNumHourlyCustomers = +event.target.maxNumHourlyCustomers.value;
  let avgNumCookiesPerCustomer = +event.target.avgNumCookiesPerCustomer.value;
  let newStore = new Store(store, minNumHourlyCustomers, maxNumHourlyCustomers, avgNumCookiesPerCustomer);
  newStore.render();
  tableFooter.removeChild(tableFooter.firstChild);
  renderFooter();
}


new Store('seattle', 23, 65, 6.3, []);
new Store('tokyo', 3, 24, 1.2, []);
new Store('dubai', 11, 38, 2.3, []);
new Store('paris', 20, 38, 2.3, []);
new Store('lima', 2, 16, 4.6, []);

function renderAll() {
  renderHeader();
  for (let i = 0; i < allStores.length; i++) {
    allStores[i].render();

  }
}
renderAll();
renderFooter();
myContainer.addEventListener('submit', handleSubmit);
// seattleStore.render();
// tokyoStore.render();
// dubaiStore.render();
// parisStore.render();
// limaStore.render();
