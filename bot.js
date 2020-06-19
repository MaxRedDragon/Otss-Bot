const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NzE4NTY1Mzc3NzA5MzA5OTkz.Xu0VBQ.FoPYmL67cZhafbSygB7JfR_WMQA);
