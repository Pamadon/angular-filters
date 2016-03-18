angular.module('myFilters', [])

// here's a sample filter
.filter('dummyfilter', function() {
  return function(input) {
    return 'Dummy Text!';
  };
})

// define your own here. this module will be injected in app.js
