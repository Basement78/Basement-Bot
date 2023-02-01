module.exports = {
    execute(message,client) {
        message.channel.send('Pong!   :ping_pong:\nCalculating ping...').then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp
            message.channel.send('Bot latency: ' + ping + 'ms' + '\nAPI latency: ' + client.ws.ping + 'ms')
        });
    },
};