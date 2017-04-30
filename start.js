//var express = require('express');
//var bodyParser = require('body-parser');

var Botkit = require('botkit');

var controller = Botkit.facebookbot({
    debug: true,
    receive_via_postback: true,
    verify_token: "minutus_test",
    access_token: "EAALysYKSAZAgBABJEhqxW7etnSMoNm26BBNauDcAyN6wqUkdytuTE1lbUclUpGdu7pbIEH2XZCHUbzdOf2hGJVWAxwZBMcNmV0PQqXBb6KOiYBZC5ORD19wBOutFjT9bDLIxbmOBZBCLrAu1ugyKeSP4YMeT20OfI1zzZBCVkE1QZDZD" //231252310689982
});

//var webserver = express();
//webserver.use(bodyParser.json());
//webserver.use(bodyParser.urlencoded({ extended: true }));

//webserver.use(express.static('public'));
/*webserver.listen(63884, null, function() {
    console.log('Express webserver configured and listening at:' + 63884);
});*/

///controller.webserver = webserver;

console.log("Running");

controller.on('message_received', function(bot, message) {
    console.log("Message recieved: " + message);

    bot.reply(message, {"attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"What do you want to do?",
        "buttons":[
          {
            "type":"postback",
            "title":"Selfie",
            "payload":"SELFIE_ACTION"
          },
          {
            "type":"postback",
            "title":"Eat",
            "payload":"EAT_ACTION"
          },
          {
            "type":"postback",
            "title":"Event",
            "payload":"EVENT_ACTION"
          }
        ]
      }
    }});

    //Todo
});

//https://serpens.uberspace.de:3000/