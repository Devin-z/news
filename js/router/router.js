/**
 * Created by Administrator on 2017/4/19 0019.
 */
;
(function(){
    var routers = angular.module("routers",[]);
    routers.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    	$stateProvider.state('index',{
    		url:'/index',
    		templateUrl:'template/index.html'
    	}).state('index.tj',{
    		url:'/tj',
    		templateUrl:'template/tj.html'
    	}).state('index.sh',{
    		url:'/sh',
    		templateUrl:'template/sh.html'
    	})



    	.state('xq',{
    		url:'/xq',
    		templateUrl:'template/xq.html'
    	})

    	$urlRouterProvider.when('','/index')
    }])
})()
;