import { Command, Handler } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { ApiService } from 'Services/api/api.service';
import { CommandInteraction } from 'discord.js';

@Command({
	name: 'fap',
	description: 'Get playlist command',
})
@Injectable()
export class PlaylistCommandService {
	constructor(private readonly apiService: ApiService) {}

	@Handler()
	async onPlaylist(interaction: CommandInteraction): Promise<any> {
		// const coin = await this.apiService.getCoin('');
		// return interaction.reply(coin.data.fact);
		return 'success';
	}
}
