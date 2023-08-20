import { InjectDiscordClient, On, Once } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common/decorators/core';
import { Logger } from '@nestjs/common/services/logger.service';
import { Message } from 'discord.js';

@Injectable()
export class BotGatewayService {
	private readonly logger = new Logger(BotGatewayService.name);

	constructor(@InjectDiscordClient() private readonly client) {}

	@Once('ready')
	onReady() {
		this.logger.log(`Logged in as ${this.client.user?.tag}!`);
	}
	@On('messageCreate')
	onMessage(message: Message) {
		const { commandName, user } = message.interaction;
		this.logger.verbose(
			`Message created from @${user.username} with commad \`${commandName}\``,
		);
	}
}
