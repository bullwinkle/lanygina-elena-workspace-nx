// import {Context, Markup, Telegraf, Telegram} from 'telegraf';
import {Markup, Telegraf, Telegram} from 'telegraf';
// import {Update} from 'typegram';
// import {InputMediaPhoto} from 'telegraf/types';

// import {Configuration as OpenAIConfiguration, OpenAIApi} from 'openai';

// const CHAT_ID = process.env.CHAT_ID as string;
// const CHANNEL_ID = process.env.CHANNEL_ID as string;
// const BOT_TOKEN = process.env.BOT_TOKEN as string;
const BOT_TOKEN = '7554641816:AAFl5XefPcfeaeqDyNugM13J912-BUCDTcI';

// const telegram: Telegram = new Telegram(BOT_TOKEN);

const bot = new Telegraf(BOT_TOKEN);


// const OPEN_AI_API_KEY = process.env.OPENAI_TOKEN as string;

// const openAIConfiguration = new OpenAIConfiguration({
//     apiKey: OPEN_AI_API_KEY,
// });
// const openai = new OpenAIApi(openAIConfiguration);


bot.start((ctx) => {
    ctx.reply('Hello ' + ctx.from.first_name + '!');
});

bot.help((ctx) => {
    ctx.reply('Send /start to receive a greeting');
    ctx.reply('Send /keyboard to receive a message with a keyboard');
    ctx.reply('Send /quit to stop the bot');
});

bot.command('quit', (ctx) => {
    // Explicit usage
    ctx.telegram.leaveChat(ctx.message.chat.id);

    // Context shortcut
    ctx.leaveChat();
});

bot.command('keyboard', (ctx) => {
    ctx.reply(
        'Keyboard',
        Markup.inlineKeyboard([
            Markup.button.callback('First option', 'first'),
            Markup.button.callback('Second option', 'second'),
            Markup.button.callback('Third option', 'third'),
        ])
    );
});

bot.command('getchatid', (ctx) => {
    const chatId = ctx.message.chat.id;
    ctx.reply(`The ID of this chat is ${chatId}`);
});


bot.on('text', async (ctx) => {
    console.log(ctx);
    console.log(ctx.chat);

    ctx.reply('You said: ' + ctx.message.text);
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
