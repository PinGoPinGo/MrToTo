var request = require("request")
      var url = "https://meteotnapi.herokuapp.com/api?city=Sfax"
      request({
          url: url,
          json: true
      }, function (error, response, body) {
          if (!error && response.statusCode === 200) {
              console.log(body['today']['tempMin']) // Print the json response
              if(body['today']!=null){
                sendTextMessage(senderID,body['today']);
              }else{
                 sendTextMessage(senderID,"sorry !");   
              }
          }
      });
      