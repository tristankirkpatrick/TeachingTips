angular.module('starter', ['ionic', 'ngSanitize'])

.controller('AppCtrl', function($scope, $http, $ionicActionSheet, $sce) {
  
    $scope.posts = [];

  $http.get('http://teachthemtocode.com/wp-json/posts?filter%5Borderby%5D=rand&filter%5Bposts_per_page%5D=1callback=?').
    success(function(data, status, json, config) {
      $scope.posts = data;
      console.log(data[0].title);
      var title = data[0].title;





  $scope.showActionsheet = function() {
    
    $ionicActionSheet.show({
      titleText: 'ActionSheet Example',
      buttons: [
        { text: '<i class="icon ion-share"></i> Share' },
        { text: '<i class="icon ion-arrow-move"></i> Move' },
      ],
      destructiveText: 'Delete',
      cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        return true;
      }
    });
  };
    

//sanitising html
        $scope.myTitle = data[0].title;
      
        $scope.snippet = data[0].content;
    

      console.log(data.title);
      console.log(title);
      console.log("got data");
    }).
    error(function(data, status, headers, config) {
      console.log("can't connect!")
      // log error
    });
    
});