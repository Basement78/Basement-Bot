//commands
const pingCMD = require('../commands/ping');
const announceCMD = require('../commands/announcement')

module.exports = {
    execute(client,message,env){
        const mes = message.content
        const strippedMessage = mes.startsWith(env.PREFIX) ? mes.slice(1) : mes
        const parts = strippedMessage.split(" ")
        const cmd = parts[0]
        const args = parts.slice(1)
        switch (cmd){
            case 'ping':
                pingCMD.execute(message,client)
                break
            case 'announce':
                announceCMD.execute(message)
                break
        }
    }
}