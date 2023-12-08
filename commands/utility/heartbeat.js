const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('heartbeat')
		.setDescription('Websocket Ping.'),
	async execute(interaction) {
		const client = interaction.client;
		interaction.reply(`Websocket heartbeat: ${client.ws.ping}ms.`);
	},
};
