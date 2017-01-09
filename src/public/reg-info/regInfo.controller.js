(function() {
  'use strict';

  angular.module('common')
  .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject=['userInfo']
  function RegistrationController(userInfo){
    var $ctrl=this;
    $ctrl.userInfo=userInfo;
  }

}());
