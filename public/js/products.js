'use strict';

(function(){
  var app = angular.module('store-directives', []);

  app.directive('productGallery', function(){
    return {
      restrict    :   'E',
      templateUrl :   'product-gallery.html',
      controller(){
        this.current = 0;
        this.setCurrent = value => {
          this.current = value || 0;
        };
      },
      controllerAs:   'gallery'
    };
  });

  app.directive('productDescription', function(){
    return {
      restrict : 'E',
      templateUrl : 'product-description.html'
    };
  });

  app.directive('productSpecs', function(){
    return {
      restrict    :   'A',
      templateUrl :   'product-specs.html'
    };
  });

  app.directive('productReviews', function(){
    return {
      restrict    :   'E',
      templateUrl :   'product-reviews.html'
    };
  });

  app.directive('productTabs', function(){
    return {
      restrict    :   'E',
      templateUrl :   'product-tabs.html',
      controller(){
        this.tab = 1;

        this.setTab = (tab) => {
          this.tab = tab;
        };

        this.isSet = (tabName) => {
          return this.tab === tabName;
        };
      },
      controllerAs : 'tab'
    };
  });

})();
