
angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'slick'])

.controller('AppCtrl', function($scope) {
  $scope.imagePath = 'img/movies.jpg';
  $scope.myDate = new Date();

  $scope.minDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() - 2,
      $scope.myDate.getDate());

  $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 2,
      $scope.myDate.getDate());
  
  $scope.onlyWeekendsPredicate = function(date) {
    var day = date.getDay();
    return day === 0 || day === 6;
  }

  $("#telugu-btn").click(function(){
    $('html,body').animate({
      scrollTop: $("#telugu").offset().top
    }, 2000);
  });

  $("#hindi-btn").click(function(){
    $('html,body').animate({
      scrollTop: $("#hindi").offset().top
    }, 2000);
  });

  $("#english-btn").click(function(){
    $('html,body').animate({
      scrollTop: $("#english").offset().top
    }, 2000);
  });

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