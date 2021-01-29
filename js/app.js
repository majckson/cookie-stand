'use strict';

console.log('hello world');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// docs used: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

var seattleList = document.getElementById('seattle');
var tokyoList = document.getElementById('tokyo');
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

        li.textContent = `${hours[0]}: ${this.cookiesSoldPerHourArray[0]} cookies`;
        seattleList.appendChild(li);
    }
    let li = document.createElement('li');
    li.
  };






seattle.render();

let tokyo = {
  name: 'Tokyo',
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

      li.textContent = `${hours[0]}: ${this.cookiesSoldPerHourArray[0]} cookies`;
      seattleList.appendChild(li);
  }
  let li = document.createElement('li');
  li.
};






tokyo.render();
