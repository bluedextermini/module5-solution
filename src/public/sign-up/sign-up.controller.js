(function() {
  'use strict';
  
  angular.module('public')
  .controller('SignUpController',SignUpController);

  SignUpController.$inject=['MenuService', 'UserInfoService'];
  function SignUpController(MenuService, userInfoService){
    var signUpCtrl=this;
    signUpCtrl.submit=function(){
      signUpCtrl.userInfoSaved=undefined;
      console.log("Something submitted.", signUpCtrl.user);
      var promise=MenuService.getItem(signUpCtrl.user.favDish);
      promise.then(function(response){
          console.log('success getItems()',response.data);
          signUpCtrl.user.favDishData=response.data;
          userInfoService.setUserInfo(signUpCtrl.user);
          signUpCtrl.userInfoSaved=true;
          signUpCtrl.dishNotExists=false;

      },function(response){
          console.log('error getItems()'+response.status);
          signUpCtrl.dishNotExists=true;
      });

    }

  }
}());
