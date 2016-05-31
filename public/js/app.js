'use strict';

(function(){
  var app = angular.module('gemStore', []);


  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = (tab) => {
      this.tab = tab;
    };

    this.isSet = (tabName) => {
      return this.tab === tabName;
    };
  });

  app.controller('GalleryController', function(){
    this.current = 0;

    this.setCurrent = value => {
      this.current = value || 0;
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = product => {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive('productDescription', function(){
    return {
      restrict : 'E',
      templateUrl : 'product-description.html'
    };
  });

  var gems = [
    {
      name        :   'Azurite',
      description :   'Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.',
      shine       :   8,
      price       :   110.50,
      rarity      :   7,
      color       :   '#CCC',
      faces       :   14,
      images      :   [
        '../img/gem-02.gif',
        '../img/gem-05.gif',
        '../img/gem-09.gif'
      ],
      reviews     :   [{
        stars   :   5,
        body    :   "I love this gem!",
        author  :   'joe@example.org',
        createdOn   :   13974909080837
      }, {
        stars   :   1,
        body    :   'This gem sucks',
        author  :   'tim@example.org',
        createdOn   :   1397490980837
      }]
    },{
      name        :   'Bloodstone',
      description :   'Origin of the Bloodstone is unknown, hence its low value.  it has a very high shine and 12 sides, however.',
      shine       :   9,
      price       :   22.90,
      rarity      :   6,
      color       :   '#EEE',
      faces       :   12,
      images      :   [
        '../img/gem-01.gif',
        '../img/gem-03.gif',
        '../img/gem-04.gif'
      ],
      reviews     : [{
        stars   :   3,
        body    :   'I think this gem was just OK, could honestly use more shine, IMO.',
        author  :   'JimmyDean@example.org',
        createdOn   :   1397490980837
      }, {
        stars   :   4,
        body    :   'Any gem with 12 faces is for me!',
        author  :   'gemsRock@example.org',
        createdOn   :   1397490980837
      }]
    },
    {
      name        :   'Zircon',
      description :   'Zircon is our most coveted and sough tafter gem.  you will pay much to be the proud owner of this gorgeous and high shine gem.',
      shine       :   70,
      price       :   1100,
      rarity      :   2,
      color       :   '#000',
      faces       :   6,
      images      :   [
        '../img/gem-06.gif',
        '../img/gem-07.gif',
        '../img/gem-10.gif'
      ],
      reviews     : [{
        stars   :   1,
        body    :   'BBW: High Shine != High Quality.',
        author  :   'LouisW407@example.org',
        createOn :   1397490980837
      }, {
        stars   :   1,
        body    :   "'Don't waste your rubles!'",
        author  :   'nat@example.org',
        createdOn  :  1397490980837
      }]
    }];
  }
)();

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
//  >orderby = {{li ng-repeat='products in store.products | orderBy:-price'}} *orders products by their respective price.  With -price, the most expensive item will be listed first. vice versa without the minus.
//
// *FILTER summary = limitTo, orderby, date:'MM/dd/yyyy', uppercase, lowercase
//
// ---------------------------------------------------
// DIRECTIVES:
//
// ng-src='{{product.images[0].full}}'  *for Images
//
//
