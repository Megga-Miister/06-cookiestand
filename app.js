'use strict';

var locations = [];
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

function Location (storeLocation, minCustomers, maxCustomers, avgCookiesPerCustomer){
  this.storeLocation = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;

  this.customersPerHour = [];
  this.cookiesSoldPerHour = [];
  this.totalCookiesPerDay = [];

  locations.push(this);

  this.addCustomersPerHour(this.minCustomers, this.maxCustomers);
  this.addCookiesSoldPerHour();

  this.renderTable();
}

console.log(locations);

Location.prototype.addCustomersPerHour = function (minCustomers,maxCustomers){
  for (var i = 0; i < hoursOfOperation.length; i++){
    var randomNumberofCustomers = Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
    this.customersPerHour.push(randomNumberofCustomers)
  }
};

Location.prototype.addCookiesSoldPerHour = function (){
  for (var i = 0; i < hoursOfOperation.length; i++){
    var cookiesPerHour = Math.round(this.customersPerHour[i] * this.avgCookiesPerCustomer);
    this.cookiesSoldPerHour.push(cookiesPerHour);
  }
};

Location.prototype.renderTable = function (){
  var tableBodyElement = document.getElementsByTagName('tbody')[0];
  // var tableBodyElement = document.getElementById('table-body');
  var tableRowElement = document.createElement('tr');
  var tableHeadElement = document.createElement('th');

  console.log(tableBodyElement);
  console.log(tableRowElement);
  console.log(tableHeadElement);

  tableHeadElement.textContent = this.storeLocation;
  tableRowElement.appendChild(tableHeadElement);

  for(var i = 0; i < hoursOfOperation.length; i++) {
    var tableDataElement = document.createElement('td');
    tableDataElement.textContent = this.cookiesSoldPerHour[i];
    tableRowElement.appendChild(tableDataElement);
  }

  tableBodyElement.appendChild(tableRowElement);
};

function createHeader(){

};

function createFooter(){

};

function createTable() {
  // This function is used to establish ONE SINGLE table in the DOM for us to work with when we start rendering individual rows for each storeLocation
  var mainEl = document.getElementById('main-content');
  var tableEl = document.createElement('table');
  var tableBodyEl = document.createElement('tbody');
  tableEl.id = 'daily-cookie-sales';
  tableBodyEl.id = 'tbl-body';
  mainEl.appendChild(tableEl);
  // tableEl.appendChild(createHeader());
  tableEl.appendChild(tableBodyEl);
  // tableEl.appendChild(createFooter());
};

createTable();

var firstAndPike = new Location('1st and Pike', 23, 65, 6.3);
var seatacAirport = new Location('Sea-Tac Airport', 3, 24, 1.2);
var seattleCenter = new Location('Seattle Center', 11, 38, 3.7);
var capitolHill = new Location('Capitol Hill', 20, 38, 2.3);
var alki = new Location('Alki', 2, 16, 4.6);

