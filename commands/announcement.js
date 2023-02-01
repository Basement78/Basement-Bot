module.exports = {
    execute(message) {
        message.delete();
        message.channel.send("Im Back! \nCheck out my new Github repository and drop a star: \nhttps://github.com/Basement78/Basement-Bot/ \n\nThank you all!")
    }
}