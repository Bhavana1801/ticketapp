// controller for MyApp
angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

.controller('AppCtrl', function($scope) {
  // image is loaded from the given location into the card
  $scope.imagePath = 'img/movies.jpg';
  // scrolled to telugu bar
   $("#telugu-btn").click(function(){
    $('html,body').animate({
      scrollTop: $("#telugu").offset().top
    }, 1000);
  });
   //scrolled to hindi movies list
  $("#hindi-btn").click(function(){
    $('html,body').animate({
      scrollTop: $("#hindi").offset().top
    }, 1000);
  });
  //scrolled to english movies list
  $("#english-btn").click(function(){
    $('html,body').animate({
      scrollTop: $("#english").offset().top
    }, 1000);
  });
  //scrolled to others movies list
  $("#others-btn").click(function(){
    $('html,body').animate({
      scrollTop: $("#others").offset().top
    }, 1000);
  });
});



/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
**/