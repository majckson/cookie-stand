'use strict';

console.log('hello world');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


// docs used: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random


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


  }
};

seattle.render();
