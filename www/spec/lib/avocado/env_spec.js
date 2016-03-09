describe("avocado.env", function(){
  describe("development()", function(){


    it("return false if env not in development mode", function(){
      window.appSettings = { env: 'production' }
      expect(avocado.env.development()).toBe(false)
    })

    it("return true if env in development mode", function(){
      window.appSettings = { env: 'development'}
      expect(avocado.env.development()).toBe(true)
    })

  })
})
