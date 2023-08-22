import { InjectDiscordClient, On, Once } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common/decorators/core';
import { Logger } from '@nestjs/common/services/logger.service';

@Injectable()
export class BotGatewayService {
    private readonly logger = new Logger(BotGatewayService.name);

    constructor(@InjectDiscordClient() private readonly client) {}

    @Once('ready')
    onReady() {
        this.logger.log(`Logged in as ${this.client.user?.tag}!`);
    }

    @On('interactionCreate')
    onInteractionCreate(interaction) {
        this.logger.verbose(
            `Interaction created from @${interaction.user.username}`,
        );
    }
}
