function receivesAFunction(callback){
  return callback('Hello');
}

function returnsANamedFunction(){
  const namedFunction = function(){
    console.log('I have a name!')
  }
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log('This is an Anonymous Function')
  }
}
