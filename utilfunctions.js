const { createAudioResource, entersState, AudioPlayerStatus, StreamType} = require('@discordjs/voice');

module.exports = {
	playAudiofromURL: async function(player, soundFileReference) {
		const resource = createAudioResource(soundFileReference, {
			inputType: StreamType.Arbitrary,
		});
		player.play(resource);
		// Give it a maximum of 5 seconds to start playing, then another 5 seconds to finish
		await entersState(player, AudioPlayerStatus.Playing, 5e3);
		await entersState(player, AudioPlayerStatus.Idle, 5e3);
	},
	// multiply: function(a, b) {
	// 	return a * b;
	// },
};