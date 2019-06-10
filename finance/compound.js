compound = function(rate, duration, seed) {
  var a = 1
  var r = rate     || 0.0001
  var d = duration || 365
  
  for (var i = 0; i < d; i++) {
    a = a * (1 + r)
  }
  if (seed) {
    var z = 1
    if (d != 365) {
      for (var i = 0; i < 365; i++) {
         z = z * (1 + r)
      }
    }
    return {value:seed * a, output:a, annualised:z, rate:rate, duration:duration, seed:seed} }
  return a
}

decompound = function(annualised, duration, seed) {
  var a = 1
  var r = annualised || 3
  var d = duration   || 365
  
  a = Math.pow(10, Math.log(1 + r) / d)
  return a
}
