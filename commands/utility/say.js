const { SlashCommandBuilder, PermissionFlagsBits} = require('discord.js');
const { ownerId } = require('../../config.json');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
		.setDescription('Allows you to say something as the bot! (Owner Only!)')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The text to say.')
				.setRequired(true)),
	async execute(_client, interaction) {
		if (interaction.user.id != ownerId) {await interaction.reply({ content: 'This is a bot owner only command!, sorry.', ephemeral: true });}
		const input = interaction.options.getString('input') ?? 'No input provided';
		const channel = interaction.channel;
		channel.send(input);
		await interaction.reply({ content: 'Sent message!', ephemeral: true });
	},
};
