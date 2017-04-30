var express = require('express');
var bodyParser = require('body-parser');

var Botkit = require('botkit');

var controller = Botkit.facebookbot({
    debug: true,
    receive_via_postback: true,
    verify_token: "vienna_bot",
    access_token: "EAADSUpZCVCL4BAIJZBqi1oIVsgA2QTYDsUNQiqERuZACo5kZCYG0HZAKNB6Ty6MeXZAKZBa8RWQEZCJZC2XrZBhNrrdWY4HFt4QZCDtwmkG6YqulZBWqNetvUqyKjL34ZCheco7ckONfp0BUrDH4vF7UpZAmb5DkWsyP28f6zBmJZCSi29GiwZDZD" //231252310689982
});

var webserver = express();
webserver.use(bodyParser.json());
webserver.use(bodyParser.urlencoded({ extended: true }));

//webserver.use(express.static('public'));
webserver.listen(process.env.PORT || 3000, null, function() {
    console.log('Express webserver configured and listening at http://localhost:' + process.env.PORT || 3000);
});

controller.webserver = webserver;

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