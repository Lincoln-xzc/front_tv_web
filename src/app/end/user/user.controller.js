(function() {
  'use strict';

  angular
    .module('frontTvWeb')
    .controller('UserController',UserController);

  /** @ngInject */
  function UserController($log,$modal, UserService) {
    var vm = this;
   /* vm.initpage ={
      'size':20,
      'type':'tv',
      'tip':'',
      'area':'',
      'releaseDate':'',
      'currentPage':1
    };*/
    //列表
    UserService.getUsers().then(function(result){
      vm.users = result.data;
    },function(err){
      $log.error(err.status + ":"+err.statusText);
    })



    //删除
    vm.delete = function(id){
      vm.typeData = {
        'type':vm.dataType,
        'number':10,
        'tip':''
      };
      EndMainService.delete(id).then(function(result){
        EndMainService.getEndMainList(vm.typeData).then(function(result){
          vm.resources = result.data.data;
        },function(err){
          $log.error(err.status +":"+ err.statusText);
        })
      },function(err){
        $log.error(err.status +":"+err.statusText);
      });
    };

    //复制
    vm.edit = function(data){
      var modalInstance = $modal.open({
        templateUrl:'editRole.html',
        controller:'EditRoleController',
        controllerAs: 'edit',
        animation: true,
        size: 'md',
        resolve: {
          user: function(){
            return data;
          }
        }
      });

      modalInstance.result.then(function (data){
        vm.selected = data;
      },function(){
        $log.info("Modal dismissed at:" + new Date());
      })
    }

    //add role
    vm.addRole = function(){
      var modalInstance = $modal.open({
        templateUrl:'addRole.html',
        controller:'RoleController',
        controllerAs: 'role',
        animation: true,
        size: 'md',
        resolve: {
          /*role: function(){
            return data;
          }*/
        }
      });

      modalInstance.result.then(function (data){
        vm.selected = data;
      },function(){
        $log.info("Modal dismissed at:" + new Date());
      })
    }
  } //End of EndMainController

  angular
    .module('frontTvWeb')
    .controller('EditRoleController',EditRoleController);

  /** @ngInject */
  function EditRoleController($modalInstance,$log,user,UserService) {
    var vm = this;
    vm.user = user;
    UserService.getRoles().then(function(result){
      vm.roles = result.data;
    },function(err){
      $log.error(err.status +":"+ err.statusText);
    })
    vm.ok = function(){

      $modalInstance.close(vm.data);
    }
    vm.cancel =function(){
      $modalInstance.dismiss('cancel');
    }
  } //End of MainController

  angular
    .module('frontTvWeb')
    .controller('RoleController',RoleController);

  /** @ngInject */
  function RoleController($modalInstance,UserService,$log) {
    var vm = this;
    vm.ok = function(){
      vm.role = {
        'role_name':vm.name,
        'created_by':vm.createBy
      };
      UserService.save(vm.role).then(function(result){
        console.log(result);
      },function(err){
        $log.error(err.status +":"+err.statusText);
      });
      $modalInstance.close(vm.data);
    }
    vm.cancel =function(){
      $modalInstance.dismiss('cancel');
    }
  } //End of MainController
})();
