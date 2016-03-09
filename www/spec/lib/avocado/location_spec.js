describe("avocado.location", function(){
  beforeEach(function() {
    locations = [
      { id: 1,
        attributes: {
          hits_destination: 5000,
          hits_origin: 10000,
          name: "Phnom Penh"
        }
      },

      { id: 2,
        attributes: {
          hits_destination: 100,
          hits_origin: 100,
          name: "Kampong Cham",
        }
      },

      { id: 3,
        attributes: {
          hits_destination: 10000,
          hits_origin: 5000,
          name: "Siem Reap"
        }
      }
    ]

    avocadoLocation = new avocado.location(locations)
  })
  describe("origins", function(){
    it("sort array with hits_origin decending", function(){
      origins = [
        { id: 1,
          attributes: {
            hits_destination: 5000,
            hits_origin: 10000,
            name: "Phnom Penh"
          }
        },
        { id: 3,
          attributes: {
            hits_destination: 10000,
            hits_origin: 5000,
            name: "Siem Reap"
          }
        },

        { id: 2,
          attributes: {
            hits_destination: 100,
            hits_origin: 100,
            name: "Kampong Cham",
          }
        }
      ]

      expect(avocadoLocation.origins()).toEqual(origins)
    })
  })


  describe("destinations", function(){
    it("sort array with hits_destination decending", function(){
      destinations = [
        { id: 3,
          attributes: {
            hits_destination: 10000,
            hits_origin: 5000,
            name: "Siem Reap"
          }
        },
        { id: 1,
          attributes: {
            hits_destination: 5000,
            hits_origin: 10000,
            name: "Phnom Penh"
          }
        },
        { id: 2,
          attributes: {
            hits_destination: 100,
            hits_origin: 100,
            name: "Kampong Cham",
          }
        }
      ]

      expect(avocadoLocation.destinations()).toEqual(destinations)
    })
  })

})
