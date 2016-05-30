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

// NOTES:
// ng-controller='MainController as main'
//
// <em class='pull left'></em> this allows for pull-left & pull-right WITHOUT distoring other elements.
//
// ul class='list-group'
// ---------------------------------------------------
// FILTERS:
//  >date = {{'1231512312' | date:'MM/dd/yyyy'}}
//
//  >upper & lower case = {{'octagon gem' | uppercase}}
//
//  >limitTo = {{'My description' | limitTo:8}}  *this only displays the first 8 characters of the string.
//  {{li ng-repeat='product in store.products | limitTo:3'}} * only displays the first 3 repeats
//
//  >orderby = {{li ng-repeat='products in store.products | orderBy:-price'}} *orders products by their respective price
//
// *FILTER summary = limitTo, orderby, date:'MM/dd/yyyy', uppercase, lowercase
//
// ---------------------------------------------------
//
