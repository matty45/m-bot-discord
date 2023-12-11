const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('heartbeat')
		.setDescription('Websocket Ping. (Technical stuff)'),
	async execute(client, interaction) {
		interaction.reply({ content: `Websocket heartbeat: ${client.ws.ping}ms.`, ephemeral: true });
	},
};
