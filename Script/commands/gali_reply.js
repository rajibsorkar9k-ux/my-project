const fs = require("fs");
module.exports.config = {
	name: "gali",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐇𝐀𝐒𝐀𝐍 6𝐓9", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "abal",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("baicud Bokasoda")==0 || event.body.indexOf("pagol mc")==0 || event.body.indexOf("chod")==0 || event.body.indexOf("pagol nodir pola")==0 || event.body.indexOf("bc")==0 || event.body.indexOf("baicud re chudi")==0 || event.body.indexOf("baicud re chod")==0 || event.body.indexOf("baicud Abal")==0 || event.body.indexOf("baicud Boakachoda")==0 || event.body.indexOf("baicud madarchod")==0 || event.body.indexOf("pagol re chudi")==0 || event.body.indexOf("Sahu Bokachoda")==0) {
		var msg = {
				body: "তোর মতো বোকাচোদা রে আমার বস pagolচু*দা বাদ দিছে🤣\nবস এখন আর hetars চুষে না🥱😈",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }