'use strict';

console.log('hello world');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// docs used: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const seattleList = document.getElementById('seattle');
const tokyoList = document.getElementById('tokyo');
var dubaiList = document.getElementById('dubai');
var parisList = document.getElementById('paris');
var limaList = document.getElementById('lima');

let seattle = {
  name: 'Seattle',
  minimumCustomerEachHour: 23,
  maximumCustomerEachHour: 65,
  avgCookiesPerCustomer: 6.3,
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,

  randomCustomerEachHour: function () {
    //console.log('I\'m in randomCustomerEachHour');
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
  },

  calcCookiesSoldEachHour: function () {

    for (let i = 0; i < hours.length; i++) {
      let totalCookiesPerHour = Math.ceil(this.randomCustomerEachHour() * this.avgCookiesPerCustomer);
      this.cookiesSoldPerHourArray[i] = totalCookiesPerHour;
      this.dailyStoreTotal += totalCookiesPerHour;
    }
  },

  render: function () {
    this.calcCookiesSoldEachHour();


    for (let i = 0; i < hours.length; i++) {


      let li = document.createElement('li');

      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      seattleList.appendChild(li);
    }
  }
};


seattle.render();

let tokyo = {
  name: 'Tokyo',
  minimumCustomerEachHour: 3,
  maximumCustomerEachHour: 24,
  avgCookiesPerCustomer: 1.2,
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,

  randomCustomerEachHour: function () {
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
  },

  calcCookiesSoldEachHour: function () {

    for (let i = 0; i < hours.length; i++) {
      let totalCookiesPerHour = Math.ceil(this.randomCustomerEachHour() * this.avgCookiesPerCustomer);
      this.cookiesSoldPerHourArray[i] = totalCookiesPerHour;
      this.dailyStoreTotal += totalCookiesPerHour;
    }
  },

  render: function () {
    this.calcCookiesSoldEachHour();


    for (let i = 0; i < hours.length; i++) {


      let li = document.createElement('li');

      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      tokyoList.appendChild(li);
    }
  }
};


tokyo.render();

let dubai = {
  name: 'Dubai',
  minimumCustomerEachHour: 11,
  maximumCustomerEachHour: 38,
  avgCookiesPerCustomer: 3.7,
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,

  randomCustomerEachHour: function () {
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
  },

  calcCookiesSoldEachHour: function () {

    for (let i = 0; i < hours.length; i++) {
      let totalCookiesPerHour = Math.ceil(this.randomCustomerEachHour() * this.avgCookiesPerCustomer);
      this.cookiesSoldPerHourArray[i] = totalCookiesPerHour;
      this.dailyStoreTotal += totalCookiesPerHour;
    }
  },

  render: function () {
    this.calcCookiesSoldEachHour();


    for (let i = 0; i < hours.length; i++) {


      let li = document.createElement('li');

      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      dubaiList.appendChild(li);
    }
  }
};


dubai.render();

let paris = {
  name: 'Paris',
  minimumCustomerEachHour: 20,
  maximumCustomerEachHour: 38,
  avgCookiesPerCustomer: 2.3,
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,

  randomCustomerEachHour: function () {
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
  },

  calcCookiesSoldEachHour: function () {

    for (let i = 0; i < hours.length; i++) {
      let totalCookiesPerHour = Math.ceil(this.randomCustomerEachHour() * this.avgCookiesPerCustomer);
      this.cookiesSoldPerHourArray[i] = totalCookiesPerHour;
      this.dailyStoreTotal += totalCookiesPerHour;
    }
  },

  render: function () {
    this.calcCookiesSoldEachHour();


    for (let i = 0; i < hours.length; i++) {


      let li = document.createElement('li');

      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      parisList.appendChild(li);
    }
  }
};


paris.render();

let lima = {
  name: 'Lima',
  minimumCustomerEachHour: 2,
  maximumCustomerEachHour: 16,
  avgCookiesPerCustomer: 4.6,
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,

  randomCustomerEachHour: function () {
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
  },

  calcCookiesSoldEachHour: function () {

    for (let i = 0; i < hours.length; i++) {
      let totalCookiesPerHour = Math.ceil(this.randomCustomerEachHour() * this.avgCookiesPerCustomer);
      this.cookiesSoldPerHourArray[i] = totalCookiesPerHour;
      this.dailyStoreTotal += totalCookiesPerHour;
    }
  },

  render: function () {
    this.calcCookiesSoldEachHour();


    for (let i = 0; i < hours.length; i++) {


      let li = document.createElement('li');

      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      limaList.appendChild(li);
    }
  }
};


lima.render();

