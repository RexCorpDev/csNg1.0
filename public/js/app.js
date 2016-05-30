'use strict';

(function(){
  var app = angular.module('gemStore', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name        :   'Azurite',
      price       :   2.95,
      canPurchase :   false,
      soldOut     :   true
    },
    {
      name        :   'Bloodstone',
      price       :   5.95
    },
    {
      name        :   'Zircon',
      price       :   3.95
    }
  ];
})();
