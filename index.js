// 1. receivesAFunction takes a callback and calls it
function receivesAFunction(callback) {
  callback();
}

// 2. returnsANamedFunction returns a named function
function returnsANamedFunction() {
  function namedFunction() {
    // this function can be empty or do something trivial
    return "I am named";
  }
  return namedFunction;
}

// 3. returnsAnAnonymousFunction returns an anonymous function
function returnsAnAnonymousFunction() {
  return function() {
    // anonymous function, no name
    return "I am anonymous";
  };
}

// Export the functions so tests can find them
module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction
};
