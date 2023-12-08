const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('heartbeat')
		.setDescription('Websocket Ping. (Technical stuff)'),
	async execute(client, interaction) {
		interaction.reply(`Websocket heartbeat: ${client.ws.ping}ms.`);
	},
};
