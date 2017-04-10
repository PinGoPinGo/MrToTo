var request = require("request")
      var url = "https://meteotnapi.herokuapp.com/api?city=Sfax"
      request({
          url: url,
          json: true
      }, function (error, response, body) {
          if (!error && response.statusCode === 200) {
              console.log(JSON.stringify(body["today"]["tempMin"])); // Print the json response
              
          }
      });
      