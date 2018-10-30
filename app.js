var firstAndPike = {
  storeLocation: '1st and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesSoldPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  totalCookiesPerDay: 0,
  generateRandomCustPerHour: function(min, max) {
    for(var i = 0; i < this.hoursOpen.length; i++) {
      var randomCustNumber = Math.floor(Math.random() * (max - min + 1) + min);
      this.customersPerHour.push(randomCustNumber);
    }
  },
  generateHourlySales: function() {
    // Will generate number of customers per hour using the min/cust and max/cust
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    // loop to create and push a cookies per hour amount to pair with each hour open
    for(var i = 0; i < this.hoursOpen.length; i++) {
      var perHour = Math.round(this.customersPerHour[i] * this.avgCookiesSoldPerCust);
      this.cookiesPerHour.push(perHour);

      // creates a total amount of cookies for the whole day by adding up each cookies per hour amount
      this.totalCookiesPerDay += perHour;
    }
  },
  render: function() {
    // Line below will generate hourly sales, which also generates customers per hour
    this.generateHourlySales();
  
    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');
  
    var headingEl = document.createElement('h3');
    headingEl.textContent = this.storeLocation;
    containerEl.appendChild(headingEl);
  
    var ulEl = document.createElement('ul');
  
    for(var i = 0; i < this.hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOpen[i]}: ${this.cookiesPerHour[i]} cookies`; // '6am: 23 cookies'
      ulEl.appendChild(liEl);
    }
  
    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
    ulEl.appendChild(totalEl);
  
    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
};

var seatacAirport = {
  storeLocation: 'Sea-Tac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesSoldPerCust: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  totalCookiesPerDay: 0,
  generateRandomCustPerHour: function(min, max) {
    for(var i = 0; i < this.hoursOpen.length; i++) {
      var randomCustNumber = Math.floor(Math.random() * (max - min + 1) + min);
      this.customersPerHour.push(randomCustNumber);
    }
  },
  generateHourlySales: function() {
    // Will generate number of customers per hour using the min/cust and max/cust
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    // loop to create and push a cookies per hour amount to pair with each hour open
    for(var i = 0; i < this.hoursOpen.length; i++) {
      var perHour = Math.round(this.customersPerHour[i] * this.avgCookiesSoldPerCust);
      this.cookiesPerHour.push(perHour);

      // creates a total amount of cookies for the whole day by adding up each cookies per hour amount
      this.totalCookiesPerDay += perHour;
    }
  },
  render: function() {
    // Line below will generate hourly sales, which also generates customers per hour
    this.generateHourlySales();
  
    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');
  
    var headingEl = document.createElement('h3');
    headingEl.textContent = this.storeLocation;
    containerEl.appendChild(headingEl);
  
    var ulEl = document.createElement('ul');
  
    for(var i = 0; i < this.hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOpen[i]}: ${this.cookiesPerHour[i]} cookies`; // '6am: 23 cookies'
      ulEl.appendChild(liEl);
    }
  
    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
    ulEl.appendChild(totalEl);
  
    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
};

var seattleCenter = {
  storeLocation: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesSoldPerCust: 3.7,
  customersPerHour: [],
  cookiesPerHour: [],
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  totalCookiesPerDay: 0,
  generateRandomCustPerHour: function(min, max) {
    for(var i = 0; i < this.hoursOpen.length; i++) {
      var randomCustNumber = Math.floor(Math.random() * (max - min + 1) + min);
      this.customersPerHour.push(randomCustNumber);
    }
  },
  generateHourlySales: function() {
    // Will generate number of customers per hour using the min/cust and max/cust
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    // loop to create and push a cookies per hour amount to pair with each hour open
    for(var i = 0; i < this.hoursOpen.length; i++) {
      var perHour = Math.round(this.customersPerHour[i] * this.avgCookiesSoldPerCust);
      this.cookiesPerHour.push(perHour);

      // creates a total amount of cookies for the whole day by adding up each cookies per hour amount
      this.totalCookiesPerDay += perHour;
    }
  },
  render: function() {
    // Line below will generate hourly sales, which also generates customers per hour
    this.generateHourlySales();
  
    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');
  
    var headingEl = document.createElement('h3');
    headingEl.textContent = this.storeLocation;
    containerEl.appendChild(headingEl);
  
    var ulEl = document.createElement('ul');
  
    for(var i = 0; i < this.hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOpen[i]}: ${this.cookiesPerHour[i]} cookies`; // '6am: 23 cookies'
      ulEl.appendChild(liEl);
    }
  
    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
    ulEl.appendChild(totalEl);
  
    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
};

var capitolHill = {
  storeLocation: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesSoldPerCust: 2.3,
  customersPerHour: [],
  cookiesPerHour: [],
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  totalCookiesPerDay: 0,
  generateRandomCustPerHour: function(min, max) {
    for(var i = 0; i < this.hoursOpen.length; i++) {
      var randomCustNumber = Math.floor(Math.random() * (max - min + 1) + min);
      this.customersPerHour.push(randomCustNumber);
    }
  },
  generateHourlySales: function() {
    // Will generate number of customers per hour using the min/cust and max/cust
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    // loop to create and push a cookies per hour amount to pair with each hour open
    for(var i = 0; i < this.hoursOpen.length; i++) {
      var perHour = Math.round(this.customersPerHour[i] * this.avgCookiesSoldPerCust);
      this.cookiesPerHour.push(perHour);

      // creates a total amount of cookies for the whole day by adding up each cookies per hour amount
      this.totalCookiesPerDay += perHour;
    }
  },
  render: function() {
    // Line below will generate hourly sales, which also generates customers per hour
    this.generateHourlySales();
  
    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');
  
    var headingEl = document.createElement('h3');
    headingEl.textContent = this.storeLocation;
    containerEl.appendChild(headingEl);
  
    var ulEl = document.createElement('ul');
  
    for(var i = 0; i < this.hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOpen[i]}: ${this.cookiesPerHour[i]} cookies`; // '6am: 23 cookies'
      ulEl.appendChild(liEl);
    }
  
    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
    ulEl.appendChild(totalEl);
  
    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
};

var alki = {
  storeLocation: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesSoldPerCust: 4.6,
  customersPerHour: [],
  cookiesPerHour: [],
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  totalCookiesPerDay: 0,
  generateRandomCustPerHour: function(min, max) {
    for(var i = 0; i < this.hoursOpen.length; i++) {
      var randomCustNumber = Math.floor(Math.random() * (max - min + 1) + min);
      this.customersPerHour.push(randomCustNumber);
    }
  },
  generateHourlySales: function() {
    // Will generate number of customers per hour using the min/cust and max/cust
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    // loop to create and push a cookies per hour amount to pair with each hour open
    for(var i = 0; i < this.hoursOpen.length; i++) {
      var perHour = Math.round(this.customersPerHour[i] * this.avgCookiesSoldPerCust);
      this.cookiesPerHour.push(perHour);

      // creates a total amount of cookies for the whole day by adding up each cookies per hour amount
      this.totalCookiesPerDay += perHour;
    }
  },
  render: function() {
    // Line below will generate hourly sales, which also generates customers per hour
    this.generateHourlySales();
  
    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');
  
    var headingEl = document.createElement('h3');
    headingEl.textContent = this.storeLocation;
    containerEl.appendChild(headingEl);
  
    var ulEl = document.createElement('ul');
  
    for(var i = 0; i < this.hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOpen[i]}: ${this.cookiesPerHour[i]} cookies`; // '6am: 23 cookies'
      ulEl.appendChild(liEl);
    }
  
    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
    ulEl.appendChild(totalEl);
  
    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
};

firstAndPike.render();
seatacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();
