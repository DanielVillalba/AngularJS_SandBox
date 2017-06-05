app.directive('ngTest', function () {
    return {
        restrict: 'AC',
        template: '<div>This is a test from a directive template</div>',
        link: function (scope, iElement, iAttrs) {
            console.log('this is coming from the directive');
        }
    }
});