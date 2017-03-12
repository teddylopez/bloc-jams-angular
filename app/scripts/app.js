(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('landing', {
                url: '/',
                templateUrl: '/templates/landing.html'
            })
           .state('collection', {
                url: '/collection',
                controller: 'CollectionCtrl as collection',
                templateUrl: '/templates/collection.html'
            })
            .state('album', {
                url: '/album',
                templateUrl: '/templates/album.html'
<<<<<<< HEAD
            })
            .state('collection', {
                url: '/collection',
                templateUrl: '/templates/collection.html'
=======
>>>>>>> angular-controllers
            });
    };

    angular
        .module('blocJams', ['ui.router'])
        .config(config);
})();