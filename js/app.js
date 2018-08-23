angular.module('myerp', ['ngRoute']).
    config(function ($routeProvider) {
        $routeProvider.
            when('/dashbord', {templateUrl: 'views/dashbord.html', controller: 'dashbordCtrl'}).
            when('/seed', {templateUrl: 'views/seed.html', controller: 'seedCtrl'}).
            when('/clone', {templateUrl: 'views/clone.html', controller: 'cloneCtrl'}).
            when('/mother', {templateUrl: 'views/mother_plant.html', controller: 'motherCtrl'}).
            when('/plant', {templateUrl: 'views/plant_growth.html', controller: 'plantCtrl'}).
            when('/harvesting', {templateUrl: 'views/harvesting.html', controller: 'harvestCtrl'}).
            when('/cut_mantain', {templateUrl: 'views/cut_mantain.html', controller: 'cutmanCtrl'}).
            when('/drying', {templateUrl: 'views/drying.html', controller: 'dryCtrl'}).
            when('/production_order', {templateUrl: 'views/production_order.html', controller: 'prodordCtrl'}).
            when('/production_status', {templateUrl: 'views/production_status.html', controller: 'prodstCtrl'}).
            when('/bill_of_material', {templateUrl: 'views/bill_of_material.html', controller: 'billCtrl'}).
            when('/grow_location', {templateUrl: 'views/grow_location.html', controller: 'growlocCtrl'}).
            when('/curing_storage', {templateUrl: 'views/curing_storage.html', controller: 'curstorCtrl'}).
            when('/plant_inventory', {templateUrl: 'views/plant_inventory.html', controller: 'plantinCtrl'}).
            when('/storage_location', {templateUrl: 'views/storage_location.html', controller: 'storageCtrl'}).
            when('/feed_inventory', {templateUrl: 'views/feed_inventory.html', controller: 'feedCtrl'}).
            when('/custome_database', {templateUrl: 'views/custome_database.html', controller: 'custdataCtrl'}).
            when('/sales_orderMaterial_supplies', {templateUrl: 'views/sales_orderMaterial_supplies.html', controller: 'salesorderCtrl'}).
            when('/sales_order_report', {templateUrl: 'views/sales_order_report.html', controller: 'salesrepCtrl'}).
            when('/supplier_database', {templateUrl: 'views/supplier_database.html', controller: 'supplyCtrl'}).
            when('/purchase_orderMaterial_receipt', {templateUrl: 'views/purchase_orderMaterial_receipt.html', controller: 'purordmetCtrl'}).
            when('/purchase_report', {templateUrl: 'views/purchase_report.html', controller: 'purrepCtrl'}).
            when('/purchase_payment', {templateUrl: 'views/purchase_payment.html', controller: 'purpayCtrl'}).
            when('/customer_payment', {templateUrl: 'views/customer_payment.html', controller: 'custpayCtrl'}).
            when('/customer_invoice', {templateUrl: 'views/customer_invoice.html', controller: 'custInCtrl'}).
            when('/supplier_invoice', {templateUrl: 'views/supplier_invoice.html', controller: 'custpayCtrl'}).
            otherwise({redirectTo: '/dashbord'});
    })
    .controller('dashbordCtrl', function ($scope) {
        
    })
    .controller('seedCtrl', function ($scope) {
        
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
    
    
    
    