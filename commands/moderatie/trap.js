module.exports = {
    name: "trap",
    description: 'Trap een lid uit de ober',
    args: true,
    usage: '<gebruiker>',
    //permissions: 'KICK_MEMBERS',
    //admin : true,
    execute(message, args) {
        const catchErr = err => {console.log(err)}
        const taggedUser = message.mentions.users.first();
        message.channel.send(`Jo ${taggedUser.username}, iemand probeert je de ober uit te trappen`);
    }
}