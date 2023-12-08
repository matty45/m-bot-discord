const { SlashCommandBuilder } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer } = require('@discordjs/voice');
const { playAudiofromURL } = require('../../utilfunctions.js');

const player = createAudioPlayer();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('playlink')
		.setDescription('Joins the server you are in, plays the specified audio file, then leaves.'),
	async execute(_client, interaction) {
		const connection = joinVoiceChannel({
			channelId: interaction.member.voice.channel.id,
			guildId: interaction.guild.id,
			adapterCreator: interaction.guild.voiceAdapterCreator,
		});

		connection.subscribe(player);
		connection.player = player;

		playAudiofromURL(player, 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');

		connection.destroy();


		await interaction.reply('Pong!');
	},
};
