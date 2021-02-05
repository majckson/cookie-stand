'use strict';

console.log('hello world');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let allStores = [];
//let myContainer = document.getElementById('container');
let tbody = document.getElementById('body-rows');
//let cookieTable = document.getElementById('cookie-table');

function Store (name, minimumCustomerEachHour, maximumCustomerEachHour, avgCookiesPerCustomer) {
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

let seattleStore = new Store('seattle', 23, 65, 6.3, []);
let tokyoStore = new Store('tokyo', 3, 24, 1.2, []);
let dubaiStore = new Store('dubai', 11, 38, 2.3, []);
let parisStore = new Store('paris', 20, 38, 2.3, []);
let limaStore = new Store('lima', 2, 16, 4.6, []);

renderHeader();
seattleStore.render();
tokyoStore.render();
dubaiStore.render();
parisStore.render();
limaStore.render();
