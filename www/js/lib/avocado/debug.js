avocado.debug = {
  log: function(var1, var2) {
    if(avocado.env.development()) {
      if(var2 == undefined)
        console.log(var1)
      else
        console.log(var1, var2)
    }
  }
}
