'use strict';

console.log('hello world');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

console.log(hours);


let seattle = {
  name: 'Seattle',
  minimumCustomerEachHour: 23,
  maximumCustomerEachHour: 65,
  avgCookiesPerCustomer: 6.3,
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,


  // docs used: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  randomCustomerEachHour: function () {
    console.log('I\'m in randomCustomerEachHour');
    //do something // return some math here
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
  },
  // a method to calculate and populate our number of cookies sold per hour array
  calcCookiesSoldEachHour: function () {
    let randomCustomerForOneHour = this.randomCustomerEachHour();
    console.log(randomCustomerForOneHour);
    console.log('I am inside of calcCookiesSoldEachHour');


  },
  render: function () {
    this.calcCookiesSoldEachHour();
    console.log('I am in the render method');
  }
};

seattle.render();
