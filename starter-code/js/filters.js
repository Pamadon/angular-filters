angular.module('myFilters', [])

.filter('capitalize', function() {
  var capitalizeWord = function(word) {
    return word[0].toUpperCase() + word.substring(1, word.length).toLowerCase();
  }

  return function(input) {
    if (!input) return input;
    input = input.toString();
    return input.split(' ').map(capitalizeWord).join(' ');
  }
})

.filter('ordinal', function() {
  return function(input) {
    if (isNaN(input)) return input;

    var secondToLastNumber = parseInt(input / 10) % 10;
    var lastNumber = parseInt(input) % 10;
    var ordinal = 'th';
    if (secondToLastNumber != 1) {
      switch(lastNumber) {
        case 1:
          ordinal = 'st';
          break;
        case 2:
          ordinal = 'nd';
          break;
        case 3:
          ordinal = 'rd';
          break;
      }
    }
    return input + ordinal;
  }
})

.filter('swearFilter', function() {
  var filteredWords = ['homework', 'swagger'];

  return function(input, setting) {
    var swearWord = filteredWords.indexOf(input) > -1
    if (swearWord) {
      var filtered = '';

      if (setting === "PG13") {
        var starting = 1;
        filtered = input[0];
      } else {
        var starting = 0;
      }

      for (var i = starting; i < input.length; i++) {
        filtered += '*';
      }

      return filtered;
    } else {
      return input;
    }
  }
})













