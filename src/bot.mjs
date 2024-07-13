import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

bot.on("text", msg => {
	if(msg.text == '/start'){
		msg.reply.text('hello')
	}
})

export default bot
