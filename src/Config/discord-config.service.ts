import { DiscordOptionsFactory, Once } from '@discord-nestjs/core';
import { DiscordModuleOption } from '@discord-nestjs/core/dist/definitions/interfaces/discord-module-options';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist';
import { GatewayIntentBits } from 'discord.js';

@Injectable()
export class DiscordConfigService implements DiscordOptionsFactory {
    private readonly logger = new Logger();
    constructor(private readonly configService: ConfigService) {}
    createDiscordOptions(): DiscordModuleOption | Promise<DiscordModuleOption> {
        return {
            token: this.configService.get<string>('bot.token'),
            discordClientOptions: {
                intents: [
                    GatewayIntentBits.Guilds,
                    GatewayIntentBits.GuildMessages,
                    GatewayIntentBits.GuildMessageReactions,
                    GatewayIntentBits.MessageContent,
                    GatewayIntentBits.GuildVoiceStates,
                ],
            },
        };
    }

    @Once('ready')
    onReady(): void {
        this.logger.log('Discord bot is ready');
    }
}
