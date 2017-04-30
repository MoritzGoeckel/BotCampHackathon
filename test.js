//https://e9130d68.ngrok.io/facebook/receive

var Botkit = require('botkit');
var controller = Botkit.facebookbot({
        access_token: "EAAau8lLYIcgBAM0WLXaA74x1Im0uVvIp39KwC1Rfs1Pc2XDFYJ0GwG5ZABZC3cxDpbfFm5lxZAgLwO0nTNTeIovFfS43elBZACC2IgcLtfrIaPkaYcSjKtO0E8ZCThX5m6iiz85JIWKrZBZCZCyYVtMQxuskPtlGl7ctqmXJNcHnEgZDZD",
        verify_token: "vienna_bot",
})

var bot = controller.spawn({ });

controller.setupWebserver(80,function(err,webserver) {
  controller.createWebhookEndpoints(controller.webserver, bot, function() {
      console.log('This bot is online!!!');
  });
});

controller.on('facebook_optin', function(bot, message) {
    console.log("Welcome:" + message);
    bot.reply(message, 'Welcome to my app!');
});

controller.on("facebook_postback", function(bot, message){
    console.log("yo!");
    console.log(message.payload);
});

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


/*controller.hears('message_received', function(bot, message) {
    console.log("msg:" + message);
    bot.reply(message, 'Hey there.');
});

controller.hears(['cookies'], 'message_received', function(bot, message) {
    bot.startConversation(message, function(err, convo) {
        convo.say('Did someone say cookies!?!!');
        convo.ask('What is your favorite type of cookie?', function(response, convo) {
            convo.say('Golly, I love ' + response.text + ' too!!!');
            convo.next();
        });
    });
});*/