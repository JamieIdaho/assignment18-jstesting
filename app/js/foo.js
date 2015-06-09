window.Foo = (function() {

  var plusOne = function(num){
    return num +  1;
  };

  var sortArray = function(arr) {
    return arr.concat().sort();
  };

  var hasValue = function(list, item) {
    return list.indexOf(item) != -1;
  };

  function Foo() {

    this.plusOne = plusOne;
    this.sortArray = sortArray;
    this.hasValue = hasValue;

  }


  Foo.greet = function(string) {

    return "Hello, " + string + "!";

    };






  return Foo;

})();
