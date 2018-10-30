var 1standPike = {
  minCust: 23,  //minimum number of customers in store a hour
  maxCust: 65,  //maximum number of customer in store a hour
  avgCookie: 6.3, //average number of cookies bought per customer

  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesNeededByHour: [],
  // totalCookiesPerHour: [],
  // totalCookiesPerDay: 0,

  // function used to create a random number of customers based off of the the minCust and maxCust
  randCust: function (minCust, maxCust){
    min = Math.ceil(minCust);
    max = Math.floor(maxCust);

    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  },

  totalCookiesPerHour: function (randCust, avgCookie){
    var cookiesInHour = randCust * avgCookie;
    return cookiesInHour;
  },
  
  hourlyCookies: function (){
    for (hours = 0; hours < hoursOpen.length; hours++){
    this.cookiesNeededByHour.push(hourlyCookies)};
  },

};