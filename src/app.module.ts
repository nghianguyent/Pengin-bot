import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';
import { AppConfig } from 'Config/configuration.service';
import { DiscordConfigService } from 'Config/discord-config.service';
import { ApiModule } from 'Modules/api/api.module';
import { BotGatewayModule } from 'Modules/bot-gateway/bot-gateway.module';

@Module({
	imports: [
		DiscordModule.forRootAsync({
			useClass: DiscordConfigService,
		}),
		BotGatewayModule,
		AppConfig,
		ApiModule,
	],
})
export class AppModule {}
