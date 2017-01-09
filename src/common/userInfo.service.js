(function() {
  'use strict';
  angular.module('common')
  .service('UserInfoService', UserInfoService);
  //userInfoService.$inject=['$q'];
  function UserInfoService(){
    var service=this;
    service.userInfo=null;

    service.setUserInfo=function(user){
      service.userInfo=user;
      return service.userInfo;
    }

    service.getUserInfo=function(user){
      return service.userInfo;
    }

  }
}());
