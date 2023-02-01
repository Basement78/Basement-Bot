const dynamicQueue = require("../utils/dynamicQueue")
var queue = require("../utils/dynamicQueue")
const env = require("../env")
queue = new dynamicQueue(env.DYNAMICROOT)
const { ChannelType, Partials, GuildChannelManager } = require('discord.js');
module.exports = {
    async execute (oldState,newState,client){
        const guild = client.guilds.cache.get(env.GUILD_ID)
        if(queue.containsId(newState.channelId) && newState.channelId === queue.peekTop()){
            const newChannel = await newState.member.guild.channels.create({
                name: "Dynamic Voice #" + (queue.size()+1) ,
                type: ChannelType.GuildVoice,
                parent: env.DYNAMICCAT,
            })
            queue.add(newChannel.id)
        }
        if(queue.containsId(oldState.channelId) && oldState.channel.members.size === 0 && oldState.channelId != env.DYNAMICROOT){
            queue.removeID(oldState.channelId)
            oldState.channel.delete()
            for(let i = 0; i<queue.size(); i++){
                topChannel = await guild.channels.fetch(queue.get(i), { force: true })
                topChannel.setName("Dynamic Voice #" + (i+1))
            }
        }
        if(queue.size() === 2){
            root = await guild.channels.fetch(queue.get(0), { force: true })
            join = await guild.channels.fetch(queue.get(1), { force: true })
            if(root.members.size === 0 && join.members.size === 0){
                queue.removeID(join.id);
                join.delete();
            }
        }
    }
 }