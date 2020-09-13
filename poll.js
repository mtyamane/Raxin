/*
Mark Yamane
09/13/2020

Raxin

Raxin is a Discord bot that facilitates reaction polls on a Discord server.
*/

const {Client, MessageEmbed } = require('discord.js');
const bot = new Client();
const token = 'TOKEN';

const PREFIX = '/poll';   // prefix used for bot commands
const deleteTime = 1000;  // time to delete command in millis
const rxns = new Map();   // initialize map for number emojis (0-9)

// fill rxns with number emojis (using unicode)
for (var i=0; i<10; i++) {
    rxns.set(i, String.fromCharCode(parseInt('003'+i.toString(), 16))+"\uFE0F\u20E3");
}

// signal the bot getting ready
bot.on('ready', () =>{
    console.log('Bot is active');
});

// description of poll commands
const about = new MessageEmbed()
                .setColor('#38939b')
                .setTitle('Poll Commands')
                .setDescription('**/poll**: commands\n**/poll QUESTION**: yes/no\n**/poll QUESTION, ANSWER1, ANSWER2**: specify answers (up to 10)');

// check messages
bot.on('message', msg => {
    let cmd = msg.content.substring(0,PREFIX.length)              // prefix in message
    let args = msg.content.substring(PREFIX.length).split(', ');  // split poll variables into an array (Q, A1, A2...)
    let deleteCmd = true;                                         // boolean to delete command message
    
    switch (cmd) {
        case PREFIX:
            if (!args[0]) {
                // display commands
                msg.channel.send(about);
            } else if (!args[1]) {
                // yes/no question
                msg.channel.send('**'+args[0]+'**').then(msgRxn => {
                    msgRxn.react('👍');
                    msgRxn.react('👎');
                });
            } else {
                // question with set answers
                if (args.length < 12) {
                    // w/in max number of answers

                    // make string of answers
                    let answers = rxns.get(0) + ' ' + args[1];
                    for (var i=1; i<args.length-1; i++) {
                        answers += '\n' + rxns.get(i) + ' ' + args[i+1];
                    }

                    // put answers into an Embed
                    let answerEmbed = new MessageEmbed()
                                    .setColor('#59935b')
                                    .setTitle('**'+args[0]+'**')
                                    .setDescription(answers);
                    
                    // send poll and corresponding reactions
                    msg.channel.send(answerEmbed).then(msgRxn => {
                        for (var i=0; i<args.length-1; i++) {
                            msgRxn.react(rxns.get(i));
                        }
                    });
                } else {
                    console.log('Too many answers!');
                    deleteCmd = false;
                }
            }

            if (deleteCmd) {
                // delete message used to create this poll
                msg.delete({timeout:deleteTime}).catch(console.error);
            }

            break;
    }
})

bot.login(token);