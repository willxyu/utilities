compound = function(rate, duration, seed) {
  var a = 1
  var r = rate     || 0.0001
  var d = duration || 365
  
  for (var i = 0; i < d; i++) {
    a = a * (1 + r)
  }
  if (seed) { return {value:seed * a, rate:rate, duration:duration, seed:seed, factor:a} }
  return a
}
