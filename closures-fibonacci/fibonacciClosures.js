function fib() {
  // Some variables here
  let count;
  let x = 1;
  let y = 0;

  function nacci() {
    // do something to those variables here
    count = y;
    y = x + y;
    x = count;

    console.log("Y:", y);
  }
  return nacci;
}

var fibCounter = fib();

fibCounter(); // should console.log "1"
fibCounter(); // should console.log "1"
fibCounter(); // should console.log "2"
fibCounter(); // should console.log "3"
fibCounter(); // should console.log "5"
fibCounter(); // should console.log "8"
