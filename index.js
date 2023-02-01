/*
  Author: Jamieson 'Basement' Walter
  Description:  Basement Bot was originally built for 'The Basement' server
*/

//-------------------------------------------------------------------------------------------

//handlers
const dynamicChannelHandler = require('./handlers/dynamicChannelHandler')
const commandHandler = require('./handlers/commandHandler')

//global variables
const env = require('./env')
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
	],
  partials: [Partials.Channel]
})
const guild = client.guilds.cache.get(env.GUILD_ID)

//-------------------------------------------------------------------------------------------

//runs on bootup
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

//runs every time a message is sent
client.on('messageCreate', message => {
  //commands
  if(message.content.startsWith(env.PREFIX)){
    commandHandler.execute(client,message,env)
  }
});

//runs every time a user changes voice channels
client.on('voiceStateUpdate', (oldState,newState) => {
  dynamicChannelHandler.execute(oldState,newState,client)
})



client.login(env.TOKEN);