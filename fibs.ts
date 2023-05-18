function fibsarray(n) {
  var fibs = [0, 1];
  for (var i = 2; i < n; i++) {
    fibs[i] = fibs[i - 1] + fibs[i - 2];
  }
  return fibs;
}
console.log(fibsarray(10));
