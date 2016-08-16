empeekApp.filter('limitLength', function(){
     return function(param) {
        return param.slice(0, 6) + '...';
    }
});