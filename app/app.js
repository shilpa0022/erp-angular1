 var app = angular.module('myerp', ['ngRoute']);

   app.config(function ($routeProvider) {
        $routeProvider.
            when('/dashbord', 
                {
                    templateUrl: 'views/dashbord.html',
                     controller: 'dashbordCtrl'

                 }).
            when('/seed',
             {
                 templateUrl: 'views/Production/seed.html',
                 controller: 'seedCtrl'
             }).
            when('/clone',
             {
                templateUrl: 'views/Production/clone.html',
                 controller: 'cloneCtrl'
             }).
            when('/mother',
             {
                templateUrl: 'views/Production/mother_plant.html', 
                controller: 'motherCtrl'
            }).
            when('/plant',
                {
                    templateUrl: 'views/Production/plant_growth.html', 
                    controller: 'plantCtrl'
                }).
            when('/harvesting', 
                {
                    templateUrl: 'views/Production/harvesting.html',
                    controller: 'harvestCtrl'
                }).
            when('/cut_mantain',
             { 
                templateUrl: 'views/Production/cut_mantain.html',
                 controller: 'cutmanCtrl'
             }).
            when('/drying',
             {
                templateUrl: 'views/Production/drying.html',
                 controller: 'dryCtrl'
             }).
            when('/production_order', 
                {
                    templateUrl: 'views/Inventory/production_order.html',
                    controller: 'prodordCtrl'
                }).
            when('/production_status', 
                {
                    templateUrl: 'views/Inventory/production_status.html', 
                    controller: 'prodstCtrl'
                }).
            when('/bill_of_material',
             {
                templateUrl: 'views/Inventory/bill_of_material.html',
                controller: 'billCtrl'
              }).
            when('/grow_location',
             {
                templateUrl: 'views/Inventory/grow_location.html',
                 controller: 'growlocCtrl'
             }).
            when('/curing_storage',
             {
                templateUrl: 'views/Production/curing_storage.html',
                controller: 'curstorCtrl'
            }).
            when('/plant_inventory',
             {
                templateUrl: 'views/Inventory/plant_inventory.html', 
                controller: 'plantinCtrl'
            }).
            when('/storage_location', 
                {
                    templateUrl: 'views/Inventory/storage_location.html', 
                    controller: 'storageCtrl'
                }).
            when('/feed_inventory',
             {
                templateUrl: 'views/Inventory/feed_inventory.html',
                 controller: 'feedCtrl'

             }).
            when('/custome_database', 
                {
                    templateUrl: 'views/Sales/custome_database.html',
                     controller: 'custdataCtrl'
                 }).
            when('/sales_orderMaterial_supplies',
             {
                templateUrl: 'views/Sales/sales_orderMaterial_supplies.html',
                 controller: 'salesorderCtrl'
             }).
            when('/sales_order_report',
             {
                templateUrl: 'views/Sales/sales_order_report.html', 
                controller: 'salesrepCtrl'
            }).
            when('/supplier_database', 
                {
                    templateUrl: 'views/Purchase/supplier_database.html',
                     controller: 'supplyCtrl'
                 }).
            when('/purchase_orderMaterial_receipt',
             {
                templateUrl: 'views/Purchase/purchase_orderMaterial_receipt.html',
                 controller: 'prdordCtrl'
             }).
            when('/purchase_report',
             {
                templateUrl: 'views/Purchase/purchase_report.html', 
                controller: 'purrepCtrl'
            }).
            when('/purchase_payment',
             {
                templateUrl: 'views/Finance/purchase_payment.html',
                 controller: 'purpayCtrl'
             }).
            when('/customer_payment',
             {
                templateUrl: 'views/Finance/customer_payment.html',
                 controller: 'custpayCtrl'
             }).
            when('/customer_invoice', 
                {
                    templateUrl: 'views/Finance/customer_invoice.html', 
                    controller: 'custInCtrl'
                }).
            when('/supplier_invoice',
             {
                templateUrl: 'views/Finance/supplier_invoice.html', 
                controller: 'custpayCtrl'
            }).
            otherwise({redirectTo: '/dashbord'});
    })



   .controller('dashbordCtrl', function ($scope) {
        
    })
   
    .controller('cloneCtrl', function ($scope) {
       
    })
     .controller('motherCtrl', function ($scope) {
       
    })
      .controller('plantCtrl', function ($scope) {
       
    })
    
     .controller('harvestCtrl', function ($scope) {
       
    })
      .controller('cutmanCtrl', function ($scope) {
       
    })
    
    
    
    