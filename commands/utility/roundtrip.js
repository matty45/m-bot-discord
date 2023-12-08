const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roundtrip')
		.setDescription('Shows roundtrip latency. (Technical stuff)'),
	async execute(_client, interaction) {
		const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
		interaction.editReply(`Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);

	},
};
