'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];
//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];


//Exercice1
function ConvertDate(date1,date2)
{
  var firstDate=new Date(date1);
  var secondDate=new Date(date2);
  var day=1+Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
  return day;
}
function Deductible(option,price,day)
{
  if(option=true)
  {
    price=price+4*day;
  }
  return price;
}
//exercice1
for(var i=0;i<rentals.length;i++)
{
  var carID=rentals[i].carId;
  var km=rentals[i].distance;
  var oneDay=24*60*60*1000;
  var price=rentals[i].price;
  var day=ConvertDate(rentals[i].returnDate,rentals[i].pickupDate);
  //exercice2
  if(day>=1 && day<4)
  {
    var percent=10/100;
    for(var j=0;j<cars.length;j++)
    {
      if(carID==cars[j].id)
      {
        var pricePerKm=cars[j].pricePerKm;
        var pricePerDay=cars[j].pricePerDay;
      }
    }
    rentals[i].price=pricePerKm*km+pricePerDay*day;
    rentals[i].price=rentals[i].price-rentals[i].price*percent;
  }
  else if(day>=4 && day<10)
  {
    var percent=30/100;
    for(var j=0;j<cars.length;j++)
    {
      if(carID==cars[j].id)
      {
        var pricePerKm=cars[j].pricePerKm;
        var pricePerDay=cars[j].pricePerDay;
      }
    }
    rentals[i].price=pricePerKm*km+pricePerDay*day;
    rentals[i].price=rentals[i].price-rentals[i].price*percent;
  }
  else if(day>=10)
  {
    var percent=50/100;
    for(var j=0;j<cars.length;j++)
    {
      if(carID==cars[j].id)
      {
        var pricePerKm=cars[j].pricePerKm;
        var pricePerDay=cars[j].pricePerDay;
      }
    }

    rentals[i].price=pricePerKm*km+pricePerDay*day;
    rentals[i].price=rentals[i].price-rentals[i].price*percent;
  }

  //exercice4

  var option=rentals[i].options;
  var price=rentals[i].price;
  var newprice=Deductible(option,price,day);

  //exerice3

  var commission=rentals[i].price*0.3;
  rentals[i].commission.assistance=1*day;
  rentals[i].commission.insurance=commission*0.5;
  rentals[i].commission.drivy=commission*0.5-rentals[i].commission.assistance;

  //exerice5
  for(var k=0;k<actors.length;k++)
  {
    if(actors[k].rentalId==rentals[i].id)
    {
      if(actors[k].payment.who=='driver' && actors[k].payment.type=='debit')
      {
        actors[k].payment.amount=Deductible(rentals[i].options,rentals[i].price,day);
      }
      else if(actors[k].payment.who=='owner' && actors[k].payment.type=='credit')
      {
        actors[k].payment.amount=rentals[i].price*0.3;
      }
      else if(actors[k].payment.who=='insurance' && actors[k].payment.type=='credit')
      {
        actors[k].payment.amount=rentals[i].price*0.3*0.5;
      }
      else if(actors[k].payment.who=='assistance' && actors[k].payment.type=='credit')
      {
        actors[k].payment.amount=1*day;
      }
      else if(actors[k].payment.who=='drivy' && actors[k].payment.type=='credit')
      {
        actors[k].payment.amount=rentals[i].price*0.3*0.5-1*day;
      }
    }
  }

}

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);
