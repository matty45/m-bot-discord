const { SlashCommandBuilder, PermissionFlagsBits} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
		.setDescription('Allows you to say something as the bot!')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The text to say.')
				.setRequired(true)),
	async execute(interaction) {
		const input = interaction.options.getString('input') ?? 'No input provided';
		const channel = interaction.channel;
		channel.send(input);
		await interaction.reply({ content: 'Sent message!', ephemeral: true });
	},
};
