/**
 * Created by Arvind on 21/3/16.
 */

app.controller('toolbar', function($scope, $timeout, $mdSidenav, $log){
    $scope.showMenu = buildDelayedToggler('left');
    $scope.isOpened = function(){
        return $mdSidenav('left').isOpen();
    };
    $scope.close = function(){
        $mdSidenav('left').close()
            .then(function () {
                $log.debug("close RIGHT is done");
            });
    };
    function debounce(func, wait, context) {
        var timer;
        return function debounced() {
            var context = $scope,
                args = Array.prototype.slice.call(arguments);
            $timeout.cancel(timer);
            timer = $timeout(function() {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        };
    }

    function buildDelayedToggler(navID) {
        return debounce(function() {
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        }, 200);
    }
});