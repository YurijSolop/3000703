function massiv(count) {
    var result = []
    for (var i =0; i < count; i++) {
        var rand = Math.random() * 1000
        rand = Math.round(rand)
        result.push(rand)
    }
    return result
}

var z = massiv(10000)
console.log(z)