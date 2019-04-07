module.exports.run = async (bot, message, args) => {

    let reason = args.join(' ') ? args.join(' ') : '이유없음.';
    let afklist = bot.afk.get(message.author.id);

    if (!afklist) {
        let construct = {
            id: message.author.id,
            reason: reason
        };

        bot.afk.set(message.author.id, construct);
        message.channel.send(`
${message.author.username} 님의 잠수상태가 시작되었습니다
사유: ${reason}`);
    }

};

module.exports.help = {
    name: '잠수'
};
